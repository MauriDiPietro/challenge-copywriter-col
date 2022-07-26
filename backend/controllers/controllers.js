import {invertText} from '../services/services.js'

export const invertString = async (req, res)=>{
    try {
        const {text} = req.query;
        const response = await invertText(text)
        res.status(200).json({text: `${response}`})
    } catch (error) {
        res.status(400).json({error: "no text"})
    }
}