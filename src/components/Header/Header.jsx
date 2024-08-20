import { useSelector } from "react-redux";
import UserMenu from "../DropdownProfile/DropdownProfile";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ sidebarOpen, setSidebarOpen }) {
  const user = useSelector((state) => state.user);
  return (
    <header
      className={`sticky top-0 before:absolute before:inset-0 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-black before:-z-10 z-30`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16`}>
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="w-6 h-6 fill-current" />
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <div></div>
            <ThemeToggle />
            {/*  Divider */}
            <hr className="w-px h-6 bg-gray-200 dark:bg-white border-none" />
            <UserMenu user={user} align="right" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
