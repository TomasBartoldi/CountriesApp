import axios from 'axios'

export function getCountries() {
    return async function (dispatch) {
      var json = await axios.get('http://localhost:3001/countries', {});
      return dispatch({
        type: 'GET_COUNTRIES',
        payload: json.data,
      });
    };
  }; 

//-----------------------------------------------------------------------------------------------------//

export function getCountriesByName(payload){  //payload = name
  return async function (dispatch){
    try {
      var json = await axios.get(`http://localhost:3001/countries?name=${payload}`)
      return dispatch({
        type: 'GET_COUNTRIES_NAME',
        payload: json.data //json.data = a la respuesta de la ruta una vez que se asigne algo en name
      })
    } catch (error) {
      console.log(error)
    }
  }
}

//-----------------------------------------------------------------------------------------------------//

export function postActivities(payload){
  return async function (dispatch){
      const response = await axios.post(`http://localhost:3001/activities`, payload)
      //console.log(response)
      return response
 }
}

//-----------------------------------------------------------------------------------------------------//

export function getDetail(id){
  return async function(dispatch){
    try {
      var json=await axios.get(`http://localhost:3001/countries/${id}`)  
      return dispatch({
        type: 'GET_DETAILS',
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

//-----------------------------------------------------------------------------------------------------//

export function filterCountriesByContinent(payload){
    //payload = value de options
    //filtramos por continentes
    return{
      type: 'FILTER_BY_CONTINENT',
      payload
    }
  }

//-----------------------------------------------------------------------------------------------------//  

export function filterActivities(payload){
  return{
    type:"FILTER_BY_ACTIVITY",
    payload
  }
}

//-----------------------------------------------------------------------------------------------------//

export function orderByName(payload) {
  return {
    type: 'ORDER_BY_NAME',
    payload
  };
}

//-----------------------------------------------------------------------------------------------------//

export function orderByPopulation(payload) {
  return {
    type: 'ORDER_BY_POPULATION',
    payload,
  };
}

//-----------------------------------------------------------------------------------------------------//

