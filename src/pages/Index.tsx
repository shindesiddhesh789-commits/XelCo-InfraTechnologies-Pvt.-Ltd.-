import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ProductShowcase from "@/components/ProductShowcase";
import SolutionsCarousel from "@/components/SolutionsCarousel";
import {
  AllTogetherCleaner,
  AllTogetherSmarter,
  AllTogetherGreener,
} from "@/components/AllTogetherSections";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <VideoSection />
    <ProductShowcase />
    <SolutionsCarousel />
    <AllTogetherCleaner />
    <AllTogetherSmarter />
    <AllTogetherGreener />
    <CTABanner />
    <Footer />
  </div>
);

export default Index;
