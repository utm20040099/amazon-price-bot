
//import modules
import dividir,{suma,resta,nombre,numero1,numero2} from "./math.js"
import * as cheerio from 'cheerio';
const url = 'https://www.amazon.com.mx/SteelSeries-Arctis-Multi-System-Headset-Consola-videojuegos/dp/B09ZW52XSQ'
//ESModules
console.log(suma(2,2))
console.log(resta(2,2))
console.log(nombre);
console.log(numero1);
console.log(numero2);
console.log(dividir(10,2))

//import default
import divi from "./math.js";

console.log(divi(5,2))

import axios from "axios";

try{
const response = await axios.get(url);
    //console.log(response.data)
    const $ = cheerio.load(response.data)
    const price = $('.a-price-whole').text()
    console.log(price)
    const pricevalue = price.split('.',1)
    console.log("El precio es: " ,pricevalue[0])
} catch(error){
    console.log(error)
    }
//cargar pagina con Cheerio