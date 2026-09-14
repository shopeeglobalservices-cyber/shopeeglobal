import { Store, Code, Smartphone, Headphones } from "lucide-react";

const ICONS = {
    store: Store,
    code: Code,
    smartphone: Smartphone,
    headset: Headphones,
};

const ServiceIcon = ({ name, className = "h-6 w-6" }) => {
    const Icon = ICONS[name] || Store;
    return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
};

export default ServiceIcon;
