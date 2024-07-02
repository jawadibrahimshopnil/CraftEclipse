import { useContext, useState } from "react";
import { useEffect } from "react";
import { MdExpandMore } from "react-icons/md";
import { AuthContext } from "../routes/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftCard = ({ craft, crafts, setCrafts }) => {
    const { _id, craftName, stockStatus, craftPhotoURL, price, rating, customization } = craft;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://craft-store-server.vercel.app/deletecraft/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = crafts.filter(craft=>craft._id !== id);
                            setCrafts(remaining)
                        }
                    })
            }
        });

    }
    return (
        <div className="card card-side card-body max-w-lg bg-base-100 shadow-xl border gap-4 mx-auto mb-4">
            <figure className="rounded-xl w-1/3">
                <img src={craftPhotoURL} alt="craft" />
            </figure>
            <div className="flex flex-col">
                <div className="grow">
                    <h2 className="card-title">{craftName}</h2>
                    <div>
                        <p>
                            <span className="font-bold">Price: </span>
                            <span className="text-orange-600 font-bold text-lg">${price}</span>
                        </p>
                        <p>
                            <span className="font-bold">Rating: </span>
                            <span>{rating} Out of 5</span>
                        </p>
                        <p>
                            <span className="font-bold">Customization: </span>
                            <span>{customization}</span>
                        </p>
                        <p>
                            <span className="font-bold">Stock Status: </span>
                            <span>{stockStatus}</span>
                        </p>
                    </div>
                </div>

                <div className="card-actions">
                    <Link to={`/updatecraft/${_id}`} className="btn bg-orange-500 text-white">Update</Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white">Delete</button>
                </div>
            </div>
        </div>
    );
}

const MyCrafts = () => {
    const { user } = useContext(AuthContext);
    const [crafts, setCrafts] = useState([]);

    useEffect(() => {
        fetch(`https://craft-store-server.vercel.app/crafts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCrafts(data)
            })
    }, [user])

    const handleCustomization = (data) => {
        fetch(`https://craft-store-server.vercel.app/crafts/${user?.email}?customization=${data}`)
            .then(res => res.json())
            .then(data => {
                setCrafts(data)
            })
    }

    return (
        <div className="my-6">
            <div className="mb-4">
                <h1 className="text-center text-4xl font-bold mb-1  md:mb-5">Explore Your Artistic Creations</h1>
                <p className="px-8 md:px-28 text-center mb-4 md:mb-6">Welcome to your personal gallery of artistic creations! Here, you can view and manage all the wonderful arts and crafts you have added to your collection.</p>
            </div>

            <div className='grid place-items-center mb-6'>
                <details className="dropdown">
                    <summary className="btn px-10 py-3 bg-orange-500 hover:bg-orange-300 text-white rounded-lg mr-4 border-none font-semibold text-lg hover:bg-BVGreen">Customization <MdExpandMore className="scale-150" /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-200 rounded-box w-52">
                        <li><a onClick={()=>handleCustomization('yes')}>Yes</a></li>
                        <li><a onClick={()=>handleCustomization('no')}>No</a></li>
                    </ul>
                </details>
            </div>

            <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    crafts.map(craft => <MyCraftCard craft={craft} crafts={crafts} setCrafts={setCrafts} key={craft._id}></MyCraftCard>)
                }
            </div>

        </div>
    );
};

export default MyCrafts;