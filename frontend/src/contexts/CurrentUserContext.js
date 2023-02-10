import React from "react";

export const userContex = React.createContext({});

export const apiBack = React.createContext({
  baseUrl: "http://localhost:3500",
  headers: {
    "Content-Type": "application/json",
  },
});
