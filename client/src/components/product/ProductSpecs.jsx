/* eslint-disable react/prop-types */
const ProductSpecs = ({ specs }) => {
  if (!specs || Object.keys(specs).length === 0) {
    return (
      <p className="text-sm text-gray-500">No specifications available.</p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {Object.entries(specs).map(([key, value]) => (
        <div key={key}>
          <p className="text-sm font-medium text-gray-700">{key}</p>
          <p className="text-sm text-gray-600">{value || "N/A"}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductSpecs;
