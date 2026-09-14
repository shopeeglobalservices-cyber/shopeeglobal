import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import SEO from "components/SEO";
import PageHero from "components/PageHero";
import CTASection from "components/CTASection";
import ArticleCard from "components/ArticleCard";
import BrandImage from "components/BrandImage";
import { Reveal } from "components/Reveal";
import { insightCategories, publishedArticles } from "data/insights";
import { IMAGES, articleCover } from "data/images";
import { formatDate } from "utils/format";

const BREADCRUMBS = [{ label: "Insights" }];
const FILTERS = ["All", ...insightCategories];
const testIdFor = (c) => `filter-${c.toLowerCase().replace(/[^a-z]+/g, "-")}`;

const matches = (a, category, q) =>
    (category === "All" || a.category === category) &&
    (!q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q));

const FeaturedArticle = ({ article }) => (
    <Reveal>
        <Link
            to={`/insights/${article.slug}`}
            data-testid="featured-article-card"
            className="group grid grid-cols-1 border border-line bg-navy transition-shadow duration-300 hover:shadow-xl focus:ring-2 focus:ring-crimson-bright focus:outline-none lg:grid-cols-2"
        >
            <div className="relative min-h-[260px] overflow-hidden">
                <BrandImage image={articleCover(article.slug)} tone="dark" className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]" testId="featured-article-image" />
                <span className="absolute bottom-6 left-6 text-[11px] font-bold uppercase tracking-[0.25em] text-azure-bright">
                    Featured insight
                </span>
            </div>
            <div className="p-8 sm:p-12">
                <div className="flex items-center gap-4 text-xs text-white/50">
                    <span className="font-bold uppercase tracking-[0.2em] text-azure-bright">{article.category}</span>
                    <span>{formatDate(article.date)}</span>
                    <span>{article.readingTime}</span>
                </div>
                <h2 className="mt-4 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-crimson-bright sm:text-2xl">
                    {article.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">{article.excerpt}</p>
                <span className="mt-8 inline-block text-sm font-bold text-crimson-bright">Read the featured article</span>
            </div>
        </Link>
    </Reveal>
);

const InsightFilters = ({ category, onCategory, query, onQuery }) => (
    <div className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
            {FILTERS.map((c) => (
                <button
                    key={c}
                    type="button"
                    data-testid={testIdFor(c)}
                    onClick={() => onCategory(c)}
                    aria-pressed={category === c}
                    className={`border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors duration-200 focus:ring-2 focus:ring-crimson-bright focus:outline-none ${
                        category === c
                            ? "border-azure bg-azure text-white"
                            : "border-line bg-white text-slate hover:border-crimson hover:text-crimson"
                    }`}
                >
                    {c}
                </button>
            ))}
        </div>
        <div className="relative lg:w-72">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" aria-hidden="true" />
            <input
                type="search"
                value={query}
                onChange={(e) => onQuery(e.target.value)}
                placeholder="Search insights"
                aria-label="Search insights"
                data-testid="insights-search-input"
                className="w-full border border-line bg-white py-3 pl-11 pr-4 text-sm text-charcoal placeholder:text-slate/60 focus:border-azure focus:outline-none"
            />
        </div>
    </div>
);

const InsightGrid = ({ articles }) =>
    articles.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" data-testid="insights-grid">
            {articles.map((a, i) => (
                <Reveal key={a.slug} delay={(i % 3) * 0.07} className="h-full">
                    <ArticleCard article={a} />
                </Reveal>
            ))}
        </div>
    ) : (
        <p className="mt-10 border border-line bg-offwhite p-10 text-center text-sm text-slate" data-testid="insights-empty">
            No articles match your current filters. Try a different category or search term.
        </p>
    );

const Insights = () => {
    const [category, setCategory] = useState("All");
    const [query, setQuery] = useState("");
    const featured = publishedArticles.find((a) => a.featured) || publishedArticles[0];
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return publishedArticles.filter((a) => matches(a, category, q));
    }, [category, query]);

    return (
        <>
            <SEO
                title="Insights | Shopee Global"
                description="Practical thinking on technology, e-commerce, digital growth, customer experience, tele-sales, and business operations from Shopee Global."
                path="/insights"
            />
            <PageHero
                overline="Insights"
                title="Practical thinking for businesses that execute."
                copy="Educational perspectives on technology, e-commerce, digital growth, and customer engagement—written to be used, not just read."
                breadcrumbs={BREADCRUMBS}
                testId="insights-hero"
                image={IMAGES.insights.hero}
            />
            <section className="bg-white" data-testid="insights-listing">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                    {featured && <FeaturedArticle article={featured} />}
                    <InsightFilters category={category} onCategory={setCategory} query={query} onQuery={setQuery} />
                    <InsightGrid articles={filtered} />
                </div>
            </section>
            <CTASection
                heading="Have a question these articles raise?"
                copy="Send it to us. If it is relevant to your business, we will give you a straight answer."
            />
        </>
    );
};

export default Insights;
