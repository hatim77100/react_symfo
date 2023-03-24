import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import DeleteProduct from "./deleteProduct";
import { AuthToken } from "../../../middleware/token/authToken";
import process from "process";
import Navbar from "../../../components/navbar";

const ShowProduct = () => {
  const [product, getProduct] = useState({
    // Returns an object of key/value pairs of the dynamic params
    // from the current URL that were matched by the route path.
    id: useParams().id,
    name: "",
    description: "",
    price: "",
  });

  const headers = {
    Authorization: `bearer ${AuthToken.get(`${process.env.CURRENT_TOKEN}`)}`,
  };

  useEffect(() => {
    axios
      .get(`${process.env.URL_PRODUCT}/${product.id}`, { headers: headers })
      .then((response) => {
        getProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Projet {product.name}</h2>
      <div className="flex justify-center">
        <div className="w-3/4 bg-gradient-to-t from-orange-400 to-slate-400">
          <div className="w-full flex flex-col items-center py-10">
            <b>Nom :</b>
            <p>{product.name}</p>
            <b>Description :</b>
            <p>{product.description}</p>
            <b>Prix :</b>
            <p>{product.price}€</p>
          </div>
          {window.user === null ||
          window.user.roles[0] === "ROLE_USER" ? null : (
            <>
              <button>
                <Link to={`${process.env.URL_PRODUCT_EDIT}/${product.id}`}>
                  Editer
                </Link>
              </button>
              <button onClick={() => DeleteProduct(product.id)}>
                Supprimer
              </button>
            </>
          )}
          <div className="flex justify-center py-10">
            <Link to={`${process.env.URL_PRODUCT_ALL}`}>
              Retour liste produits
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
