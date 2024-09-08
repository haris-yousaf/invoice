'use client';
import { useState } from "react";

interface AddItemRowProps {
    id: number;
    deleteRow: (id: number) => void;
}

export default function AddClientRow({ id, deleteRow }: AddItemRowProps) {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
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
                    name="name"
                    value={inputData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    readOnly={!editable}
                />
            </td>

            <td className="pt-3">
                <input
                    className={`w-full h-11 px-2 outline-none rounded-xl ${editable ? 'border border-gray-300' : ''}`}
                    type="text"
                    name="email"
                    value={inputData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    readOnly={!editable}
                />
            </td>

            <td className="pt-3">
                <input
                    className={`w-full h-11 px-2 outline-none rounded-xl ${editable ? 'border border-gray-300' : ''}`}
                    type="text"
                    name="address"
                    value={inputData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    readOnly={!editable}
                />
            </td>

            <td className="pt-3">
                <input
                    className={`w-full h-11 px-2 outline-none rounded-xl ${editable ? 'border border-gray-300' : ''}`}
                    type="text"
                    name="phone"
                    value={inputData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
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
