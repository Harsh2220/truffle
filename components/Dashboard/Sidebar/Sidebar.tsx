import { useState } from "react";
import Contacts from "./svgs/Contacts";
import Dashboard from "./svgs/Dashboard";
import Invoice from "./svgs/Invoice";
import Proforma from "./svgs/Proforma";
import Swap from "./svgs/Swap";
import Transfer from "./svgs/Transfer";

const MenuItems = [
  {
    icon: <Dashboard />,
    name: "Dashboard",
    lineThrough: false,
  },
  {
    icon: <Invoice />,
    name: "Invoice",
    lineThrough: false,
  },
  {
    icon: <Proforma />,
    name: "Proforma",
    lineThrough: true,
  },
  {
    icon: <Swap />,
    name: "Swap",
    lineThrough: true,
  },
  {
    icon: <Transfer />,
    name: "Transfer",
    lineThrough: true,
  },
  {
    icon: <Contacts />,
    name: "Contacts",
    lineThrough: true,
  },
];

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  return (
    <aside
      id="logo-sidebar"
      className="sticky top-0 left-0 z-40 w-[264px] h-screen"
      aria-label="Sidebar"
    >
      <div className="h-[83px] flex items-center justify-center border-b-2 border-[#F5F5F5]">
        <img src="logo.svg" alt="logo" className="h-7 w-40" />
      </div>
      <div className="h-full pl-8 py-4 pr-3 overflow-y-auto">
        <ul className="space-y-2">
          {MenuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center px-4 py-3 ${
                selected === index
                  ? "bg-white rounded-lg shadow-[0px 20px 27px rgba(0, 0, 0, 0.05)]"
                  : null
              }`}
            >
              {selected === index ? (
                <>{item.icon}</>
              ) : (
                <div
                  className={`p-2 bg-white rounded-lg shadow-[0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07)]`}
                >
                  {item.icon}
                </div>
              )}
              <span
                className={`ml-3 ${item.lineThrough ? "line-through" : null}`}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
