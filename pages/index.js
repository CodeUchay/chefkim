import Layout from '@/components/Layout';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  const {data: session} = useSession();
  return (
    <Layout>
    <div className='text-green-800 flex justify-between'>
      <h2>
       Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className='flex bg-gray-400 text-white p-2 rounded-lg'>
        {/*<img src={session?.user?.image} alt="" className="w-10 h-6" />
       <Image src={session?.user?.image} alt="My Image" width="300" height="500" /> */}
       <span>{session?.user?.name}</span>
      </div>
    </div>
  </Layout>
  );
}