import axios from "axios";
import * as cheerio from 'cheerio';

async function getPrice(url){
    try{
        const response = await axios.get(url);
            //console.log(response.data)
            const $ = cheerio.load(response.data)
            const price = $('.a-price-whole').text()
            const pricevalue = price.split('.',1);
            return 'El precio es: ' ,pricevalue[0];
        } catch(error){
            console.log(error)
            }
}

export{ getPrice }
