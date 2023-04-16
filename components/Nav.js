import { FaStore, FaHome, FaShoppingBasket, FaList, FaGear } from "react-icons/fa";
import {AiFillSetting } from "react-icons/ai";
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Nav() {
    const inactiveLink = 'react_icons';
    const activeLink = 'react_icons bg-white text-green-600 rounded-l-lg';
    const router = useRouter();
    const {pathname} = router;
  return (
    <aside className="text-white p-5 pr-0">
      <Link  href={"/"} className="react_icons mb-5 mr-2">
        <FaStore />
        <span className="">Chef Kim Admin</span>
      </Link>
      <nav className="flex flex-col gap-2">
        <Link href={"/"}  className={pathname === '/' ? activeLink : inactiveLink}>
          <FaHome /> Dashboard
        </Link>

        <Link href={"/products"}  className={pathname.includes('/products') ? activeLink : inactiveLink}>
          <FaShoppingBasket /> Products
        </Link>
        
        <Link href={"/orders"} className={pathname.includes('/orders') ? activeLink : inactiveLink}>
          <FaList /> Products
        </Link>
        <Link href={"/settings"} className={pathname.includes('/settings') ? activeLink : inactiveLink}>
          <AiFillSetting /> Settings
        </Link>
       
      </nav>
    </aside>
    //Preetier arrangement Shift + Alt + F
  );
}
