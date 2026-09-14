import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = ({ items, onDark = false }) => {
    useEffect(() => {
        const ld = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${window.location.origin}/` },
                ...items.map((item, i) => ({
                    "@type": "ListItem",
                    position: i + 2,
                    name: item.label,
                    ...(item.to ? { item: `${window.location.origin}${item.to}` } : {}),
                })),
            ],
        };
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(ld);
        document.head.appendChild(script);
        return () => script.remove();
    }, [items]);

    const linkCls = onDark
        ? "text-white/60 hover:text-crimson-bright transition-colors"
        : "text-slate hover:text-crimson transition-colors";
    const currentCls = onDark ? "text-white" : "text-charcoal";

    return (
        <nav aria-label="Breadcrumb" data-testid="breadcrumbs" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em]">
                <li>
                    <Link to="/" className={linkCls}>
                        Home
                    </Link>
                </li>
                {items.map((item, i) => (
                    <li key={item.label} className="flex items-center gap-1.5">
                        <ChevronRight
                            className={`h-3.5 w-3.5 ${onDark ? "text-white/30" : "text-line"}`}
                            aria-hidden="true"
                        />
                        {item.to && i < items.length - 1 ? (
                            <Link to={item.to} className={linkCls}>
                                {item.label}
                            </Link>
                        ) : (
                            <span aria-current="page" className={currentCls}>
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
