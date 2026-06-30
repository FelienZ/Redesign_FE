import HeroSection from "@/custom/heroSection";
import RatingSection from "@/custom/ratingSection";
import AboutSection from "@/custom/aboutSection";
import GameSection from "@/custom/gameSection";
import NewsSection from "@/custom/newsSection";
import AddSection from "@/custom/addSection";
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
