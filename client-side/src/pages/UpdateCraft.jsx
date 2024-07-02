import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateCraft = () => {
	const loadedCraft = useLoaderData();
	const { _id, craftName, category, stockStatus, processingTime, craftPhotoURL, shortDescription, price, rating, customization } = loadedCraft;

	const handleUpdate = event =>{
		event.preventDefault();

		const form = event.target;

		const craftName = form.craftName.value;
		const category = form.category.value;
		const stockStatus = form.stockStatus.value;
		const processingTime = form.processingTime.value;
		const craftPhotoURL = form.craftPhotoURL.value;
		const shortDescription = form.shortDescription.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const customization = form.customization.value;

		const updateCraft = { craftName, category, stockStatus, processingTime, craftPhotoURL, shortDescription, price, rating, customization }

		console.log(updateCraft);

		// update to database
		fetch(`https://craft-store-server.vercel.app/updatecraft/${_id}`,{
			method: "PUT",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(updateCraft)
		})
		.then(res=>res.json())
		.then(data=>{
			if(data.modifiedCount>0){
				toast.success("Craft data updated Successfully")
			}
		})
	}


    return (
        <form onSubmit={handleUpdate} className="p-6 rounded-md shadow-sm bg-base-200 my-4">
            <Helmet>
                <title>CraftEclipse | Update Craft</title>
            </Helmet>
            <div className="mb-4">
                <h1 className="text-center text-4xl font-bold mb-1  md:mb-5"><span className="text-orange-500">Update</span> Craft Information</h1>
                <p className="px-8 md:px-28 text-center mb-6 md:mb-12">Welcome to the Update Craft Info page! Here, you can easily modify and enhance the details of your craft items to ensure they accurately represent your artistic creations.</p>
            </div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="craftName" className="">Craft Name</label>
                    <input type="text" name="craftName" id="craftName" defaultValue={craftName} className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="category" className="">Category</label>
					<select defaultValue={category} required name="category" id="category" className="select w-full px-4 py-2 border rounded-md border-gray-400 text-base">
						<option>Card Making</option>
						<option>Scrapbooking</option>
						<option>Paper Quilling & Origami</option>
						<option>Glass Painting</option>
						<option>Lampworking</option>
						<option>Glass Dying & Staining</option>
					</select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="stockStatus" className="">Stock Status</label>
					<select required defaultValue={stockStatus} name="stockStatus" id="stockStatus" className="select w-full px-4 py-2 border rounded-md border-gray-400 text-base">
						<option>In Stock</option>
						<option>Made to Order</option>
					</select>
				</div>
				
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="processingTime" className="">Processing Time</label>
					<input type="text" name="processingTime" id="processingTime" defaultValue={processingTime} className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				<div className="col-span-full">
					<label htmlFor="craftPhotoURL" className="">Photo URL</label>
					<input type="url" name="craftPhotoURL" id="craftPhotoURL" defaultValue={craftPhotoURL} className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>


				<div className="col-span-full">
					<label htmlFor="shortDescription" className="">Short Description</label>
					<input type="text" name="shortDescription" id="shortDescription" defaultValue={shortDescription} className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="price" className="">Price</label>
					<input type="number" step="0.01" name="price" id="price" defaultValue={price} className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="rating" className="">Rating</label>
					<input type="number" min='0' max="5" name="rating" step="0.01" id="rating" defaultValue={rating} className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="customization" className="">Customization</label>
					<select required name="customization" defaultValue={customization} id="customization" className="select w-full px-4 py-2 border rounded-md border-gray-400 text-base">
						<option>yes</option>
						<option>no</option>
					</select>
				</div>
			</div>
            <div className="mt-4">
                <button className="btn w-full bg-orange-500 text-white text-base">Update Craft</button>
            </div>
		</form>
    );
};

export default UpdateCraft;