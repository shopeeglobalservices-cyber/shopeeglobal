import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Check, Link2, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import BrandImage from "@/components/BrandImage";
import { MaskedLine, FadeIn, Reveal } from "@/components/Reveal";
import { getArticle, relatedArticles } from "@/data/insights";
import { articleCover } from "@/data/images";
import { formatDate } from "@/utils/format";
import NotFound from "./NotFound";

const blockKey = (block) => block.text || block.items.join("|");

const Block = ({ block }) => {
    switch (block.type) {
        case "h2":
            return (
                <h2 className="mt-12 text-xl font-bold tracking-tight text-navy sm:text-2xl">
                    {block.text}
                </h2>
            );
        case "ul":
            return (
                <ul className="mt-6 space-y-3">
                    {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-charcoal">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-crimson" aria-hidden="true" />
                            {item}
                        </li>
                    ))}
                </ul>
            );
        default:
            return (
                <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
                    {block.text}
                </p>
            );
    }
};

const ArticleHero = ({ article, breadcrumbs }) => (
    <section className="blueprint-grid relative overflow-hidden bg-navy" data-testid="article-hero">
        <BrandImage image={articleCover(article.slug)} tone="dark" priority className="absolute inset-0 opacity-50" testId="article-hero-image" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-36 sm:pt-44 lg:px-8">
            <Breadcrumbs items={breadcrumbs} onDark />
            <FadeIn delay={0.1}>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-azure-bright">
                    {article.category}
                </p>
            </FadeIn>
            <h1 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                <MaskedLine delay={0.2}>{article.title}</MaskedLine>
            </h1>
            <FadeIn delay={0.5}>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                    <span>{article.author}</span>
                    <span>{formatDate(article.date)}</span>
                    <span>{article.readingTime}</span>
                </div>
            </FadeIn>
        </div>
    </section>
);

const CopyLinkButton = () => {
    const [copied, setCopied] = useState(false);
    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    };
    return (
        <button
            type="button"
            onClick={copyLink}
            data-testid="article-copy-link-button"
            className="inline-flex items-center gap-2 border border-line px-5 py-2.5 text-sm font-bold text-charcoal transition-colors hover:border-crimson hover:text-crimson focus:ring-2 focus:ring-crimson-bright focus:outline-none"
        >
            {copied ? <Check className="h-4 w-4 text-azure" aria-hidden="true" /> : <Link2 className="h-4 w-4" aria-hidden="true" />}
            {copied ? "Link copied" : "Copy article link"}
        </button>
    );
};

const ArticleBody = ({ article }) => (
    <article className="bg-white" data-testid="article-body">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
            <p className="border-l-2 border-azure-bright pl-6 text-lg font-medium leading-relaxed text-charcoal sm:text-xl">
                {article.excerpt}
            </p>
            {article.content.map((block) => (
                <Block key={blockKey(block)} block={block} />
            ))}
            <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-azure">Written by</p>
                    <p className="mt-1 text-sm font-bold text-charcoal">{article.author}</p>
                </div>
                {/* Social sharing: LinkedIn share button activates here once SITE.linkedinUrl is configured */}
                <CopyLinkButton />
            </div>
            <Link
                to="/insights"
                data-testid="article-back-link"
                className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-crimson transition-colors hover:text-navy focus:ring-2 focus:ring-crimson-bright focus:outline-none"
            >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to all insights
            </Link>
        </div>
    </article>
);

const RelatedReading = ({ article }) => (
    <section className="border-t border-line bg-offwhite" data-testid="related-articles">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
            <Reveal>
                <h2 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">Related reading</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {relatedArticles(article).map((a, i) => (
                    <Reveal key={a.slug} delay={i * 0.08} className="h-full">
                        <ArticleCard article={a} />
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

const Article = () => {
    const { slug } = useParams();
    const article = getArticle(slug);
    const published = article && article.published;

    const articleLd = useMemo(
        () =>
            published && {
                "@context": "https://schema.org",
                "@type": "Article",
                headline: article.title,
                description: article.metaDesc,
                datePublished: article.date,
                author: { "@type": "Organization", name: article.author },
                publisher: { "@type": "Organization", name: "Shopee Global" },
                mainEntityOfPage: `${window.location.origin}/insights/${article.slug}`,
            },
        [article, published],
    );
    const breadcrumbs = useMemo(
        () => published && [{ label: "Insights", to: "/insights" }, { label: article.category }],
        [article, published],
    );

    if (!published) return <NotFound />;

    return (
        <>
            <SEO
                title={article.metaTitle}
                description={article.metaDesc}
                path={`/insights/${article.slug}`}
                type="article"
                jsonLd={articleLd}
            />
            <ArticleHero article={article} breadcrumbs={breadcrumbs} />
            <ArticleBody article={article} />
            <RelatedReading article={article} />
            <CTASection />
        </>
    );
};

export default Article;
