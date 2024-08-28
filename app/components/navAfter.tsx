export default function Navbar(){
    return (
        <nav className="flex items-center justify-between h-3 w-full py-6 px-28 bg-white">
            <div className="flex items-center justify-between">
                <a className="text-xl font-semibold" href="/">Invoice-Generator</a>
                <a className="ml-16 text-sm text-gray-500" href="./main">My Invoices</a>
                <a className="ml-14 text-sm text-gray-500" href="#">Settings</a>
            </div>
            <div className="">
                <a className="mr-10 text-sm text-gray-500" href="#">UserName</a>
            </div>
        </nav>
    )
}