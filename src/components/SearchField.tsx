import { forwardRef, InputHTMLAttributes } from "react";

const SearchField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <label htmlFor="searchField">Search</label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
        {...props}
        ref={ref}
        type="search"
        id="searchField"
      />
    </div>
  );
});

SearchField.displayName = "SearchField"

export default SearchField;