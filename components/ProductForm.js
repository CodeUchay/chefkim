
import axios from 'axios';
import {useRouter } from 'next/router';
import { useState } from 'react';

export default function ProductForm({
    title:existingTitle, 
    description:existingDescription, 
    price1kg:existingPrice1kg,
    price2kg:existingPrice2kg,
    price3kg:existingPrice3kg,
    price5kg:existingPrice5kg,
    price10kg:existingPrice10kg
}){
    const [title, setTitle]  = useState(existingTitle || '');
    const [description, setDescription]  = useState(existingDescription ||'');
    const [price1kg, setPrice1kg]  = useState(existingPrice1kg || '');  
    const [price2kg, setPrice2kg]  = useState(existingPrice2kg || '');
    const [price3kg, setPrice3kg]  = useState(existingPrice3kg || '');
    const [price5kg, setPrice5kg]  = useState(existingPrice5kg || '');
    const [price10kg, setPrice10kg]  = useState(existingPrice10kg || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    async function createProduct(e){
        e.preventDefault();
        const data = {title, description, price1kg,price2kg,price3kg,price5kg,price10kg };
        console.log(data); 
        
        await axios.post('/api/products', data);
        setGoToProducts(true);
    }
    if (goToProducts){
      console.log('america has a problem');
      router.push('/products');
    }
  return (
    <form onSubmit={createProduct}>
    <label>Product name</label>
    <input type='text' placeholder='product name' value={title} onChange={e => setTitle(e.target.value)}/>
    <label>Description</label>
    <textarea placeholder='description' value={description} onChange={e => setDescription(e.target.value)}/>
    <label>Price1kg</label>
    <input type='text' placeholder='price' value={price1kg} onChange={e => setPrice1kg(e.target.value)}/>
    <label>Price2kg</label>
    <input type='text' placeholder='price' value={price2kg} onChange={e => setPrice2kg(e.target.value)}/>
    <label>Price3kg</label>
    <input type='text' placeholder='price' value={price3kg} onChange={e => setPrice3kg(e.target.value)}/>
    <label>Price5kg</label>
    <input type='text' placeholder='price' value={price5kg} onChange={e => setPrice5kg(e.target.value)}/>
    <label>Price10kg</label>
    <input type='text' placeholder='price' value={price10kg} onChange={e => setPrice10kg(e.target.value)}/>
    <button type='submit' className='save_btn'>Save</button>
    </form>
  );
}