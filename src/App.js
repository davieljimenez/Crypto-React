import React, { useState, useEffect } from 'react';
import Axios from 'axios'

//Images
import imagen from './cryptomonedas.png'

//Components
import Formulario from './Components/Formulario'
import Resultados from './Components/Resultados'

//Spinner
import Spinner from './Components/Spinner/Spinner'

function App() {

  const [ moneda, setMoneda ] = useState('')
  const [ criptomoneda, setCriptomonedas ] = useState('')

  const [ resultadoMonedas, setResultadoMonedas ] = useState([])

  const [ cargando, setCargando ] = useState(false)

  useEffect(() => {
    
    const consultarAPI = async () =>{

      if(moneda === '' || criptomoneda === '') return

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

      const resultado = await Axios.get(url)

      setCargando(true)

      setTimeout(() => {
        setCargando(false)
        setResultadoMonedas(resultado.data.DISPLAY[criptomoneda][moneda])
      }, 2000)

    }

    consultarAPI()

  }, [criptomoneda, moneda])

  const cargandoSpinnerOrResultados = (cargando) ? <Spinner/> : <Resultados resultadoMonedas={resultadoMonedas} />

  return (
    <div className="container">
      <h1 className="mt-5 text-white">Cotiza Criptomonedas al Instante</h1>
      <div className="row mt-5">
        <div className="col-sm-11 col-md-5 m-3">
          <Formulario
            setMoneda={setMoneda}
            setCriptomonedas={setCriptomonedas}
          />

          {cargandoSpinnerOrResultados}

        </div>
        <div className="col-sm-11 col-md-5 m-3">
          <img src={imagen} className="img-fluid m-0" alt="imagen representando las monedas digitales"/>
        </div>
      </div>
    </div>
  );
}

export default App;
