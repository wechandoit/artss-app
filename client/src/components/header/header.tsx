import Search from "./search";
import Clock from "./clock";

const Header = () => {
  return (
    <div className="flex justify-center top-0 border-b text-lg">
      {/* Search, Clock components */}
      <Search />
      <Clock />
    </div>
  );
};

export default Header;
