import Layout from '@/components/Layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from "axios";
import {FaPen, FaTrashAlt} from "react-icons/fa";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data);
    });
  }, []);
  return (
    <Layout>
    <Link href="/products/new" className="bg-blue-500 text-white rounded-lg p-2"> Add New Product</Link>
  <table className="items mt-2">
    <thead>
      <tr>
        <td>Product Name</td>
        <td>Actions</td>
      </tr>
      </thead>
        <tbody>
          {products.map(product =>(
            <tr key={product._id}>
              <td>{product.title}</td>
              <td> 
                <Link href={'/products/edit/'+ product._id}><FaPen/> Edit</Link>
                <Link href={'/products/delete/'+ product._id}><FaTrashAlt/> Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
  </table>
  </Layout>
  );
}