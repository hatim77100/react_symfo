import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import process from "process";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    isSaving: false,
  });

  const onChangeName = (event) => {
    setProduct({
      ...product,
      name: event.target.value,
    });
  };

  const onChangeDescription = (event) => {
    setProduct({
      ...product,
      description: event.target.value,
    });
  };

  const onChangePrice = (event) => {
    setProduct({
      ...product,
      price: parseFloat(event.target.value),
    });
  };

  const submitProduct = async () => {
    setProduct({
      ...product,
      isSaving: true,
    });
    const formData = {
      name: product.name,
      description: product.description,
      price: product.price,
    };
    await axios
      .post(`${process.env.URL_PRODUCT}`, formData)
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Produit ajouté !",
          showConfirmButton: false,
          timer: 1500,
        });
        setProduct({
          name: "",
          description: "",
          price: 10,
          isSaving: false,
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Erreur !",
          showConfirmButton: false,
          timer: 1500,
        });
        console.error(error);
        setProduct({
          ...product,
          isSaving: false,
        });
      });
  };

  return (
    <div>
      <h2>Créer un nouveau projet</h2>
      <div>
        <div>
          <Link to={`${process.env.URL_PRODUCT_ALL}`}>Voir tous les projets</Link>
        </div>
        <div>
          <form>
            <div>
              <label htmlFor="name">Nom</label>
              <input
                onChange={onChangeName}
                value={product.name}
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="price">Prix</label>
              <input
                value={product.price}
                onChange={onChangePrice}
                id="price"
                name="price"
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                value={product.description}
                onChange={onChangeDescription}
                id="description"
                name="description"
                rows="3"
              ></textarea>
            </div>
            <button
              disabled={product.isSaving}
              onClick={() => submitProduct()}
              type="button"
            >
              Créer un produit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
