import React, {useState} from 'react'
import axios from 'axios'
import './Home.css'

const Home = () => {

const [texts, setTexts] = useState([])   
const [text, setText] = useState('')  

const URL = 'http://localhost:8087/iecho'

const upText = async() =>{ 
    const response = await axios.get(`${URL}?text=${text}`)
    console.log(response.data)
    setTexts([...texts, response.data])
 }

// console.log('TEXTS: ',texts)

  return (
    <>
    <div className='containerInput'>
      
            <input
                value={text}
                onChange={(e)=>setText(e.target.value)}
                type='text'
                placeholder='insert text'
                className='form-control inputText'
            />
            <button onClick={upText} className='btn btn-primary btnText' >Send</button>
       
    </div>
    <div>
        <h3>Results:</h3>
        <ul>
        {
            texts.length > 0 ? texts.map((t)=>(
                <li key={texts.length+1}>{t.text}</li>
            )) : 'no texts'
        }
        </ul>
    </div>
    </>
  )
}

export default Home