import { Typewriter } from "react-simple-typewriter";
import Slider from "./Slider";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
    return (
        <div className="hero md:px-12 px-4 md:py-8 py-4 mb-8 rounded-lg bg-base-200">
            <div className="hero-content flex-col-reverse md:flex-row p-0">
                <div>
                    <h1 className="text-4xl font-bold">Welcome to<span className="text-4xl font-extrabold ml-1 gap-0">Craft<span className="text-orange-500">Eclipse</span></span></h1>
                    <p className="text-lg">
                        <Typewriter
                            cursor
                            cursorBlinking
                            delaySpeed={1000}
                            deleteSpeed={25}
                            loop={0}
                            typeSpeed={75}
                            words={[
                                'Paper Crafts Galore',
                                'Artisanal Creations',
                                'Handmade Treasures',
                                'Glass Artistry',
                            ]}
                        />
                    </p>
                    <Fade duration={2000} cascade damping={3e-1}>
                        <p className="py-6">Indulge in the artistry of handmade treasures and unleash your creativity with CraftEclipse. Explore a curated collection of paper crafts and glass art, personalize your own creations, and join our vibrant community of artisans. Let us craft something beautiful together!</p>
                    </Fade>

                    <button className="btn bg-orange-500 text-white">Get Started</button>
                </div>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Banner;