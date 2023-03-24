import React, { useState } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";
import process from "process";

const DashBoard = () => {
  const [user, setUser] = useState({
    email: window.user.email,
    roles: window.user.roles[0],
    password: window.user.password,
    alias: window.user.alias,
    imageFile: window.user.imageFile,
    imageName: window.user.imageName,
    imageSize: window.user.updatedAt,
    updatedAt: "2022-12-20T20:59:18.661Z",
  });

  const onChangeImageFile = (event) => {
    console.log(event.target.files[0].name);
    setUser({
      ...user,
      imageName: event.target.files[0].name,
    });
    // console.log(event.target.value)
  };

  const submitForm = async () => {
    await axios
      .post("https://localhost:8000/api/users", {
        email: "stringss",
        roles: ["string"],
        password: "string",
        alias: "string",
        imageFile: null,
        imageName: user.imageName,
        imageSize: null,
        updatedAt: null,
      })
      .then((resp) => console.log(resp));
  };

  return (
    <>
      <Navbar />
      <div className="w-min-screen h-min-screen flex flex-col items-center mt-20">
        <div className="py-10 text-center uppercase">
          <h1 className="text-4xl">Bonjour {window.user.alias} !</h1>
          <h2 className="text-2xl">Bienvenue sur votre profil 🚀</h2>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center items-center bg-gradient-to-t from-orange-400 to-slate-400">
            <div className="py-4">
              <img
                src={`/images/users/${window.user.image_name}`}
                alt={window.user.image_name}
              />
            </div>
            <div className="flex flex-col items-center py-4">
              <label htmlFor="">Actualiser votre photo de profil :</label>
              <input
                type="file"
                className="cursoir-pointer italic text-sm"
                accept="image/png, image/jpeg"
                onChange={onChangeImageFile}
              />
            </div>
          </div>
          <div className="flex flex-col bg-gradient-to-b p-16 from-orange-400 to-slate-400">
            <div className="inline-flex text-sm">
              <h2 className="font-bold">Votre adresse e-mail :</h2>
              <span className="pl-1 italic">{window.user.email}</span>
            </div>
            <div className="inline-flex text-sm">
              <h2 className="font-bold">Votre pseudo :</h2>
              <span className="pl-1 italic">{window.user.alias}</span>
            </div>
            <h2 className="text-center py-10 uppercase text-sm font-bold">
              Modifier vos coordonées
            </h2>
            <form action="" className="text-sm">
              <div className="grid grid-cols-2">
                <label htmlFor="">
                  Adresse e-mail<span className="text-red-600">*</span> :
                </label>
                <input type="text" className="ml-2 border border-black" />
              </div>
              <div className="grid grid-cols-2 py-4">
                <label htmlFor="">
                  Pseudonyme<span className="text-red-600">*</span> :
                </label>
                <input type="text" className="ml-2 border border-black" />
              </div>
              <div className="grid grid-cols-2">
                <label htmlFor="">
                  Mot de passe<span className="text-red-600">*</span> :
                </label>
                <input type="text" className="ml-2 border border-black" />
              </div>
              <div className="grid grid-cols-2 pt-4">
                <label htmlFor="">
                  Confirmer le mot de passe
                  <span className="text-red-600">*</span> :
                </label>
                <input type="text" className="ml-2 border border-black" />
              </div>
            </form>
            <span className="pt-4 text-sm text-red-600">
              * Champs obligatoires
            </span>
          </div>
        </div>
        <div className="w-full flex justify-center my-10">
          <button
            type="button"
            className="cursor-pointer bg-red-400 uppercase p-2 text-xs mr-2"
          >
            Annuler
          </button>
          <button
            type="button"
            className="cursor-pointer bg-green-400 uppercase p-2 text-xs ml-2"
            onClick={() => submitForm()}
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
