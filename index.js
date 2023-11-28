import { getPrice } from "./src/scrapper.js";
import { intro,outro,text,spinner } from "@clack/prompts";

export default async function (){
    const s = spinner();

intro('welcome to Amazon price bot');
const url= await text({
    message: 'type or paste your Amazon URL',
    placeholder: 'https://www.amazon.com.mx/Cafetera-Espresso-CKM-650-EIN-Koblenz/dp/B07C36PKGW',
    validate: (value) =>{
        if (!value.includes('www.amazon.com.mx')) return 'invalid amazon url'
    },
})
s.start('Getting price...')
const price = await getPrice(url);
s.stop(price);
//getPrice('https://www.amazon.com.mx/Cafetera-Espresso-CKM-650-EIN-Koblenz/dp/B07C36PKGW')
outro('Thanks for using my app')


}