import React from "react";
import { Link } from "react-router-dom";

const Anonymous = () => {
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
            href={"/register"}
            className="hover:transition hover:text-white hover:duration-500 hover:ease-in-out"
          >
            Inscription
          </a>
        </li>
        <li>
          <a
            href={"/login"}
            className="hover:transition hover:text-white hover:duration-500 hover:ease-in-out"
          >
            Connexion
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Anonymous;
