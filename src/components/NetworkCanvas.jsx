import { useEffect, useRef } from "react";

const LINK_DIST = 150;
const RED = "rgba(255, 59, 59, 0.85)";
const BLUE = "rgba(77, 139, 255, 0.8)";

const createNodes = (w, h) => {
    const count = Math.max(28, Math.min(80, Math.floor((w * h) / 16000)));
    return Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.5 + 0.9,
        color: Math.random() < 0.35 ? RED : BLUE,
    }));
};

const fitCanvas = (canvas, ctx) => {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w: rect.width, h: rect.height };
};

const moveNodes = (nodes, w, h) => {
    nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
    });
};

const drawNetwork = (ctx, nodes, w, h, px, py) => {
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < LINK_DIST) {
                ctx.strokeStyle = `rgba(77, 139, 255, ${(1 - d / LINK_DIST) * 0.32})`;
                ctx.beginPath();
                ctx.moveTo(nodes[i].x + px, nodes[i].y + py);
                ctx.lineTo(nodes[j].x + px, nodes[j].y + py);
                ctx.stroke();
            }
        }
    }
    nodes.forEach((n) => {
        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(n.x + px, n.y + py, n.r, 0, Math.PI * 2);
        ctx.fill();
    });
};

const useNetworkCanvas = (ref) => {
    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return undefined;
        const ctx = canvas.getContext("2d");
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
        let size = fitCanvas(canvas, ctx);
        let nodes = createNodes(size.w, size.h);
        let raf = null;

        const frame = () => {
            mouse.x += (mouse.tx - mouse.x) * 0.04;
            mouse.y += (mouse.ty - mouse.y) * 0.04;
            moveNodes(nodes, size.w, size.h);
            drawNetwork(ctx, nodes, size.w, size.h, mouse.x * 16, mouse.y * 16);
            raf = requestAnimationFrame(frame);
        };
        const onMove = (e) => {
            mouse.tx = e.clientX / window.innerWidth - 0.5;
            mouse.ty = e.clientY / window.innerHeight - 0.5;
        };
        const onResize = () => {
            size = fitCanvas(canvas, ctx);
            nodes = createNodes(size.w, size.h);
            if (reduced) drawNetwork(ctx, nodes, size.w, size.h, 0, 0);
        };

        if (reduced) {
            drawNetwork(ctx, nodes, size.w, size.h, 0, 0);
        } else {
            raf = requestAnimationFrame(frame);
            window.addEventListener("mousemove", onMove, { passive: true });
        }
        window.addEventListener("resize", onResize);
        return () => {
            if (raf) cancelAnimationFrame(raf);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onMove);
        };
    }, [ref]);
};

const NetworkCanvas = ({ className = "" }) => {
    const ref = useRef(null);
    useNetworkCanvas(ref);
    return <canvas ref={ref} className={className} aria-hidden="true" />;
};

export default NetworkCanvas;
