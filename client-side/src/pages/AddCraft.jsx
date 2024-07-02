import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { AuthContext } from "../routes/AuthProvider";

const AddCraft = () => {
	const {user} = useContext(AuthContext)

	const handleAddCraft = event => {
		event.preventDefault();

		const form = event.target;

		const userName = form.userName.value;
		const userEmail = form.userEmail.value;
		const craftName = form.craftName.value;
		const category = form.category.value;
		const stockStatus = form.stockStatus.value;
		const processingTime = form.processingTime.value;
		const craftPhotoURL = form.craftPhotoURL.value;
		const shortDescription = form.shortDescription.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const customization = form.customization.value;

		const newCraft = { userName, userEmail, craftName, category, stockStatus, processingTime, craftPhotoURL, shortDescription, price, rating, customization }

		console.log(newCraft);

		// const location = "https://craft-store-server.vercel.app/addcraft";

		// send data to the server
		fetch("https://craft-store-server.vercel.app/addcraft", {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newCraft)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.insertedId) {
					toast.success("Craft Added Successfully")
				}
			})
	}

	return (

		<form onSubmit={handleAddCraft} className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-base-200 my-4">
			<Helmet>
				<title>CraftEclipse | Update Craft</title>
			</Helmet>
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-bold text-2xl">Add <span className="text-orange-500">New Craft</span></p>
				<p className="text-base">Here, you can showcase your latest artistic creation by adding a new craft item to our collection.</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="userName" className="">User Name</label>
					<input required type="text" defaultValue={user.displayName} disabled name="userName" id="userName" placeholder="ex: Jawad Ibrahim" className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="userEmail" className="">User Email</label>
					<input required type="email" defaultValue={user.email} name="userEmail" id="userEmail" disabled className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="craftName" className="">Craft Name</label>
					<input required type="text" name="craftName" id="craftName" placeholder="ex: Paper Plane" className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="category" className="">Category</label>
					<select required name="category" id="category" className="select w-full px-4 py-2 border rounded-md border-gray-400 text-base">
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
					<select required name="stockStatus" id="stockStatus" className="select w-full px-4 py-2 border rounded-md border-gray-400 text-base">
						<option>In Stock</option>
						<option>Made to Order</option>
					</select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="processingTime" className="">Processing Time</label>
					<input required type="text" name="processingTime" id="processingTime" placeholder="ex: 2-3 days" className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				<div className="col-span-full">
					<label htmlFor="craftPhotoURL" className="">Photo URL</label>
					<input required type="url" name="craftPhotoURL" id="craftPhotoURL" placeholder="ex: https://user.com/photo.jpg" className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				<div className="col-span-full">
					<label htmlFor="shortDescription" className="">Short Description</label>
					<input required type="text" name="shortDescription" id="shortDescription" placeholder="ex: How to make a paper plane ... ..." className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="price" className="">Price</label>
					<input required type="number" step='0.01' name="price" id="price" placeholder="ex: 15" className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="rating" className="">Rating</label>
					<input required type="number" step='0.01' min='0' max="5" name="rating" id="rating" placeholder="ex: 4" className="w-full px-4 py-2 border rounded-md border-gray-400" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="customization" className="">Customization</label>
					<select required name="customization" id="customization" className="select w-full px-4 py-2 border rounded-md border-gray-400 text-base">
						<option>yes</option>
						<option>no</option>
					</select>
				</div>
			</div>
			<div className="col-start-4 md:col-span-2 lg:col-start-2">
				<button className="btn w-full bg-orange-500 text-white text-base">Add Craft</button>
			</div>
		</form>
	);
};

export default AddCraft;