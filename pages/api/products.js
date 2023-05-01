import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

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
    if (method === 'PUT'){
        //Get the objects from
        const {title, description, price1kg,price2kg,price3kg,price5kg,price10kg, _id} = req.body;
       // Update the product to mongo db
      await Product.updateOne(
      {_id}, {title, description, price1kg,price2kg,price3kg,price5kg,price10kg
        });
        res.json(true);
    }
    if (method === 'DELETE'){
        if (req.query?.id){
            await Product.deleteOne({_id:req.query.id});
            res.json(true);
        }
        
    }
}