import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const itemList = [
    {
      id: 1,
      name: "Home",
      link: "home",
    },
    {
      id: 2,
      name: "About",
      link: "about",
    },
    {
      id: 3,
      name: "Skills",
      link: "skills",
    },
    {
      id: 4,
      name: "Projects",
      link: "projects",
    },
    {
      id: 5,
      name: "Contact",
      link: "contact",
    },
  ];
  // const [activeId, setActiveId] = useState(itemList[0].id);

  return (
    <nav className="border-black-700 sticky top-0 right-0 z-10 border-b backdrop-blur-md backdrop-filter">
      <div className="font-Roboto mx-20 flex h-[10vh] flex-row items-center justify-between tracking-widest">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex flex-row items-center gap-6 uppercase">
          {itemList.map((list) => (
            <li key={list.id}>
              <Link
                activeClass="active"
                to={list.link}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer rounded-md border-2 border-transparent px-4 py-2 transition-all duration-200 ease-in-out hover:border-white active:scale-90"
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
