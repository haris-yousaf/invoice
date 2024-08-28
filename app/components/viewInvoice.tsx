export default function ViewInvoiceComponent() {

    return (
            <div className="w-full px-28 my-10 text-sm box-border">
                <div className="w-[80rem] bg-white min-h-40 pt-20 rounded-lg drop-shadow">
                    <div className="grid grid-cols-[70%_30%] w-full px-14 min-h-96">
                        <div className="grid grid-rows-2">
                            <div>Reference From?</div>
                            <div className="grid grid-cols-2">
                                <div className="grid grid-rows-[10%_90%]">
                                    <label>Bill To</label>
                                    <label>Ref</label>
                                </div>
                                <div className="grid grid-rows-[10%_90%]">
                                    <label>Ship To</label>
                                    <label>Ref</label>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-rows-7 text-right">
                            <div><label className="text-5xl font-semibold">INVOICE</label></div>
                            <div className="text-lg"><label>#</label></div>
                            <div className="grid grid-cols-2">
                                <label className="text-left">Date</label>
                                <label>Ref</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <label className="text-left">Payment Terms</label>
                                <label>Ref</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <label className="text-left">Due Date</label>
                                <label>Ref</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <label className="text-left">PO Number</label>
                                <label>Ref</label>
                            </div>
                            <div className="grid grid-cols-2 font-bold">
                                <label className="text-left">Balance Due</label>
                                <label>Ref</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <table className="w-full h-full text-right">
                            <thead className="h-11 font-semibold text-[13px] text-[#677788] bg-[#f8fafd]">
                                <tr>
                                    <th className="px-3 font-normal">ITEM</th>
                                    <th className="px-3 font-normal">QUANTITY</th>
                                    <th className="px-3 font-normal">RATE</th>
                                    <th className="pr-14 font-normal">AMOUNT</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b border-b-slate-100">
                                    <td className="px-3 py-4 font-normal">Ref</td>
                                    <td className="px-3 py-4 font-normal">Ref</td>
                                    <td className="px-3 py-4 font-normal">Ref</td>
                                    <td className="pr-14 py-4 font-normal">Ref</td>
                                </tr>
                                <tr>
                                    <td className="pr-3 py-4 font-normal"></td>
                                    <td className="pr-3 py-4 font-normal"></td>
                                    <td className="pr-3 py-4 font-bold">Total</td>
                                    <td className="pr-14 py-4 font-bold">Ref</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-4 font-normal"></td>
                                    <td className="px-3 py-4 font-normal"></td>
                                    <td className="px-3 py-4 font-normal">Amount Paid</td>
                                    <td className="pr-14 py-4 font-normal">Ref</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}