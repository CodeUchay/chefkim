import Layout from '@/components/Layout';
import { useSession, signOut } from "next-auth/react";
import Image from 'next/image';

export default function Home() {
  const {data: session} = useSession();
  return (
    <Layout>
    <div className='text-green-800 flex text-lg justify-between items-center'>
      <h2>
       Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className='flex bg-gray-400 text-white p-2 rounded-lg items-center'>
  <Image 
    src={session?.user?.image} 
    alt="My Image" 
    width="40" 
    height="40" 
    className="rounded-full mr-2" 
  /> 
  <span>{session?.user?.name}</span>
</div>
    </div>
  </Layout>
  );
}