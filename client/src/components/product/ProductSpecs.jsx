/* eslint-disable react/prop-types */

const ProductSpecs = ({ specs }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {Object.entries(specs).map(([key, value]) => (
        <div key={key} className="flex items-center space-x-2">
          <div>
            <p className="text-sm font-medium">{key}</p>
            <p className="text-sm">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSpecs;
