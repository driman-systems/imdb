"use client";
import { useEffect } from "react";

const Error = ({error, reset}) => {

    useEffect(()=>{
        console.log(error);
    }, [error]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1>Algo deu errado</h1>
      <button onClick={()=> reset()}>Tentar novamente</button>
    </div>
  )
}

export default Error
