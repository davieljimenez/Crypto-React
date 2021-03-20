import React, { useEffect, useState } from 'react'

//npm install --save axios
import Axios from 'axios'

//Components
import Criptomoneda from './Criptomoneda'
import Error from './Error'

function Formulario({setMoneda, setCriptomonedas}){

    const [ criptomoneda, setCriptomoneda ] = useState([])

    const [ monedaCotizar, setMonedaCotizar ] = useState('')
    const [ criptomonedaCotizar, setCriptomonedaCotizar ] = useState('')

    const [ error, setError ] = useState(false)

    useEffect(() => {
        
        const consultarAPI = async () =>{
            
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

            const resultado = await Axios.get(url)

            setCriptomoneda(resultado.data.Data)

        }

        consultarAPI()
    
    }, [] )

    const handleSubmit = e =>{
        e.preventDefault()

        if(monedaCotizar === '' || criptomonedaCotizar === ''){
            setError(true)
            return
        }

        setError(false)

        setMoneda(monedaCotizar)
        setCriptomonedas(criptomonedaCotizar)

    }

    const errorShow = (error) ? <Error/> : null

    return(
        <div>
            <form
                onSubmit={handleSubmit}
            >

                {errorShow}

                <label>Elige tu Moneda</label>
                <select 
                    className="custom-select mb-3"
                    onChange={e => setMonedaCotizar(e.target.value)}
                >
                    <option value="">Sin seleccionar</option>
                    <option value="USD">Dolar USA</option>
                    <option value="DOP">Peso Dominicano</option>
                    <option value="MXN">Peso Mexicano</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                </select>

                <label>Elige tu Criptomoneda</label>
                <select 
                    className="custom-select mb-3"
                    onChange={e => setCriptomonedaCotizar(e.target.value)}
                >
                    <option value="">Sin seleccionar</option>
                    {criptomoneda.map(criptomoneda =>(
                        <Criptomoneda
                            key={criptomoneda.CoinInfo.Id}
                            criptomoneda={criptomoneda}
                        />
                    ))}
                </select>

                <button style={{background: '#66a2fe', fontWeight: 'bold'}} className="btn btn-block text-white mt-4">CALCULAR</button>

            </form>

        </div>
    )
}

export default Formulario