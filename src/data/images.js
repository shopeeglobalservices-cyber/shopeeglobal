// Central image registry. Swap any URL here to change imagery site-wide.
// Photos are royalty-free stock (Unsplash); alt text stays descriptive and neutral.
const unsplash = (id, w = 1600) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const IMAGES = {
    home: {
        hero: { src: unsplash("1497215728101-856f4ea42174", 2000), alt: "Bright modern office with large windows and plants" },
        team: { src: unsplash("1522071820081-009f0129c71c"), alt: "Team collaborating around laptops at a shared table" },
        planning: { src: unsplash("1552664730-d307ca884978"), alt: "Team planning with sticky notes on a whiteboard" },
        strengths: { src: unsplash("1600880292203-757bb62b4baf"), alt: "Two colleagues celebrating a result at a desk" },
    },
    about: {
        hero: { src: unsplash("1531482615713-2afd69097998", 2000), alt: "Colleagues in conversation in a bright workspace" },
        overview: { src: unsplash("1519389950473-47ba0277781c"), alt: "Modern open office with people at their desks" },
        philosophy: { src: unsplash("1573164713988-8665fc963095"), alt: "Two colleagues reviewing code together on a monitor" },
        gurugram: { src: unsplash("1587474260584-136574528ed5"), alt: "India Gate at dusk in the National Capital Region" },
    },
    services: {
        hero: { src: unsplash("1498050108023-c5249f4df085", 2000), alt: "Laptop and notebook on a workspace desk" },
        "ecommerce-services": { src: unsplash("1556740758-90de374c12ad"), alt: "Online store displayed on a laptop screen" },
        "web-development": { src: unsplash("1461749280684-dccba630e2f6"), alt: "Source code displayed on a dark monitor" },
        "app-development": { src: unsplash("1551650975-87deedd944c3"), alt: "Mobile application open on a smartphone beside a laptop" },
        "tele-calling-customer-support": { src: unsplash("1587560699334-cc4ff634909a"), alt: "Desk phone and laptop in a quiet office" },
    },
    howWeWork: {
        hero: { src: unsplash("1553877522-43269d4ea984", 2000), alt: "Overhead view of a team working on laptops" },
        models: { src: unsplash("1521791136064-7986c2920216"), alt: "Two people shaking hands across a table" },
    },
    insights: {
        hero: { src: unsplash("1551288049-bebda4e38f71", 2000), alt: "Analytics dashboard on a screen" },
        default: { src: unsplash("1498050108023-c5249f4df085", 1200), alt: "Laptop and notebook on a workspace desk" },
        articles: {
            "building-scalable-digital-platforms": { src: unsplash("1555066931-4365d14bab8c", 1200), alt: "Code editor on a laptop screen" },
            "improving-ecommerce-customer-journeys": { src: unsplash("1556745757-8d76bdb6984b", 1200), alt: "Customer paying by card at a checkout terminal" },
            "effective-tele-calling-lead-follow-up": { src: unsplash("1542744173-8e7e53415bb0", 1200), alt: "Team meeting around a conference table" },
        },
    },
    careers: {
        hero: { src: unsplash("1522071820081-009f0129c71c", 2000), alt: "Team collaborating around laptops at a shared table" },
        culture: { src: unsplash("1573164713988-8665fc963095"), alt: "Two colleagues reviewing work together on a monitor" },
    },
    contact: {
        hero: { src: unsplash("1504384308090-c894fdcc538d", 2000), alt: "Open-plan office with rows of workstations" },
        office: { src: unsplash("1559136555-9303baea8ebd"), alt: "Bright open office with people at work" },
    },
};

export const articleCover = (slug) => IMAGES.insights.articles[slug] || IMAGES.insights.default;
