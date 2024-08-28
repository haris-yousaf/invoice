export default function Nav() {

    return (
        <nav className="flex items-center justify-between h-3 w-full py-6 px-28 bg-white">
            <div className="flex items-center justify-between">
                <a className="text-xl font-semibold" href="/">Invoice-Generator</a>
                <a className="ml-16 text-sm text-gray-500" href="/">Help</a>
                <a className="ml-14 text-sm text-gray-500" href="/">History</a>
                <a className="ml-14 text-sm text-gray-500" href="/">Invoicing Guide</a>
            </div>
            <div className="">
                <a className="mr-10 text-sm text-gray-500" href="./signin">Sign In</a>
                <a className="mr-10 text-sm text-white border-hidden bg-[#009e74] px-4 py-2.5 rounded" href="./signup">Sign Up</a>
            </div>
        </nav>
    )
}

