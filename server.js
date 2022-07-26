import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

const PORT = 8087

app.listen(PORT, ()=>console.log(`Server run on PORT ${PORT}`))