const { Country, Activity } = require("../db")
const axios = require("axios");


const getCountries = async (req, res) => {

    const { name } = req.query;

    //verifico en la db si hay algo.
    
    if (!name) {

      //si no hay name chequea en la base de datos y me devuelve todos los countries con los datos que quiero (id, name, flag, continent y population), y que incluya el modelo Activitys con el que esta conectado.

      let db = await Country.findAll({
        attributes: ["id", "name", "flag", "continent", "population"],
        include:{
            model: Activity,
            attributes: ["name", "dificulty", "duration", "season"],
            through: {
                attributes: []
            }
        }
    })

    // si hay algo en la db lo devuelvo y sino pedimos a la api y mapeamos la respuesta con los datos que necesitamos
      if (db.length > 0) {
        return res.status(200).send(db);
      } else {
        const allCountries = await axios.get("https://restcountries.com/v3/all");
        const countrie = allCountries.data.map(c => {
          return {
            id: c.cca3,
            name: c.name.common,
            flag: c.flags[0],
            continent: c.continents[0],
            capital: c.capital != null ? c.capital[0] : "No data",
            subregion: c.subregion,
            area: c.area,
            population: c.population,
          };
        });
        
        // bulkCreate busca los campos en el objeto y los pasa a la tabla
        // los datos del objeto para los que no hay campos en la tabla, no los guarda
        await Country.bulkCreate(countrie, { validate: true });
  
        //se busca nuevamente a la base de datos y si o si tiene que tener algo por lo que creamos arriba en caso de que no haya tenido nada
        let db = await Country.findAll({
          attributes: ["id", "name", "flag", "continent", "population"],
          include:{
              model: Activity,
              attributes: ["name", "dificulty", "duration", "season"],
              through: {
                  attributes: []
              }
          }
      })
        return res.status(200).send(db);
      }
    }


     let allCountries = await Country.findAll({include:Activity}); //busco todo los paises con las actividades

     let countriesName = allCountries.filter( el => el.name.toLowerCase().includes(name.toLowerCase()))
    
      //si encuentro el name que le pase me lo va a devolver y sino me va a tirar error
        return countriesName.length ?
        res.status(200).send(countriesName) :
        res.status(404).send('The country does not exist');
  };



const getCountryById = async (req, res) => {
    const { id } = req.params;
    let allCountries = await Country.findAll({include:{
      model: Activity,
      attributes:["name", "dificulty", "duration", "season"],
      through: {
          attributes: []
      }
  }});
    let countriesId = allCountries.filter( el => 
        el.id.toLowerCase().includes(id.toLowerCase()))

    return countriesId.length 
    ? res.status(200).send(countriesId) 
    : res.status(404).send('wrong id');
  
  };
  

module.exports={
    getCountries,
    getCountryById
}