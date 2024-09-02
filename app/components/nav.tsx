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
            <div className="lg:flex items-center justify-between hidden md:block">
                <a className="ml-16 text-sm text-gray-500" href="./main">My Invoices</a>
                <a className="ml-14 text-sm text-gray-500" href="/">Settings</a>
            </div>
            <div className="flex items-center">
                <a className="mr-10 text-sm text-gray-500 hidden sm:block" href="#">UserName</a>
                <button 
                    className="text-sm text-gray-500 hover:text-red-500"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div className="sm:hidden">
                <a href="#">&#8801;</a>
            </div>
        </nav>
    );
}
