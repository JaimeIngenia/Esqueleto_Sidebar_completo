import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../store/slices/counter";

export const Nata = (props) => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  //const key = "imndsFKfQ1HbANwPEkhFn8RtWfgUNx8Y";

  const getGifs = async () => {
    const url =
      "api.giphy.com/v1/gifs/search?api_key=imndsFKfQ1HbANwPEkhFn8RtWfgUNx8Y&q=pokemon&limit=5";

    const resp = await fetch(url);

    console.log(resp);
  };

  getGifs();

  return (
    <>
      <h1>Soy Nata, y este es el counter: {counter}</h1>;
      <button onClick={() => dispatch(increment())}>Incrementar</button>
    </>
  );
};
