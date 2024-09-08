'use client'
import { useState } from "react"
import AddSalesRow from "../components/addSalesRow"
import Nav from "../components/nav"

export default function Items() {

    const [rows, setRows] = useState([{ id: 1 }]);

    const addRow = () => {
        const newRow = { id: rows.length + 1 };
        setRows([...rows, newRow]);
    }

    const deleteRow = (id: number) => {
        setRows(rows.filter(row => row.id !== id));
    }

    return (
        <>
            <Nav />
            <div className="w-full px-2 xl:px-32 py-20">
                <div className="w-full px-3 mb-6 flex flex-col gap-8 md:flex-row justify-between">
                    <h1 className="text-4xl font-semibold">Add Items</h1>
                    
                    <button className="px-5 py-2 bg-[#677788] w-40 text-white rounded-xl shadow-slate-800"
                        onClick={addRow}>
                        Add <span className="text-xl">+</span>
                    </button>
                </div>
                
                <div className="w-full min-h-52 bg-white py-6 rounded-2xl drop-shadow-lg shadow-slate-800">
                    <div>
                        <table className="w-full h-full text-[13px] text-left">
                            <thead className="h-11 font-semibold text-[#677788] bg-[#f8fafd]">
                                <tr>
                                    <th className="px-3">CUSTOMER NAME</th>
                                    <th className="px-3">ITEM NAME</th>
                                    <th className="px-3">QUANTITY</th>
                                    <th className="px-3">PRICE</th>
                                    <th className="px-3">DATE OF SALE</th>
                                    <th className="px-3"></th>
                                </tr>
                            </thead>

                            <tbody>
                                {rows.map((row) => (
                                    <AddSalesRow 
                                        key={row.id} 
                                        id={row.id} 
                                        deleteRow={deleteRow}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
