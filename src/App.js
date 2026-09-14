import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import HowWeWork from "@/pages/HowWeWork";
import Insights from "@/pages/Insights";
import Article from "@/pages/Article";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <SmoothScroll>
                <div className="min-h-screen bg-white font-sans text-charcoal antialiased">
                    <Header />
                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/services/:slug" element={<ServiceDetail />} />
                            <Route path="/how-we-work" element={<HowWeWork />} />
                            <Route path="/insights" element={<Insights />} />
                            <Route path="/insights/:slug" element={<Article />} />
                            <Route path="/careers" element={<Careers />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/privacy-policy" element={<Privacy />} />
                            <Route path="/terms-of-use" element={<Terms />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </SmoothScroll>
        </BrowserRouter>
    );
}

export default App;
