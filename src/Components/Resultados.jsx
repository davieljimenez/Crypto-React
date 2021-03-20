import React from 'react'

const Resultado = ({resultadoMonedas}) => {

    if(Object.keys(resultadoMonedas).length === 0) return null

    return(
        <div className="pt-5">

            <h1 className="mb-2">Resultados</h1>
            
            <p className="text-white m-0">Precio:</p>
            <h2>{resultadoMonedas.PRICE}</h2>

            <p className="text-white m-0">Precio mas ALTO del dia:</p>
            <h2>{resultadoMonedas.HIGHDAY}</h2>

            <p className="text-white m-0">Precio mas BAJO del dia:</p>
            <h2>{resultadoMonedas.LOWDAY}</h2>

            <p className="text-white m-0">Variacion ultimas 24 horas:</p>
            <h2>{resultadoMonedas.CHANGEPCT24HOUR} %</h2>

            <p className="text-white m-0">Ultima actualizacion:</p>
            <h2>{resultadoMonedas.LASTUPDATE}</h2>
        </div>
    )
} 

export default Resultado