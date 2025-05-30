import TruncateText from "./TruncateText";
import RatingStars from "./RatingStars";

const data = {
  id: 101,
  name: "iPhone 15",
  image: "",
  briefDescription: "Latest Apple flagship phone",
  detailedDescription:
    "The iPhone 15 comes with the latest A16 Bionic chip, a new Dynamic Island, and a high-resolution Super Retina XDR display.",
  price: 80000,
  launchDate: "2024-03-15",
  orders: 5000,
  inventory: 150,
  category: "Mobile",
  supplier: "Apple Inc.",
  rating: 4.5,
  status: "Active",
};

const formatPrice = (price: number) => {
  return price >= 1000 ? `${price / 1000}k` : price;
};

const ProductTable = () => {
  return (
    <div className="overflow-auto rounded-xl shadow-xl m-4">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Image</th>
            <th className="p-2">Name</th>
            <th className="p-2">Brief Description</th>
            <th className="p-2">Detailed Description</th>
            <th className="p-2">Price</th>
            <th className="p-2">Launch Date</th>
            <th className="p-2">Orders</th>
            <th className="p-2">Inventory</th>
            <th className="p-2">Category</th>
            <th className="p-2">Supplier</th>
            <th className="p-2">Rating</th>
            <th className="p-2">Status</th>
            <th className="p-2">Expand</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="border-t">
            <td className="p-2">{data.id}</td>
            <td className="p-2">
              <div className="text-xs text-gray-500">{data.name}</div>
            </td>
            <td className="p-2">{data.name}</td>
            <td className="p-2">
              <TruncateText text={data.briefDescription} />
            </td>
            <td className="p-2">
              <TruncateText text={data.detailedDescription} />
            </td>
            <td className="p-2">₹{formatPrice(data.price)}</td>
            <td className="p-2">{data.launchDate}</td>
            <td className="p-2">{data.orders}</td>
            <td className="p-2">{data.inventory}</td>
            <td className="p-2">{data.category}</td>
            <td className="p-2">{data.supplier}</td>
            <td className="p-2">
              <RatingStars rating={data.rating} />
            </td>
            <td className="p-2">{data.status}</td>
            <td className="p-2 text-blue-500 cursor-pointer font-bold">+</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
