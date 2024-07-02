import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const AllCrafts = () => {
    const allCrafts = useLoaderData();

    return (
        <div className="container p-2 mx-auto sm:p-4">
            <Helmet>
                <title>CraftEclipse | All Crafts</title>
            </Helmet>
            <h2 className="mb-4 text-3xl font-semibold leading-tight text-center">All Arts and Crafts</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="bg-base-300">
                        <tr className="text-left">
                            <th className="p-3">Name #</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Processing Time</th>
                            <th className="p-3">Stock Status</th>
                            <th className="p-3 text-right">Price</th>
                            <th className="p-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCrafts.map(craft => {
                                const { _id, craftName, category, stockStatus, processingTime, price } = craft;

                                return (
                                    <tr key={_id} className="border-b border-opacity-20 border-gray-300 bg-base-200">
                                        <td className="p-3">
                                            <p>{craftName}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{category}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{processingTime}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{stockStatus}</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>${price}</p>
                                        </td>
                                        <td className="text-center">
                                            <Link to={`/craft/${_id}`} className="p-1 font-semibold rounded-md bg-orange-500 text-gray-50">View Details
                                            </Link>
                                        </td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCrafts;