import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";

const CraftItems = () => {
    const {allCrafts} = useLoaderData();
    const sixCrafts = allCrafts.slice(0, 6);
    console.log(sixCrafts)
    return (
        <div className="mb-8">
            <div className="mb-4">
                <h1 className="text-center text-4xl font-bold mb-1  md:mb-5">Craft Items</h1>
                <p className="px-8 md:px-28 text-center mb-6 md:mb-12"> The artistry of paper crafts and glass art with our exquisite collection of handmade treasures. Each item is meticulously crafted by skilled artisans, offering a blend of creativity, elegance, and craftsmanship.</p>
            </div>
            <div className="md:grid md:grid-cols-2 xl:grid-cols-3">
                {
                    sixCrafts.map(craft=><CraftCard craft={craft} key={craft._id}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default CraftItems;