import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Reason from "@/components/Reason";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import FinalMessage from "@/components/FinalMessage";
import FloatingLogo from "@/components/FloatingLogo";

export default function Home() {
    return (
        <main>
            <FloatingLogo />
            <Header />
            <Hero />
            <About />
            <Reason />
            <Services />
            <Reviews />
            <FinalMessage />
        </main>
    );
}