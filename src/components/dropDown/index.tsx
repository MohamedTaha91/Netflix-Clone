import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export default function Dropdown() {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left content-center pl-6 md:hidden"
    >
      {" "}
      {/* Hide on md and above */}
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-800">
          Browse
          <ChevronDown className="-mr-1 h-5 w-5 text-white" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-700 data-[focus]:text-white"
            >
              Home
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-700 data-[focus]:text-white"
            >
              Series
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-700 data-[focus]:text-white"
            >
              Films
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-white data-[focus]:bg-gray-700 data-[focus]:text-white"
              >
                New & Popular
              </button>
            </MenuItem>
          </form>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-white data-[focus]:bg-gray-700 data-[focus]:text-white"
              >
                My List
              </button>
            </MenuItem>
          </form>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-white data-[focus]:bg-gray-700 data-[focus]:text-white"
              >
                Browse by languages
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}
