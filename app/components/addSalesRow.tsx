'use client';
import { useState } from "react";

interface AddItemRowProps {
    id: number;
    deleteRow: (id: number) => void;
}

export default function AddSalesRow({ id, deleteRow }: AddItemRowProps) {
    const [inputData, setInputData] = useState({
        customerName: "",
        itemName: "",
        quantity: "",
        totalPrice: "",
        dateOfSale: "",
    });

    const [editable, setEditable] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
        if (!editable) {
            setEditable(true);
        }
    }

    return (
        <tr className="text-sm">
            <td className="pt-3">
                <input
                    className={`w-full h-11 px-2 outline-none rounded-xl ${editable ? 'border border-gray-300' : ''}`}
                    type="text"
                    name="customerName"
                    value={inputData.customerName}
                    onChange={handleChange}
                    placeholder="Name"
                    readOnly={!editable}
                />
            </td>

            <td className="pt-3">
                <input
                    className={`w-full h-11 px-2 outline-none rounded-xl ${editable ? 'border border-gray-300' : ''}`}
                    type="text"
                    name="itemName"
                    value={inputData.itemName}
                    onChange={handleChange}
                    placeholder="Item"
                    readOnly={!editable}
                />
            </td>

            <td className="pt-3">
                <input
                    className={`w-full h-11 px-2 outline-none rounded-xl ${editable ? 'border border-gray-300' : ''}`}
                    type="text"
                    name="quantity"
                    value={inputData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    readOnly={!editable}
                />
            </td>

            <td className="pt-3">
                <input
                    className={`w-full h-11 px-2 outline-none rounded-xl ${editable ? 'border border-gray-300' : ''}`}
                    type="text"
                    name="totalPrice"
                    value={inputData.totalPrice}
                    onChange={handleChange}
                    placeholder="$$"
                    readOnly={!editable}
                />
            </td>

            <td className="pt-3">
                <input
                    className={`w-full h-11 px-2 outline-none rounded-xl ${editable ? 'border border-gray-300' : ''}`}
                    type="text"
                    name="dateOfSale"
                    value={inputData.dateOfSale}
                    onChange={handleChange}
                    placeholder="(dd/mm/yyy)"
                    readOnly={!editable}
                />
            </td>

            <td className="pt-3">
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                    onClick={() => setEditable(!editable)}
                >
                    {editable ? "📁" : "✏️"}
                </button>

                {/* Delete Button */}
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                    onClick={() => deleteRow(id)}
                >
                    ❌
                </button>
            </td>
        </tr>
    );
}
