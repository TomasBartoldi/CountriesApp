const { Router } = require ('express')
const { postActivity, getActivity }= require ('../controllers/Activity.controller')
const router = Router()


router.post('/', postActivity)
router.get('/getactivities', getActivity)



module.exports= router