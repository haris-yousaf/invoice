"use client";

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '../features/authSlice';

export default function Nav() {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.push('/signin');
    };

    return (
        <nav className="flex items-center justify-between h-3 w-full py-6 px-5 lg:px-20 xl:px-28 bg-white">
            <a className="text-xl font-semibold" href="/">Invoice-Generator</a>
            <div className="xl:flex items-center justify-between hidden">
                <a className="ml-16 text-sm text-gray-500" href="./main">My Invoices</a>
                <a className="ml-16 text-sm text-gray-500" href="./items">Add Items</a>
                <a className="ml-16 text-sm text-gray-500" href="./clients">Add Clients</a>
                <a className="ml-16 text-sm text-gray-500" href="./sales">Add Sales</a>
                <a className="ml-14 text-sm text-gray-500" href="/">Settings</a>
            </div>
            <div className="flex items-center">
                <a className="mr-5 text-sm text-gray-500 hidden sm:block" href="#">User</a>
                <button 
                    className="mr-5 text-sm text-gray-500 hover:text-red-500 hidden sm:block"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            <div className="xl:hidden">
                <a href="#">&#8801;</a>
            </div>
            </div>
        </nav>
    );
}
