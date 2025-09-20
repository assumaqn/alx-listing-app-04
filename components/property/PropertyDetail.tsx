type Property = {
  id: number;
  name: string;
  price: number;
  location: string;
  description: string;
  imageUrl: string;
};

const PropertyDetail: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={property.imageUrl}
        alt={property.name}
        className="w-full h-96 object-cover"
      />
      <div className="p-6">
        <h1 className="text-2xl font-bold">{property.name}</h1>
        <p className="text-gray-500 mt-2">{property.location}</p>
        <p className="mt-4 text-gray-700">{property.description}</p>
        <p className="mt-4 text-green-600 font-bold">${property.price}/night</p>
      </div>
    </div>
  );
};

export default PropertyDetail;
