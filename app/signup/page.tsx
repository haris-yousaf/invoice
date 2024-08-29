"use client"
import { useRouter } from "next/navigation";
export default function SignUp() {

    const router = useRouter()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        router.push('/main')
    }

    return (
        <div className="w-full h-screen px-3 sm:px-20 md:px-40 lg:px-60 xl:px-[26rem]">
            <div className="bg-white my-10 py-20 rounded-2xl drop-shadow">
                <h1 className="text-center mb-3 text-4xl font-semibold">
                    Create a free Account
                </h1>
                <p className="text-center mb-5 text-gray-400">
                    Gain access to more features with an Invoice Generator account.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-1 text-left mx-10 my-10">

                    <div className="w-full grid grid-cols-2 gap-1">
                        <div className="grid grid-flow-row grid-rows-2">
                            <label className="" htmlFor="firstName">First Name</label>
                            <input type="text" className="w-full py-2 px-4 border border-solid border-gray-200 outline-none rounded-md" required/>
                        </div>
                        <div className="grid grid-flow-row grid-rows-2">
                            <label className="" htmlFor="astName">Last Name</label>
                            <input type="text" className="w-full py-2 px-4 border border-solid border-gray-200 outline-none rounded-md" required/>
                        </div>
                    </div>
    
                    {/* Email Address */}
                    <label className="mt-10" htmlFor="inputEmail">Email</label>
                    <input type="email" className="w-full py-2 px-4 border border-solid border-gray-200 outline-none rounded-md" required/>

                    {/* Password */}
                    <label className="mt-10" htmlFor="inputPassword">Password</label>
                    <input type="password" className="w-full py-2 px-4 border border-solid border-gray-200 outline-none rounded-md" required/>

                    <button type="submit" className="w-full py-2 text-center rounded-md text-white mt-10 bg-green-700">Sign Up</button>
                </form>
            </div>
        </div>
    )
}