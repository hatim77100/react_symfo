import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import process from "process";

const EditProduct = () => {
  const [product, setProduct] = useState({
    // Returns an object of key/value pairs of the dynamic params
    // from the current URL that were matched by the route path.
    id: useParams().id,
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
      price: event.target.value,
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.URL_PRODUCT}/${product.id}`)
      .then(function (response) {
        setProduct({
          ...product,
          name: response.data.name,
          description: response.data.description,
          price: response.data.price,
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "An Error Occured!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }, []);

  const submitEdit = () => {
    let formData = {
      name: product.name,
      description: product.description,
      price: product.price,
    };
    axios
      .put(`${process.env.URL_PRODUCT}/${product.id}`, formData)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Projet mis à jour !",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Erreur !",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <h2>Editer le projet {product.name}</h2>
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
              onClick={() => submitEdit()}
              type="button"
            >
              Mettre à jour
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
