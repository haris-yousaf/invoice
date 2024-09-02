import MyInvoices from "../components/myInvoices";
import Nav from "../components/nav";

export default function Main() {
    return (
        <>
            <Nav />
            <div className="w-full p-32">
                <div className="w-full min-h-52 bg-white py-6 rounded-2xl drop-shadow-lg shadow-slate-800">
                    <div className="w-full flex flex-col gap-2 md:flex-row text-left align-middle justify-between box-border px-8">
                        <div className="w-full">
                            <h1 className="text-2xl font-semibold">My Invoices</h1>
                        </div>
                        <div className="w-full flex md:justify-end">
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