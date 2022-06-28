import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../Context/Store";
import { Routes, Route, Link } from "react-router-dom";

export const Todo = ({ getData }) => {
  const [btn, setBtn] = useState(false);

  const { handle } = useContext(StoreContext);

  const handleControl = (e) => {
    setBtn(true);
    handle(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleControl} />

      {btn ? <Link to="/note">Login</Link> : " "}
    </>
  );
};
