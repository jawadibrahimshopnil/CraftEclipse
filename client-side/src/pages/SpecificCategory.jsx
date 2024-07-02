import { Helmet } from "react-helmet-async";
import CraftCard from "../components/CraftCard";
import { useLoaderData } from 'react-router-dom';

const SpecificCategory = () => {
    const loadedCrafts = useLoaderData();
    console.log(loadedCrafts)

    return (
        <div className="my-8">
            <Helmet>
                <title>CraftEclipse | Specific Category</title>
            </Helmet>
            <div className="mb-4">
                <h1 className="text-center text-4xl font-bold mb-1  md:mb-5">Explore Specific Creations</h1>
                <p className="px-8 md:px-28 text-center mb-4 md:mb-6">Browse through our collection of specific crafts and discover a world of creativity. From intricate designs to stunning works of art, our curated selection offers something for every enthusiast.</p>
            </div>
            <div className="md:grid md:grid-cols-2 xl:grid-cols-3">
                {
                    loadedCrafts.map(craft=><CraftCard craft={craft} key={craft._id}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default SpecificCategory;