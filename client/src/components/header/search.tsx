import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Search = () => {
  return (
    <div className="flex w-3/4 p-4 items-center">
      <label htmlFor="searchbar">
        <MagnifyingGlassIcon className="w-7 h-7" />
      </label>
      <input
        id="searchbar"
        className="ml-4 w-full outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
