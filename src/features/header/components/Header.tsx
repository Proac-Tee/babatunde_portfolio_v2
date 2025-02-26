import React from "react";
import Logo from "./Logo";
import { navLinks } from "../utils/navLinks";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <section>
        <Logo />
        <nav>
          {navLinks.map((item, index) => (
            <ul key={index}>
              <li>
                <Link href={item.href}>{item.label}</Link>
              </li>
            </ul>
          ))}
        </nav>
        <div>x</div>
      </section>
    </header>
  );
};

export default Header;
