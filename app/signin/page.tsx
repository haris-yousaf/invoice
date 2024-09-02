"use client"
import { useRouter } from "next/navigation";
export default function SignIn() {

    const router = useRouter()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        router.push('/main')
    }

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
                    <input type="text" className="w-full py-2 px-4 mb-10 border border-solid border-gray-200 outline-none rounded-md" required/>
    
                    {/* Email Address */}
                    <label className="" htmlFor="inputEmail">Email</label>
                    <input type="email" className="w-full py-2 px-4 mb-10 border border-solid border-gray-200 outline-none rounded-md" required/>

                    {/* Password */}
                    <label className="" htmlFor="inputPassword">Password</label>
                    <input type="password" className="w-full py-2 px-4 mb-10 border border-solid border-gray-200 outline-none rounded-md" required/>

                    <button type="submit" className="w-full py-2 text-center rounded-md text-white bg-green-700">Sign In</button>
                    
                    <div className="flex flex-col text-center mt-5">
                    <label htmlFor="noAccount" className="">Don't have an account?</label>
                    <a href="./signup" className="underline hover:text-green-700">Signup</a>
                    </div>
                </form>
            </div>
        </div>
    )
}