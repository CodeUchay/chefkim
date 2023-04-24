import Layout from '@/components/Layout';
import axios from 'axios';
import {useRouter } from 'next/router';
import { useState } from 'react';


export default function NewProduct() {
    const [title, setTitle]  = useState('');
    const [description, setDescription]  = useState('');
    const [price, setPrice]  = useState('');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    async function createProduct(e){
        e.preventDefault();
        const data = {title, description, price};
        console.log(data); 
        
        await axios.post('/api/products', data);
        setGoToProducts(true);
    }
    if (goToProducts){
      console.log('america has a problem');
      router.push('/products');
    }
  return (
    <Layout>
    <h1><b>New Product </b></h1>
    <form onSubmit={createProduct}>
    <label>Product name</label>
    <input type='text' placeholder='product name' value={title} onChange={e => setTitle(e.target.value)}/>
    <label>Description</label>
    <textarea placeholder='description' value={description} onChange={e => setDescription(e.target.value)}/>
    <label>Price</label>
    <input type='text' placeholder='price' value={price} onChange={e => setPrice(e.target.value)}/>
    <button type='submit' className='save_btn'>Save</button>
    </form>
  </Layout> 
  );
}