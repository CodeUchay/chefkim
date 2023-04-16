import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Products() {
  return (
    <Layout>
    
    <Link href="/products/new" className="bg-blue-500 text-white rounded-lg p-2"> Add New Product</Link>
  </Layout>
  );
}