
const initialState = {
    countries: [],
    allCountries: [],
    detail: []
    
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){   
        //me traigo todo lo que traiga getCountries en el back para el front    
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
        }

//------------------------------------------------------------------------------------------------//

        case 'GET_COUNTRIES_NAME':
            return {
              ...state,
              countries: action.payload, //en countries por que es el arreglo que estamos renderizando
            };

//------------------------------------------------------------------------------------------------//       

        case 'FILTER_BY_CONTINENT':
            const allCountries = state.allCountries
            const continentFiltered = action.payload === 'All' 
            ? allCountries 
            : allCountries.filter(e => e.continent === action.payload) //por payloado le pasamos cada continte que llega del back

            return{
                ...state,
                countries: continentFiltered
            };

//------------------------------------------------------------------------------------------------// 

        case 'FILTER_BY_ACTIVITY':
            const allCountry = state.allCountries
            const activityFilter= action.payload === 'with'
            ? allCountry.filter( e => e.activities.length !== 0) 
            : action.payload === 'without'
            ? allCountry.filter(e => !e.activities.length) 
            : allCountry
      
            return{
                ...state,
                countries: activityFilter
            };


//------------------------------------------------------------------------------------------------// 

        case 'ORDER_BY_NAME':
            let sortedArr = action.payload === "asc"
            ? state.countries.sort(function (a, b) {
            if (a.name > b.name) {
              return 1; // retornamos 1 por que b es mayor que a (a= index 0, b = index 1)
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0; //si son iguales los deja igual
            })
            : state.countries.sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
            });
            return {
                ...state,
                countries: sortedArr,
            }; 

//---------------------------------------------------------------------------------------------//

        case 'ORDER_BY_POPULATION':    
            let sortPopulationArr = action.payload === "asc"
            ? state.countries.sort(function (a, b) {
            if (a.population > b.population) {
            return 1;
            }
            if (b.population > a.population) {
            return -1;
            }
            return 0;           
            })

            : state.countries.sort(function (a, b) {
            if (a.population > b.population) {
            return -1;
            }
            if (b.population > a.population) {
            return 1;
            }
            return 0;
            });
            return {
                ...state,
                countries: sortPopulationArr,
            };

//---------------------------------------------------------------------------------------------//

        case 'POST_ACTIVITIES':
            return {
                ...state,
            };

//---------------------------------------------------------------------------------------------//

        case "GET_DETAILS":
            return {
                ...state,
                detail: action.payload
            };

//---------------------------------------------------------------------------------------------//    
            
        default:
            return state;
    }
}

export default rootReducer;