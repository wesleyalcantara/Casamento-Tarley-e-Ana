import React from "react";

export function Mapa () {
    return(
        <div className="flex justify-center items-star flex-col w-full gap-5">
            <h2 className="font-bold mx-5 md:mx-32 text-lg">Encontre o local no mapa:</h2>
            <iframe className="rounded mx-5 md:mx-32 mb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.418516908999!2d-43.9211793260727!3d-19.94889413889463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699b169c4d0d7%3A0x2b1a1e6388968efd!2sAv.%20dos%20Bandeirantes%2C%202000%20-%20Sion%2C%20Belo%20Horizonte%20-%20MG%2C%2030210-420!5e0!3m2!1spt-BR!2sbr!4v1712273211452!5m2!1spt-BR!2sbr"></iframe>
        </div>
    )
}