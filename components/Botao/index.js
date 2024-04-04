import React from "react";

export function Botao (){
    return(
        <div className="flex justify-center items-center my-5">
            <button className=" gap-5 m-5 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-8 rounded-full">
                Confirme sua presença
            </button>
        </div>
    )
}