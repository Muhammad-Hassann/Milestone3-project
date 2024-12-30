import { Slider } from "@/components/ui/slider"

const FilterSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Categories</h3>
        {['Skincare', 'Makeup', 'Hair Care', 'Fragrance', 'Tools'].map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input type="checkbox" id={category} className="mr-2" />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Price Range</h3>
        <Slider defaultValue={[0, 100]} max={100} step={1} />
        <div className="flex justify-between mt-2">
          <span>$0</span>
          <span>$100</span>
        </div>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Brand</h3>
        <select className="w-full p-2 border rounded">
          <option>All Brands</option>
          <option>Brand A</option>
          <option>Brand B</option>
          <option>Brand C</option>
        </select>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Rating</h3>
        {[4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center mb-2">
            <input type="checkbox" id={`rating-${rating}`} className="mr-2" />
            <label htmlFor={`rating-${rating}`}>{rating}+ Stars</label>
          </div>
        ))}
      </div>

      {/* Availability */}
      <div>
        <h3 className="text-lg font-medium mb-2">Availability</h3>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="in-stock" className="mr-2" />
          <label htmlFor="in-stock">In Stock</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="on-sale" className="mr-2" />
          <label htmlFor="on-sale">On Sale</label>
        </div>
      </div>
    </div>
  )
}

export default FilterSection

