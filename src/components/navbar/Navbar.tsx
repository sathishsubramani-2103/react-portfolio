import { useRef } from "react";
import "./Navbar.css";
import { DiSublime } from "react-icons/di";
import { FiAlignJustify, FiX } from "react-icons/fi";

const Navbar = () => {
  const menuRef = useRef<HTMLUListElement>(null!);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <header className="navbar">
      <DiSublime size={80} />
      <FiAlignJustify
        size={30}
        onClick={openMenu}
        className="nav-mobile-menu-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <FiX size={30} onClick={closeMenu} className="nav-mobile-menu-close" />
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
      <button className="nav-menu-btn">Connect with me</button>
    </header>
  );
};

export default Navbar;
