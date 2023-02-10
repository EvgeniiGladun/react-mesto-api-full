import React from "react";

export const userContex = React.createContext({});

export const apiBack = React.createContext({
  baseUrl: "https://api.photograms.nomoredomainsclub.ru",
  headers: {
    "Content-Type": "application/json",
  },
});
