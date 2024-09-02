"use client";
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';

export default function SignIn() {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        // Dispatch the login action with the form data
        dispatch(login({ email, password }));

        // Redirect to the main page
        router.push('/main');
    };

    return (
        <div className="w-full h-screen px-3 sm:px-20 md:px-40 lg:px-60 xl:px-[28rem]">
            <div className="bg-white my-10 py-20 rounded-2xl drop-shadow">
                <h1 className="text-center mb-3 text-4xl font-bold">
                    Sign In
                </h1>
                <p className="text-center mb-5 text-gray-400">
                    Welcome back!
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-1 text-left mx-10 my-10">
                    {/* Name */}
                    <label htmlFor="inputName">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full py-2 px-4 mb-10 border border-solid border-gray-200 outline-none rounded-md"
                        required
                    />

                    {/* Email Address */}
                    <label htmlFor="inputEmail">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full py-2 px-4 mb-10 border border-solid border-gray-200 outline-none rounded-md"
                        required
                    />

                    {/* Password */}
                    <label htmlFor="inputPassword">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full py-2 px-4 mb-10 border border-solid border-gray-200 outline-none rounded-md"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full py-2 text-center rounded-md text-white bg-green-700"
                    >
                        Sign In
                    </button>

                    <div className="flex flex-col text-center mt-5">
                        <label htmlFor="noAccount">Don't have an account?</label>
                        <a href="./signup" className="underline hover:text-green-700">
                            Signup
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
