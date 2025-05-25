import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LogoSection } from "@/components/LogoSection";
import { ColorSection } from "@/components/ColorSection";
// import { TypographySection } from "@/components/TypographySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LogoSection />
      <ColorSection />
      {/* <TypographySection /> */}

      <Footer />
    </main>
  );
}
