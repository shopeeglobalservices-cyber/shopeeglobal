import { Link } from "react-router-dom";
import { formatDate } from "utils/format";
import BrandImage from "./BrandImage";
import { articleCover } from "data/images";

const ArticleCard = ({ article, featured = false }) => (
    <Link
        to={`/insights/${article.slug}`}
        data-testid={`article-card-${article.slug}`}
        className="group flex h-full flex-col border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-crimson/40 hover:shadow-lg focus:ring-2 focus:ring-crimson-bright focus:outline-none"
    >
        <BrandImage
            image={articleCover(article.slug)}
            accent
            className="aspect-[16/9] w-full"
            imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
            testId={`article-card-image-${article.slug}`}
        />
        <div className="flex flex-1 flex-col p-7 sm:p-8">
            <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-azure">
                    {article.category}
                </span>
                <span className="text-xs text-slate">{article.readingTime}</span>
            </div>
            <h3
                className={`mt-4 font-bold tracking-tight text-charcoal transition-colors duration-300 group-hover:text-crimson ${
                    featured ? "text-xl sm:text-2xl" : "text-lg"
                }`}
            >
                {article.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{article.excerpt}</p>
            <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <span className="text-xs text-slate">{formatDate(article.date)}</span>
                <span className="text-sm font-bold text-crimson">Read article</span>
            </div>
        </div>
    </Link>
);

export default ArticleCard;
