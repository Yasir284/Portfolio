import { Link } from "react-scroll";

export default function Navbar() {
  const itemList = [
    {
      id: 1,
      name: "Home",
      link: "home",
      offset: -60,
    },
    {
      id: 2,
      name: "About",
      link: "about",
      offset: -60,
    },
    {
      id: 3,
      name: "Skills",
      link: "skills",
      offset: -60,
    },
    {
      id: 4,
      name: "Projects",
      link: "projects",
      offset: -60,
    },
    {
      id: 5,
      name: "Contact",
      link: "contact",
      offset: 0,
    },
  ];

  return (
    <nav className="sticky top-0 right-0 z-10 border-b border-black-700 backdrop-blur-md backdrop-filter">
      <div className="mx-20 flex h-[10vh] flex-row items-center justify-between font-Roboto tracking-widest">
        <Link smooth={true} duration={500} to="home" className="cursor-pointer">
          <h1 className="font-Balsamiq text-2xl font-bold">My Portfolio</h1>
        </Link>
        <ul className="flex flex-row items-center gap-6 uppercase">
          {itemList.map((list) => (
            <li key={list.id}>
              <Link
                activeClass="active"
                to={list.link}
                spy={true}
                smooth={true}
                offset={list.offset}
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
