export default function Nav() {

    return (
        <nav className="flex items-center justify-between h-3 w-full py-6 px-5 lg:px-20 xl:px-28 bg-white">
            <a className="text-xl font-semibold" href="/">Invoice-Generator</a>
            <div className="lg:flex items-center justify-between hidden">
                <a className="ml-16 text-sm text-gray-500" href="/">Help</a>
                <a className="ml-14 text-sm text-gray-500" href="/">History</a>
                <a className="ml-14 text-sm text-gray-500" href="/">Invoicing Guide</a>
            </div>
            <div className="hidden sm:block">
                <a className="mr-7 text-sm text-gray-500" href="./signin">Sign In</a>
                <a className="text-sm text-white border-hidden bg-[#009e74] px-4 py-2.5 rounded" href="./signup">Sign Up</a>
            </div>
            <div className="sm:hidden">
                <a href="#">&#8801;</a>
            </div>
        </nav>
    )
}

