import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import process from "process";

export const SetToken = async () => {
  const [cookie, setCookie] = useCookies(["name"]);
  const data = {
    username: "test@test.fr",
    password: "testons",
  };

  const headers = {
    "Content-Type": "application/json",
  };

  useEffect(() => {
    const token = async () => {
      await axios
        .post(`${process.env.CHECK_TOKEN}`, data, { headers: headers })
        .then((response) => {
          setCookie(`${process.env.CURRENT_TOKEN}`, response.data.token);
        });
    };
    token();
  }, []);
};
