import {FaFileUpload} from "react-icons/fa";
import axios from 'axios';
import {useRouter } from 'next/router';
import { useState } from 'react';

export default function ProductForm({
  _id,
    title:existingTitle, 
    description:existingDescription, 
    price1kg:existingPrice1kg,
    price2kg:existingPrice2kg,
    price3kg:existingPrice3kg,
    price5kg:existingPrice5kg,
    price10kg:existingPrice10kg,
    images
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

    async function saveProduct(e){
        e.preventDefault();
        const data = {title, description, price1kg,price2kg,price3kg,price5kg,price10kg };
        if(_id){
        //update 
        await axios.put('/api/products', {...data, _id});
        }
        else{
          //create
        await axios.post('/api/products', data);
      
        }
        setGoToProducts(true);
    }
    if (goToProducts){
      console.log('america has a problem');
      router.push('/products');
    }
    async function uploadImages (e){
      const files = e.target?.files;
      if (files?.length > 0){
        const data = new FormData();
        for (const file of files) {
          data.append('file', file)
        }
        const res = await axios.post('/api/upload', data);
        console.log(res.data);
      }
    }
  return (
    <form onSubmit={saveProduct}>
      <div className='mb-2  flex flex-col gap-1'>
    <label>Product name</label>
    <input type='text' placeholder='product name' value={title} onChange={e => setTitle(e.target.value)}/>
    <label>Photo</label>
    <div className='mb-2  flex flex-wrap gap-1'>
    <button className='h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200'> <FaFileUpload/> <span>Upload</span> </button>
    {!images?.length && (
      <div> No photos for this product</div>
    )}
    </div>
    
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
    </div>
    </form>
  );
}