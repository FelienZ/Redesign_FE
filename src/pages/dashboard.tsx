import HeroSection from "@/components/custom/heroSection";
import RatingSection from "@/components/custom/ratingSection";
import AboutSection from "@/components/custom/aboutSection";
import GameSection from "@/components/custom/gameSection";
import NewsSection from "@/components/custom/newsSection";
import AddSection from "@/components/custom/addSection";
import Footer from "@/layout/footer";

export default function Dashboard() {
  return (
    <section className="bg-background">
      <HeroSection />
      <RatingSection />
      <AboutSection />
      <GameSection />
      <NewsSection />
      <AddSection />
      <Footer />
    </section>
  );
}
