import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import CraftItems from "../components/CraftItems";
import ArtNCraftCategory from "../components/ArtNCraftCategory";
import FaqSection from "../components/FaqSection";
import ContactForm from "../components/ContactForm";

const Home = () => {
    return (
        <div className="my-4">
            <Helmet>
                <title>CraftEclipse | Home</title>
            </Helmet>
            <Banner></Banner>
            <CraftItems></CraftItems>
            <ArtNCraftCategory></ArtNCraftCategory>
            <FaqSection></FaqSection>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;