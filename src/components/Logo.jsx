export const LogoMark = ({ className = "h-9 w-9" }) => (
    <img src="/logo-mark.png" alt="" aria-hidden="true" className={`${className} object-contain`} />
);

export const Logo = ({ compact = false, className = "h-12 sm:h-14" }) => (
    <span className="flex items-center" data-testid="site-logo">
        {compact ? (
            <LogoMark className="h-9 w-9 shrink-0" />
        ) : (
            <img src="/logo-full.png" alt="Shopee Global" className={`${className} w-auto object-contain`} decoding="async" />
        )}
    </span>
);
