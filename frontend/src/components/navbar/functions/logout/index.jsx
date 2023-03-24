import Swal from "sweetalert2";
import axios from "axios";
import process from "process";

const LogOut = () => {
  Swal.fire({
    title: "Se déconnecter ?",
    text: "Allons, restez encore un peu avec nous !",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Annuler",
    cancelButtonColor: "#f67274",
    confirmButtonColor: "#52dd84",
    confirmButtonText: "Me déconnecter",
  })
    .then((result) => {
      if (result.isConfirmed) {
        axios.post(`${process.env.LOGOUT}`).then(() => {
          Swal.fire({
            icon: "success",
            title: "Déconnexion réussie",
            timer: 2500,
            showConfirmButton: false,
          });

          setTimeout(() => {
            window.location.reload();
          }, 3000);
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Erreur",
        showConfirmButton: false,
        timer: 2500,
      });
    });
};

export default LogOut;
