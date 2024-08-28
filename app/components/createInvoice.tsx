'use client'
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import { useRouter } from 'next/navigation';

export default function CreateInvoiceComponent() {

    // ADD DISCOUNT
    const [showDiscountInput, setShowDiscountInput] = useState(false)
    const [showDeleteButton, setShowDeleteButton] = useState(false)
    const [newId, setNewId] = useState<string | null>(null)

    const handleAddDiscount = () => {
        setShowDiscountInput(true)
        setShowDeleteButton(true)
        const button = document.getElementById('addDiscount')
        if (button?.style) {
            button.style.display = 'none';
          }
        const newId = uuidv4();
        setNewId(newId)
    }

    const handleDeleteDiscount = () => {
        setShowDiscountInput(false)
        setShowDeleteButton(false)
        const button = document.getElementById('addDiscount')
        if (button?.style) {
            button.style.display = 'none';
          }
        const discountInput = document.getElementById('discount-input')
        if (discountInput) {
            discountInput.remove()
        }
        const addDiscountButton = document.getElementById('addDiscount')
        if (addDiscountButton?.style) {
            addDiscountButton.style.display = 'block';
        }
    }

    // ADD TAX
    const [showTaxInput, setShowTaxInput] = useState(false)
    const [showTaxDeleteButton, setShowTaxDeleteButton] = useState(false)
    const [newTaxId, setNewTaxId] = useState<string | null>(null)

    const handleAddTax = () => {
        setShowTaxInput(true)
        setShowDeleteButton(true)
        const button = document.getElementById('addTax')
        if (button?.style) {
            button.style.display = 'none';
          }
        const newTaxId = uuidv4();
        setNewTaxId(newTaxId)
    }

    const handleDeleteTax = () => {
        setShowTaxInput(false)
        setShowTaxDeleteButton(false)
        const button = document.getElementById('addTax')
        if (button?.style) {
            button.style.display = 'none';
          }
        const TaxInput = document.getElementById('Tax-input')
        if (TaxInput) {
            TaxInput.remove()
        }
        const addTaxButton = document.getElementById('addTax')
        if (addTaxButton?.style) {
            addTaxButton.style.display = 'block';
        }
    }

    // ADD SHIPPING
    const [showShippingInput, setShowShippingInput] = useState(false)
    const [showShippingDeleteButton, setShowShippingDeleteButton] = useState(false)
    const [newShippingId, setNewShippingId] = useState<string | null>(null)

    const handleAddShipping = () => {
        setShowShippingInput(true)
        setShowDeleteButton(true)
        const button = document.getElementById('addShipping')
        if (button?.style) {
            button.style.display = 'none';
          }
        const newShippingId = uuidv4();
        setNewShippingId(newShippingId)
    }

    const handleDeleteShipping = () => {
        setShowShippingInput(false)
        setShowShippingDeleteButton(false)
        const button = document.getElementById('addShipping')
        if (button?.style) {
            button.style.display = 'none';
          }
        const ShippingInput = document.getElementById('Shipping-input')
        if (ShippingInput) {
            ShippingInput.remove()
        }
        const addShippingButton = document.getElementById('addShipping')
        if (addShippingButton?.style) {
            addShippingButton.style.display = 'block';
        }
    }

    
    // ADD NEW ITEM START
    const [additionalItems, setAdditionalItems] = useState<JSX.Element[]>([]);
    const addItem = () => {
        const newId = uuidv4();
        setAdditionalItems(( prevItems ) => [...prevItems, 
            <div key={newId} className="items">
            <div className="grid grid-cols-[60%_10%_15%_15%_1%] text-center justify-between w-full my-2 gap-1 text-sm">
                <input type="text" className="w-full h-9 outline-none px-5 text-sm border border-solid border-gray-300 rounded-md" placeholder="Description of item/service..." />
                <input id="quantityInput" name="quantityInput" value={inputs.quantityInput} onChange={handleChange} type="number" className="w-full h-9 outline-none px-5 text-sm border border-solid border-gray-300 rounded-md"/>
                <div className="flex border border-solid border-gray-200 rounded-md">
                    <span className="p-2 text-gray-500">$</span>
                    <input id="rateInput" name="rateInput" value={inputs.rateInput} onChange={handleChange} className="w-full py-2 pr-3 border-none rounded-lg text-right outline-none" type="number"/>
                </div>
                <input type="text" id="itemsAmount" value={`$ ${itemsAmount}`} className="w-full h-9 text-center outline-none px-5 text-sm rounded-md" readOnly />
                <button onClick={() => handleDeleteItem(newId)}>
                    <img src="https://www.svgrepo.com/show/365893/x-thin.svg" alt="Delete" className='h-3 w-3' />
                </button>
            </div>
        </div>])
    }
    // ADD NEW ITEM END
    
    // DELETE ITEM
    const handleDeleteItem = (id: string) => {
        setAdditionalItems((prevItems) => prevItems.filter((item) => item.key !== id));
    };
    
    // HANDLE INPUT CHANGES
    const [inputs, setInputs] = useState({
        invoice: 'INVOICE',
        billTo: 'Bill To',
        shipTo: 'Ship To',
        date: 'Date',
        paymentTerms: 'Payment Terms',
        dueDate: 'Due Date',
        PONumber: 'PO Number',
        item: 'Item',
        quantity: 'Quantity',
        rate: 'Rate',
        amount: 'Amount',
        notes: 'Notes',
        total: 'Total',
        terms: 'Terms',
        subTotal: 'SubTotal',
        Total: 'Total',
        amountPaid: 'Amount Paid',
        balanceDue: 'Balance Due',
        billToInput: '',
        quantityInput: '',
        rateInput: '',
        amountPaidInput: '',
        addDiscount: 'Discount',
        addDiscountAmount: '',
        addTax: 'Tax',
        addTaxAmount: '',
        addShipping: 'Shipping',
        addShippingAmount: '',
        invoiceNumber: '',
        from: '',
        shipToInput: '',
        dateInput: '',
        dueDateInput: '',
        paymentTermsInput: '',
        PONumberInput: '',
        notesInput: '',
        termsInput: '',

    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setInputs({
            ...inputs,
            [name]: value, 
        });    
    }

    // CALCULATE ITEMS AMOUNTS
    const itemsAmount = (inputs.quantityInput && inputs.rateInput) ? (parseInt(inputs.quantityInput) * parseInt(inputs.rateInput)).toFixed(2) : "0.00";
    
    
    // CALCULATE DUE BALANCE
    const dueBalance = (inputs.amountPaidInput && itemsAmount) ? ( parseInt(inputs.amountPaidInput) - parseInt(itemsAmount) ).toFixed(2) : "0.00";

    // Create Button
    const router = useRouter()
    const handleButtonCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        router.push('/view')
    }

    return (
        <form className="flex w-full px-28 min-h-20 my-10 text-sm box-border">
            <div className="w-[65rem] bg-white min-h-40 p-5 pr-14">
                <div className="w-full grid grid-cols-[70%_30%] text-center justify-between">
                    <div className="w-full text-start border-none">
                        <input type="button" src="" alt="" className="h-32 w-52 bg-gray-100"/>
                    </div>
                    <div className="">
                        <input type="text" name="invoice" value={inputs.invoice} onChange={handleChange} className="w-full py-2 pr-1 m-0 text-black text-[40px] text-right border border-solid border-white rounded hover:border hover:border-solid hover:border-gray-200 cursor-pointer outline-none"/><br />
                        
                        <div className="ml-28 mt-1 flex border border-solid border-gray-200 rounded-lg">
                            <span className="p-2 text-gray-500">#</span>
                            <input name='invoiceNumber' value={inputs.invoiceNumber} onChange={handleChange} className="w-full py-2 pr-3 border-none rounded-lg text-right outline-none" type="text"/>
                        </div>
                    </div>
                </div>

                <div className="w-full grid grid-cols-[60%_40%] pr-14">
                    <div className="w-full grid grid-rows-2 text-[13px]">
                        <div className="my-4 h-14 w-3/4 border border-solid border-gray-200 rounded-md">
                            <input name='from' value={inputs.from} onChange={handleChange} type="text" className="w-full h-full outline-none rounded-md py-2 px-4 " placeholder="Who is this from?"/>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="">
                            <input type="text" className="w-[90%] outline-none border border-solid border-white hover:border-gray-300 py-2 px-3 rounded-md" name="billTo" value={inputs.billTo} onChange={handleChange}/>
                            <input type="text" id="billToInput" name="billToInput" value={inputs.billToInput} onChange={handleChange} className="w-[90%] outline-none rounded-md py-2 px-3 my-1 h-14 text-start border border-solid border-gray-200" placeholder="Who is this to?" />
                            </div>
                            <div className="w-full">
                            <input type="text" className="w-[90%] outline-none border border-solid border-white hover:border-gray-300 py-2 px-3 rounded-md" name="shipTo" value={inputs.shipTo} onChange={handleChange}/>
                            <input type="text" name='shipToInput' value={inputs.shipToInput} onChange={handleChange} className="w-[90%] outline-none rounded-md py-2 px-3 my-1 h-14 border border-solid border-gray-200" placeholder="(optional)" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 grid grid-flow-row gap-1">
                        <div className="grid grid-cols-[60%_40%] gap-1">
                            <input type="text" className="text-right outline-none border border-solid border-white hover:border-gray-300 py-2 px-3 rounded-md" name="date" value={inputs.date} onChange={handleChange} />
                            <input type="date" name='dateInput' value={inputs.dateInput} onChange={handleChange} className="w-[90%] text-right outline-none border border-solid border-gray-300 py-2 px-3 rounded-md"/>
                        </div>
                        <div className="grid grid-cols-[60%_40%] gap-1">
                            <input type="text" className="text-right outline-none border border-solid border-white hover:border-gray-300 py-2 px-3 rounded-md" name="paymentTerms" value={inputs.paymentTerms} onChange={handleChange} />
                            <input type="text" name='paymentTermsInput' value={inputs.paymentTermsInput} onChange={handleChange} className="w-[90%] text-right outline-none border border-solid border-gray-300 py-2 px-3 rounded-md"/>
                        </div>
                        <div className="grid grid-cols-[60%_40%] gap-1">
                            <input type="text" className="text-right outline-none border border-solid border-white hover:border-gray-300 py-2 px-3 rounded-md" name="dueDate" value={inputs.dueDate} onChange={handleChange} />
                            <input type="date" name='dueDateInput' value={inputs.dueDateInput} onChange={handleChange} className="w-[90%] text-right outline-none border border-solid border-gray-300 py-2 px-3 rounded-md"/>
                        </div>
                        <div className="grid grid-cols-[60%_40%] gap-1">
                            <input type="text" className="text-right outline-none border border-solid border-white hover:border-gray-300 py-2 px-3 rounded-md" name="PONumber" value={inputs.PONumber} onChange={handleChange} />
                            <input type="text" name='PONumberInput' value={inputs.PONumberInput} onChange={handleChange} className="mr-4 text-right outline-none border border-solid border-gray-300 py-2 px-3 rounded-md"/>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="grid grid-cols-[60%_10%_15%_15%] text-center justify-between w-full mt-8 text-white">
                        <input type="text" className="bg-[#132144] w-full h-9 outline-none px-5 text-sm rounded-l-md" name="item" value={inputs.item} onChange={handleChange} />
                        <input type="text" className="bg-[#132144] w-full h-9 outline-none px-5 text-sm" name="quantity" value={inputs.quantity} onChange={handleChange} />
                        <input type="text" className="bg-[#132144] w-full h-9 outline-none px-5 text-sm" name="rate" value={inputs.rate} onChange={handleChange} />
                        <input type="text" className="bg-[#132144] w-full h-9 outline-none px-5 text-sm rounded-r-md" name="amount" value={inputs.amount} onChange={handleChange}/>
                    </div>

                {/* Items Calculation Starts */}
                    <div className="items">
                        <div className="grid grid-cols-[60%_10%_15%_15%] text-center justify-between w-full my-2 gap-1 text-sm">
                            <input type="text" className="w-full h-9 outline-none px-5 text-sm border border-solid border-gray-300 rounded-md" placeholder="Description of item/service..." />
                            <input id="quantityInput" name="quantityInput" value={inputs.quantityInput} onChange={handleChange} type="number" className="w-full h-9 outline-none px-5 text-sm border border-solid border-gray-300 rounded-md"/>
                            <div className="flex border border-solid border-gray-200 rounded-md">
                                <span className="p-2 text-gray-500">$</span>
                                <input id="rateInput" name="rateInput" value={inputs.rateInput} onChange={handleChange} className="w-full py-2 pr-3 border-none rounded-lg text-right outline-none" type="number"/>
                            </div>
                            <input type="text" id="itemsAmount" value={`$ ${itemsAmount}`} className="w-full h-9 text-center outline-none px-5 text-sm rounded-md" readOnly />
                        </div>
                        {additionalItems}
                    {/* Items Calculation Ends */}
                        <div>
                            <button type="button" id="addItem" onClick={addItem} className="px-3 py-1 border border-solid border-green-600 rounded-md text-green-600 text-[13px]">
                                <span className="text-xl">+</span> Line Item
                            </button>
                        </div>
                    </div>


                    <div className="w-full grid grid-cols-[60%_40%] mt-8">
                        <div className="w-full grid grid-cols text-[13px]">
                            <div className="grid grid-cols">
                                <div className="">
                                <input type="text" className="w-[90%] outline-none border border-solid border-white hover:border-gray-300 py-2 px-3 rounded-md" name="notes" value={inputs.notes} onChange={handleChange} />
                                <input type="text" name='notesInput' value={inputs.notesInput} onChange={handleChange} className="w-[90%] outline-none rounded-md py-2 px-3 my-1 h-14 text-start border border-solid border-gray-200" placeholder="Notes - any relevant information not already covered" />
                                </div>
                                <div className="w-full">
                                <input type="text" className="w-[90%] outline-none border border-solid border-white hover:border-gray-300 py-2 px-3 rounded-md" name="terms" value={inputs.terms} onChange={handleChange} />
                                <input type="text" name='termsInput' value={inputs.termsInput} onChange={handleChange} className="w-[90%] outline-none rounded-md py-2 px-3 my-1 h-14 border border-solid border-gray-200" placeholder="Terms and conditions - late fees, payment methods, delivery schedule" />
                                </div>
                            </div>
                        </div>


                    {/* TOTAL CALCULATIONS */}
                        <div className="grid grid-flow-row gap-1 text-[13px] font-light">
                            <div className="grid grid-cols-[60%_40%] gap-1">
                                <input type="text" className="text-right outline-none border border-solid border-white hover:border-gray-300 px-3 rounded-md" name="subTotal" value={inputs.subTotal} onChange={handleChange} />
                                <input type="text" id='subTotalAmount' className="w-full text-right outline-none px-5 text-sm rounded-md" value={`$ ${itemsAmount}`} readOnly/>
                            </div>

                        {/* DISCOUNT INPUT */}
                            {showDiscountInput && (
                                <div className="grid grid-cols-[60%_40%_3%] gap-1">
                                    <input
                                    type="text"
                                    className="text-right outline-none border border-solid border-white hover:border-gray-300 px-3 rounded-md"
                                    name="addDiscount"
                                    value={inputs.addDiscount}
                                    onChange={handleChange}
                                    />
                                    <div className="flex text-center border border-solid border-gray-200 rounded-md">
                                    <span className="text-center text-gray-500">$</span>
                                    <input
                                        className="w-full pr-3 border-none rounded-lg text-right outline-none"
                                        name="addDiscountAmount"
                                        value={inputs.addDiscountAmount}
                                        onChange={handleChange}
                                        type="number"
                                    />
                                    </div>
                                    <button onClick={() => handleDeleteDiscount()}>
                                        <img src="https://www.svgrepo.com/show/365893/x-thin.svg" alt="Delete" className='h-5 w-5' />
                                    </button>
                                </div>
                                )}
                        {/* DISCOUNT INPUT END */}
                        {/* TAX INPUT */}
                            {showTaxInput && (
                                <div className="grid grid-cols-[60%_40%_3%] gap-1">
                                    <input
                                    type="text"
                                    className="text-right outline-none border border-solid border-white hover:border-gray-300 px-3 rounded-md"
                                    name="addTax"
                                    value={inputs.addTax}
                                    onChange={handleChange}
                                    />
                                    <div className="flex text-center border border-solid border-gray-200 rounded-md">
                                    <span className="text-center text-gray-500">$</span>
                                    <input
                                        className="w-full pr-3 border-none rounded-lg text-right outline-none"
                                        name="addTaxAmount"
                                        value={inputs.addTaxAmount}
                                        onChange={handleChange}
                                        type="number"
                                    />
                                    </div>
                                    <button onClick={() => handleDeleteTax()}>
                                        <img src="https://www.svgrepo.com/show/365893/x-thin.svg" alt="Delete" className='h-5 w-5' />
                                    </button>
                                </div>
                                )}
                        {/* TAX INPUT END */}
                        {/* SHIPPING INPUT */}
                            {showShippingInput && (
                                <div className="grid grid-cols-[60%_40%_3%] gap-1">
                                    <input
                                    type="text"
                                    className="text-right outline-none border border-solid border-white hover:border-gray-300 px-3 rounded-md"
                                    name="addShipping"
                                    value={inputs.addShipping}
                                    onChange={handleChange}
                                    />
                                    <div className="flex text-center border border-solid border-gray-200 rounded-md">
                                    <span className="text-center text-gray-500">$</span>
                                    <input
                                        className="w-full pr-3 border-none rounded-lg text-right outline-none"
                                        name="addShippingAmount"
                                        value={inputs.addShippingAmount}
                                        onChange={handleChange}
                                        type="number"
                                    />
                                    </div>
                                    <button onClick={() => handleDeleteShipping()}>
                                        <img src="https://www.svgrepo.com/show/365893/x-thin.svg" alt="Delete" className='h-5 w-5' />
                                    </button>
                                </div>
                                )}
                        {/* SHIPPING INPUT END */}


                            <div className="flex text-center justify-evenly pl-20">
                                <button id='addDiscount' type='button' className="px-3 py-1 text-green-600 text-[13px] font-semibold" onClick={handleAddDiscount}>
                                    <span className="text-xl">+</span> Discount
                                </button>
                                <button id='addTax' type='button' className="px-3 py-1 text-green-600 text-[13px] font-semibold" onClick={handleAddTax}>
                                    <span className="text-xl">+</span> Tax
                                </button>
                                <button id='addShipping' type='button' className="px-3 py-1 text-green-600 text-[13px] font-semibold" onClick={handleAddShipping}>
                                    <span className="text-xl">+</span> Shipping
                                </button>
                            </div>

                            <div className="grid grid-cols-[60%_40%] gap-1">
                                <input type="text" className="text-right outline-none border border-solid border-white hover:border-gray-300 px-3 rounded-md" name="total" value={inputs.total} onChange={handleChange} />
                                <input type="text" value={`$ ${itemsAmount}`} className="w-full text-right outline-none px-5 text-sm rounded-md" readOnly />
                            </div>
                            
                            <div className="grid grid-cols-[60%_40%] gap-1">
                                <input type="text" className="text-right outline-none border border-solid border-white hover:border-gray-300 px-3 rounded-md" name="amountPaid" value={inputs.amountPaid} onChange={handleChange} />
                                
                                <div className="flex text-center border border-solid border-gray-200 rounded-md">
                                    <span className="text-center text-gray-500">$</span>
                                    <input className="w-full pr-3 border-none rounded-lg text-right outline-none" name="amountPaidInput" value={inputs.amountPaidInput} onChange={handleChange} type="number"/>
                                </div>
                            </div>

                            <div className="grid grid-cols-[60%_40%] gap-1">
                                <input type="text" className="text-right outline-none border border-solid border-white hover:border-gray-300 px-3 rounded-md" name="balanceDue" value={inputs.balanceDue} onChange={handleChange} />
                                <input type="text" className="w-full text-right outline-none px-5 text-sm rounded-md" value={`$ ${dueBalance}`} readOnly />
                            </div>
                        </div>
                    {/* TOTAL CALCULATIONS END     */}
                    </div>
                </div>
            </div>
            <div className="pl-8">
                <button 
                    type="button" 
                    className={`dlBtn text-white border-hidden bg-[#009e74] ${!inputs.billToInput || !inputs.quantityInput || !inputs.rateInput ? 'bg-opacity-65' : '' } px-16 py-2.5 rounded`}
                    disabled={ !inputs.billToInput || !inputs.quantityInput || !inputs.rateInput } onClick={handleButtonCreate}
                >
                    Create
                </button>
                <div className="border-b border-solid border-gray-200 my-7"></div>
                <label htmlFor="currency" className="text-gray-500 text-[13px]">Currency</label><br />
                <select name="currency" id="currency" className="w-full text-gray-500 text-xs px-2 py-2 rounded-md text-left border-[0.5px] border-solid border-gray-300 outline-none">
                    <option value="USD">USD ($)</option>
                    <option value="INR">INR (₹)</option>
                    <option value="PKR">RS (Rs.)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="CAD">CAD ($)</option>
                    <option value="JPY">JPY (¥)</option>
                    <option value="AUD">AUD ($)</option>
                    <option value="NZD">NZD ($)</option>
                    <option value="SGD">SGD ($)</option>
                    <option value="HKD">HKD ($)</option>
                    <option value="CHF">CHF ($)</option>
                    <option value="CNY">CNY ($)</option>
                    <option value="HKD">HKD ($)</option>
                    <option value="SEK">SEK ($)</option>
                    <option value="NOK">NOK ($)</option>
                    <option value="MXN">MXN ($)</option>
                </select>
                <button type="button" className="sdBtn bg-none w-full mt-7 px-4 py-2.5 text-green-600 font-semibold text-sm">Save Default</button>
                <div className="border-b border-solid border-gray-200 mt-2"></div>
            </div>
        </form>
    )
}