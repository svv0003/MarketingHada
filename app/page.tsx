import Hero from "@/components/Hero";
import About from "@/components/About";
import Reason from "@/components/Reason";
import Services from "@/components/Services";
import FinalMessage from "@/components/FinalMessage";

export default function Home() {
    return (
        <>
            <div className="snap-section"><Hero /></div>
            <div className="snap-section"><About /></div>
            <div className="snap-section"><Reason /></div>
            <div className="snap-section"><Services /></div>
            <div className="snap-section"><FinalMessage /></div>
        </>
    );
}
