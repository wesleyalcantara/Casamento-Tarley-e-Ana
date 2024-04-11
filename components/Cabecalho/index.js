import React from "react";
import 'tailwindcss/tailwind.css';


export function Cabecalho () {
    return(
        <div className="p-5"> 
            <ul className="flex flex-row gap-5 justify-center font-bold">
                <a href="/">Home</a>
                <li>|</li>
                <a href="/padrinhos">Padrinhos</a>
                <li>|</li>
                <a href="https://site.lejour.com.br/lista-de-presentes/presentestarleyeana">Presentes</a>
            </ul>
        </div>
    )
}