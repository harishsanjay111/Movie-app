import React from "react";

const data = [
  { id: 1, nav: "Home", href : "/movie" },
  { id: 2, nav: "Movies", href : "/movie" },
  { id: 3, nav: "TV Shows", href : "/movie" },
  { id: 4, nav: "🔎︎ Search", href : "/Search" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-5 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-md">
      <ul className="flex justify-center gap-10 max-w-7xl mx-auto text-white font-medium text-lg">
        {data.map((item) => (
          <li key={item.id} className="group cursor-pointer capitalize">
            <a className="relative pb-1" href={item.href}>
              {item.nav}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
