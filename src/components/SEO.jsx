import { useEffect } from "react";

const upsertMeta = (attr, key, content) => {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
};

const SEO = ({ title, description, path = "/", type = "website", jsonLd = null }) => {
    useEffect(() => {
        const origin = window.location.origin;
        const url = `${origin}${path}`;
        document.title = title;
        upsertMeta("name", "description", description);
        upsertMeta("property", "og:title", title);
        upsertMeta("property", "og:description", description);
        upsertMeta("property", "og:url", url);
        upsertMeta("property", "og:type", type);
        upsertMeta("property", "og:site_name", "Shopee Global");
        upsertMeta("name", "twitter:card", "summary");
        upsertMeta("name", "twitter:title", title);
        upsertMeta("name", "twitter:description", description);

        let canonical = document.head.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }
        canonical.setAttribute("href", url);

        let script = null;
        if (jsonLd) {
            script = document.createElement("script");
            script.type = "application/ld+json";
            script.dataset.seoPage = "true";
            script.textContent = JSON.stringify(jsonLd);
            document.head.appendChild(script);
        }
        return () => {
            if (script) script.remove();
        };
    }, [title, description, path, type, jsonLd]);

    return null;
};

export default SEO;
