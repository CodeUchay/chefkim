import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/products";

export default async function handle (req, res){
    
    const {method}  = req;
    await mongooseConnect();

    if (method === 'GET'){
        res.json(await Product.find());
    }

    if (method === 'POST'){
        //Get the objects from
        const {title, description, price} = req.body;
       // add the product to mongo db
       const productDoc = await Product.create({
            title, description, price,
        })
        res.json(productDoc);
    }
}