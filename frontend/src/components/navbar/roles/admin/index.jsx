import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../../functions/logout";

const Admin = () => {
  return (
    <nav className="w-full fixed top-0 bg-gradient-to-r from-orange-400 to-slate-400 text-black uppercase p-4">
      <ul className="flex flex-row justify-around">
        <Link
          to={`/`}
          className="hover:transition hover:text-white hover:duration-500 hover:ease-in-out"
        >
          Accueil
        </Link>
        <li>
          <Link
            to={`${process.env.URL_PRODUCT_ALL}`}
            className="hover:transition hover:text-white hover:duration-500 hover:ease-in-out"
          >
            Nos produits
          </Link>
        </li>
        <li>
          <Link
            to={`${process.env.URL_CLIENT_ALL}`}
            className="hover:transition hover:text-white hover:duration-500 hover:ease-in-out"
          >
            Nos clients
          </Link>
        </li>
        <li>
          <a
            href={"/dashboard"}
            className="hover:transition hover:text-white hover:duration-500 hover:ease-in-out"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href={"/admin"}
            className="hover:transition hover:text-white hover:duration-500 hover:ease-in-out"
          >
            Admin
          </a>
        </li>
        <li>
          <Link
            to={`/users`}
            className="hover:transition hover:text-white hover:duration-500 hover:ease-in-out"
          >
            Users
          </Link>
        </li>
        <li>
          <button
            className="uppercase hover:transition hover:text-white hover:duration-500 hover:ease-in-out"
            onClick={() => LogOut()}
          >
            Déconnexion
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Admin;
