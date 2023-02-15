import { Link } from "react-scroll";
import navItems from "../helpers/navItems";

export default function Navbar() {
  return (
    <nav className="sticky top-0 right-0 z-10 border-b border-black-700 backdrop-blur-md backdrop-filter">
      <div className="mx-20 flex h-[10vh] flex-row items-center justify-between font-Roboto tracking-widest">
        <Link smooth={true} duration={500} to="home" className="cursor-pointer">
          <h1 className="font-Balsamiq text-2xl font-bold">My Portfolio</h1>
        </Link>
        <ul className="flex flex-row items-center gap-6 uppercase">
          {navItems.map((list) => (
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
