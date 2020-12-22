import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-pink-400">
      <div className="container mx-auto flex justify-between px-10">
        <nav className="flex">
          <NavLink
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-pink-800 text-4xl font-bold cursive tracking-widest"
            activeClassName="text-white"
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-pink-800"
            activeClassName="text-red-100 bg-pink-700"
            to="/about"
          >
            About Me!
          </NavLink>
          <NavLink
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-pink-800"
            activeClassName="text-red-100 bg-pink-700"
            to="/project"
          >
            Projects
          </NavLink>
          <NavLink
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-pink-800"
            activeClassName="text-red-100 bg-pink-700"
            to="/post"
          >
            Certificates/Trainings
          </NavLink>
          {/* <NavLink
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
            to="/projects"
          >
            Contacts
          </NavLink> */}
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://linkedin.com/in/therezcausing/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://instagram.com/itherez/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/therezcausing"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
