export default function MyInvoices() {

    return (
        <>
            <div className="mt-10" hidden>
                <table className="w-full h-full text-[13px] text-left">
                    <thead className="h-11 font-semibold text-[#677788] bg-[#f8fafd]">
                        <tr>
                            <th className="px-3">CUSTOMER</th>
                            <th className="px-3">REFERENCE</th>
                            <th className="px-3">DATE</th>
                            <th className="px-3">DUE DATE</th>
                            <th className="px-3">STATUS</th>
                            <th className="px-3">TOTAL</th>
                            <th className="px-3"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="">
                            <td className="px-3 py-6">From?</td>
                            <td className="px-3 py-6"><a href="">Invoive #</a></td>
                            <td className="px-3 py-6">Date</td>
                            <td className="px-3 py-6">Due Date</td>
                            <td className="px-3 py-6"></td>
                            <td className="px-3 py-6">Total</td>
                            <td className="px-3 py-6 text-center"><a href="#" className="px-5 py-3 w-full h-full border border-solid border-gray-400 rounded-md">View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}