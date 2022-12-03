import React from 'react'
import './Paginado.css'

const Paginado = ({ countriesPerPage, allCountries, paginado}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
           pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className='paginado'>
                {
                    pageNumbers && pageNumbers.map(number => {
                        return(
                        <li>
                            <button className="number" onClick={()=>paginado(number)} >{number}</button>
                        </li>
                        )})
                }
            </ul>
        </nav>
    )
}

export default Paginado;