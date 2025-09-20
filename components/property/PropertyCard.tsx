// components/property/PropertyCard.tsx
type Property = {
  id: number;
  name: string;
  price: number;
  location: string;
  imageUrl: string;
};

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={property.imageUrl}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-gray-500">{property.location}</p>
        <p className="mt-2 text-green-600 font-bold">${property.price}/night</p>
      </div>
    </div>
  );
};

export default PropertyCard;
