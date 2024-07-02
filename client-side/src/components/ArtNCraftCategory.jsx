import { Link, useLoaderData } from "react-router-dom";

const SubCategoryCard = ({ category }) => {
    const { image, subcategory_name, origins, key_elements } = category;

    return (
        <Link to={`/specific/${subcategory_name}`}>
            <div className="card card-compact hover:scale-105 h-full duration-300 max-w-96 bg-base-100 shadow-xl border mx-auto">
                <figure className="max-h-64"><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{subcategory_name}</h2>
                    <h4 className="text-base">{origins}</h4>
                    <div>
                        <ul className="list-disc pl-5">
                            <li>
                                <p className="text-base">{key_elements}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Link>
    );
}

const ArtNCraftCategory = () => {
    const { categories } = useLoaderData();

    return (
        <div>
            <div className="mb-4">
                <h1 className="text-center text-4xl font-bold mb-1  md:mb-5">Discover Artistic Categories</h1>
                <p className="px-8 md:px-28 text-center mb-6 md:mb-12">Whether you are passionate about card making, scrapbooking, paper quilling, origami, glass painting, lampworking, or glass dying & staining, you will find endless inspiration here. </p>
            </div>
            <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    categories.map(category => <SubCategoryCard category={category} key={category._id}></SubCategoryCard>)
                }
            </div>
        </div>
    );
};

export default ArtNCraftCategory;