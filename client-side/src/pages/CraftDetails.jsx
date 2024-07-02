import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
    const craft = useLoaderData();
    const { userName, userEmail, craftName, category, stockStatus, processingTime, craftPhotoURL, shortDescription, price, rating, customization } = craft;
    return (
        <div className="lg:flex flex-row gap-5 justify-between lg:px-0 lg:py-0 px-10 py-7 mb-6 rounded-3xl mt-4">
            <div className="rounded-2xl lg:w-[48%] max-w-[80%] lg:m-0 mx-auto">
                <img src={craftPhotoURL} className="lg:max-w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col lg:mt-0 mt-6 lg:w-[48%] mr-4">
                <div className="grow">
                    <div className="mb-4">
                        <h2 className="mb-4 text-4xl font-bold font-playFair">{craftName}</h2>
                        <p className="text-lg">{shortDescription}</p>
                    </div>
                    <div className="flex lg:flex-col gap-4 divide-x-2 lg:divide-x-0">
                        <div className="w-1/2 lg:w-auto">
                            <h1 className="divider font-bold text-xl">Item Details</h1>

                            <p className="justify-between text-xl">Price: <span className="text-xl text-green-600 font-medium">${price}</span></p>
                            <p className="justify-between text-xl">Category: <span className="text-xl font-medium">{category}</span></p>
                            <p className="justify-between text-xl">Stock Status: <span className="text-xl font-medium">{stockStatus}</span></p>
                            <p className="justify-between text-xl">Customization: <span className="text-xl font-medium">{customization}</span></p>
                            <p className="justify-between text-xl">Processing Time: <span className="text-xl font-medium">{processingTime}</span></p>
                            <p className="justify-between text-xl">Rating: <span className="text-xl font-medium">{rating} Out of 5</span></p>
                        </div>
                        <div className="w-1/2 lg:w-auto pl-4 lg:pl-0">
                            <h1 className="divider font-bold text-xl">User Info</h1>

                            <p className="justify-between text-xl">User Name: <span className="text-xl font-medium">{userName}</span></p>
                            <p className="justify-between text-xl">User Email: <span className="text-xl font-medium">{userEmail}</span></p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default CraftDetails;