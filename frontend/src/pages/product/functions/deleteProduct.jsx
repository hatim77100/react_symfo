import axios from "axios";
import Swal from "sweetalert2";
import process from "process";

const DeleteProduct = (id) => {
  Swal.fire({
    title: "Etes-vous sur?",
    text: "Vous ne pourrez revenir en arrière !",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Annuler",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui, supprimer !",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .delete(`${process.env.URL_PRODUCT}/${id}`)
        .then(function (response) {
          Swal.fire({
            icon: "success",
            title: "Projet supprimé !",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Erreur",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  });
};

export default DeleteProduct;
