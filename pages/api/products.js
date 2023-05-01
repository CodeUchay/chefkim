import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/products";

export default async function handle (req, res){
    
    const {method}  = req;
    await mongooseConnect();

    if (method === 'GET'){
        if (req.query?.id){
            res.json(await Product.findOne({_id:req.query.id}));
        }
        else{
        res.json(await Product.find());
        }
    }

    if (method === 'POST'){
        //Get the objects from
        const {title, description, price1kg,price2kg,price3kg,price5kg,price10kg} = req.body;
       // add the product to mongo db
       const productDoc = await Product.create({
            title, description, price1kg,price2kg,price3kg,price5kg,price10kg
        })
        res.json(productDoc);
    }
}