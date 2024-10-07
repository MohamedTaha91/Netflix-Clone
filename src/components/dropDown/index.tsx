import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { MENU_ITEMS } from "@/constants/menu";

export default function Dropdown() {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left content-center pl-6 md:hidden"
    >
      {" "}
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
          {MENU_ITEMS.map((item, index) => (
            <MenuItem key={index}>
              <a
                href={item.href}
                className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-700 data-[focus]:text-white"
              >
                {item.name}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
