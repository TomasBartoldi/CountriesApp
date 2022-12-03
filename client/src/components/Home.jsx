import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, filterCountriesByContinent, filterActivities, orderByName, orderByPopulation } from '../actions/actions'
import { Link } from 'react-router-dom'
import Card from './Card';
import Paginado from "./Paginado";
import Footer from './Footer'
import Navbar from "./Navbar";
import './Home.css'



const Home = () => {
    
    //despacho las acciones
    const dispatch = useDispatch();

    //me traigo todo lo que esta en el estado de countries
    const allCountries = useSelector(state => state.countries) 
    
    //paginado
    const [currentPage, setCurrentPage] = useState(1) //pagina actual que arranca en 1
    const [countriesPerPage, setCountriesPerPage] = useState(10) 
    const indexOfLastCountrie = currentPage * countriesPerPage // en un principio es = 10
    const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage
    const currentCountries = allCountries.slice(indexOfFirstCountrie, indexOfLastCountrie)
    // estados para filtrar de A-Z o Z-A
    const [order, setOrder] = useState('');
    // estador para filtrar por poblacion de mayor a menor o de menor a mayor
    const [orderPopulation, setOrderPopulation] = useState('');


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //me traigo los paises del estado, cuando el componente se monta
    useEffect(() => {
       dispatch(getCountries());
    }, [dispatch]);


    const handleFilterContinents = (e) =>{
        dispatch(filterCountriesByContinent(e.target.value))
        setCurrentPage(1); 
      }

    const handleFilterActivities = (e) => {
        dispatch(filterActivities(e.target.value))
        setCurrentPage(1); 
      }

    const handleSortByName = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1); //seteo para que arranque en la primer pagina
        setOrder(`Sort ${e.target.value}`); //cuando seteamos la pagina modifica el estado local y se reenderiza
      } 
    
    const handleSortPopulation = (e) => {
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1); 
        setOrderPopulation(`Ordenado ${e.target.value}`);
      }  


    

    return(
        <div>

            <Navbar />

            <div>

                <div className="filters">

                <select className="filters-boxes" onChange={e => handleFilterContinents(e)}>
                    <option value="All">All continents</option>
                    <option className="options" value="Asia">Asia</option>
                    <option className="options" value="South America">South America</option>
                    <option className="options" value="North America">North America</option>
                    <option className="options" value="Europe">Europe</option>
                    <option className="options" value="Oceania">Oceania</option>
                    <option className="options" value="Antarctica">Antarctica</option>
                    <option className="options" value="Africa">Africa</option>
                </select>

                <select className="filters-boxes" onChange={e => handleFilterActivities(e)}>
                    <option className="options" value="all" disabled>Activities</option>
                    <option className="options" value="with">With Activities</option>
                    <option className="options" value="without">Without Activities</option>
                </select>
                
                <select className="filters-boxes" defaultValue={'default'} onChange={(e) => handleSortByName(e)}>
                    <option className="options" value="default" disabled>Order by name</option>
                    <option className="options" value="asc">A-Z</option>
                    <option className="options" value="desc">Z-A</option>
                </select>

                <select className="filters-boxes" onChange={e => handleSortPopulation(e)}>
                    <option className="options" value="default" disabled>Sort by population</option>
                    <option className="options" value="desc">Higher population</option>
                    <option className="options" value="asc">Lower population</option>
                </select>

                </div>

               
                <div className="display-card">
                {currentCountries && 
                currentCountries.map(c =>{
                    return (
                        <div className="country-card">
                            <Link className="link" to={'/home/' + c.id}>  
                                <Card 
                                name={c.name} 
                                flag={c.flag} 
                                continent={c.continent} 
                                
                                />
                            </Link>                 
                           </div>          
                        )})
                    }
                </div>
            </div>
                    <Paginado 
                        countriesPerPage={countriesPerPage}
                        allCountries={allCountries.length}
                        paginado={paginado} />

                    <Footer />    
        </div>
    )
    

}


export default Home;