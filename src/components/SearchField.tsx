import { forwardRef, InputHTMLAttributes } from "react";

const SearchField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <div>
      <label htmlFor="searchField">Search</label>
      <input
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