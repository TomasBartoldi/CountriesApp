const {Country,Activity} = require("../db");
const {Op}= require('sequelize')

const postActivity = async(req, res, next)=>{
    
      const { name, dificulty, duration, season, countriesName } = req.body
      try {
      if( name && dificulty && duration && season && countriesName ){
        const activity = {
          name,
          dificulty,
          season,
          duration,
        }

        let createdActivity = await Activity.create(activity)

      //busca todos los paises donde el name sea = countriesName
        let infoCountriesName = await Country.findAll({
          where:{
            name:{
              [Op.in]:countriesName //op.in itera en el arreglo devolviendo la informacion en cada iteracion y una vez concluida pasa al siguiente indice del arreglo haciendo la misma operacion
            }
          }}
        )

        //vinculo la actividad creada con el o los paises encontrados en infoCountriesName
        infoCountriesName?.map( m => m.addActivity(createdActivity))

        if(createdActivity){
            res.json({message:"Activity created successfully", data: createdActivity})
        }else{ 
            res.json({message:"Error not all corresponding data was obtained"
        })}
      }
        } catch (error) {
            next(error)
        }
}

const getActivity = async (req, res, next) => {
  try {
    const dbData = await Activity.findAll({
      include: {
        model: Country, 
        attributes: ['name', 'id']
      }
    })
    res.json(dbData)
    
  } catch (error) {
    next(error)
  }
}



module.exports={
    postActivity,
    getActivity 
}