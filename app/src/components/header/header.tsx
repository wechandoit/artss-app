import Search from "../header/search";
import Clock from "../header/clock";

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
