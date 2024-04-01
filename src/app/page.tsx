import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import Footer from "@/components/Footer";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectList />
      <TechStack />
      <Footer />
    </div>
  );
}
