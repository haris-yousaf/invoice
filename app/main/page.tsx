import MyInvoices from "../components/myInvoices";
import Navbar from "../components/navAfter";

export default function Main() {
    return (
        <>
            <Navbar/>
            <div className="w-full p-32">
                <div className="w-full min-h-52 bg-white py-6 rounded-2xl drop-shadow-lg shadow-slate-800">
                    <div className="flex flex-col text-left justify-between box-border px-8">
                        <div className="w-[80%]">
                            <h1 className="text-2xl font-semibold">My Invoices</h1>
                        </div>
                        <div className="w-[20%] flex text-right">
                            <a href="./create" className="bg-[#009e74] py-3 text-sm px-6 text-white rounded-md rounded-r-none hover:bg-green-700">New Invoice</a>
                            <select className="w-10 bg-[#009e74] outline-none py-[9.8px] text-white rounded-md rounded-l-none hover:bg-green-700 hover:cursor-pointer">
                                <option></option>
                                <option>New Credit Note</option>
                                <option>New Quote</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-10 text-gray-400 px-8">No Invoices Found.</div>
                    <MyInvoices/>
                </div>
            </div>
        </>
    )
}