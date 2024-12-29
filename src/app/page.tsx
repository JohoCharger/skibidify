import 'public/landing.css';
import 'components/Transformer'

import Navbar from "components/nav/Navbar";
import Footer from "components/nav/Footer";
import HeroBanner from "components/landing/HeroBanner";
import Features from "components/landing/Features";
import HowWork from "components/landing/HowWork";
import Pricing from "components/landing/Pricing";
import FooterCTA from "components/landing/FooterCTA";

export default function Home() {
    return (
        <>
            <Navbar/>
            <main>
                <HeroBanner/>
                <hr/>
                <Features/>
                <hr/>
                <HowWork/>
                <hr/>
                <Pricing/>
                <hr/>
                <FooterCTA/>
            </main>
            <Footer/>
        </>
    );
}
