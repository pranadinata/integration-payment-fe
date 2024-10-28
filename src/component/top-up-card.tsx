"use client"

import { useState } from "react";
import { useUsers } from "@/component/data-users-provider";
import { useRouter } from 'next/navigation';


const TopUpCard = ({name}: any) => {
    const router = useRouter();
    
    const { setStateSaldo , setStateTopUpType} = useUsers();

    const [TotalAmount, setTotalAmountUsers] = useState(0);

    const handleSubmitAmount = () => {
        setStateSaldo(TotalAmount);
        setStateTopUpType(name);
        router.push('/pages/konfirmasi-pin');
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawNumbers = event.target.value.replace(/[\D,]/g, '');
        const number = parseInt(rawNumbers);
       
        if (isNaN(number)) {
            setTotalAmountUsers(0);
        } else if (number > 2000000) {
            setTotalAmountUsers(2000000); 
        } 
        else {
            setTotalAmountUsers(number);
        }
    }

    const formatNumber = (input: any) => {
        const number = parseInt(input);
        return isNaN(number) ? '0' : new Intl.NumberFormat('id-ID').format(number);
    }

    const handleSetAmount = (amount: number) => {
        setTotalAmountUsers(amount);
    }

    return(
        <>
         <div className="container text-black px-4 py-6">
             <div className="bg-white p-4 flex items-center row">
                 <div className="flex items-center">
                     <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                         <i className="fas fa-money-bill-wave text-red-500"></i>
                     </div>
                     <div>
                         <p className="font-semibold">{ name } </p>
                     </div>
                 </div>
             </div>
             <div className="bg-gray-200 p-4 rounded-lg flex items-center row">
                 <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                     <i className="fas fa-info-circle text-white"></i>
                 </div>
                 <div>
                     <p className="font-semibold text-red-500">Top Up Information</p>
                     <p className="text-sm">You can save up to Rp 2.000.000 with maximum transactions of Rp
                         20.000.000 per month</p>
                 </div>
             </div>
             <br />
             <hr />
             <div>
                 <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-2 gap-4 py-10">
                     <div className="bg-white border p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={()=> { handleSetAmount(50000) }}>
                         <div className="flex items-center">
                             <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                                 <i className="fas fa-money-bill-wave text-white"></i>
                             </div>
                             <div>
                                 <p className="font-semibold">Rp 50.000 </p>

                             </div>
                         </div>
                     </div>
                     <div className="bg-white border p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={()=> { handleSetAmount(100000) }}>
                         <div className="flex items-center">
                             <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                                 <i className="fas fa-money-bill-wave text-white"></i>
                             </div>
                             <div>
                                 <p className="font-semibold">Rp 100.000 </p>

                             </div>
                         </div>
                     </div>
                     <div className="bg-white border p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={()=> { handleSetAmount(150000) }}>
                         <div className="flex items-center">
                             <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                                 <i className="fas fa-money-bill-wave text-white"></i>
                             </div>
                             <div>
                                 <p className="font-semibold">Rp 150.000 </p>

                             </div>
                         </div>
                     </div>
                     <div className="bg-white border p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={()=> { handleSetAmount(200000) }}>
                         <div className="flex items-center">
                             <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                                 <i className="fas fa-money-bill-wave text-white"></i>
                             </div>
                             <div>
                                 <p className="font-semibold">Rp 200.000 </p>

                             </div>
                         </div>
                     </div>

                     <div className="bg-white border p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={()=> { handleSetAmount(250000) }}>
                         <div className="flex items-center">
                             <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                                 <i className="fas fa-money-bill-wave text-white"></i>
                             </div>
                             <div>
                                 <p className="font-semibold">Rp 250.000 </p>

                             </div>
                         </div>
                     </div>
                     <div className="bg-white border p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={()=> { handleSetAmount(300000) }}>
                         <div className="flex items-center">
                             <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                                 <i className="fas fa-money-bill-wave text-white"></i>
                             </div>
                             <div>
                                 <p className="font-semibold">Rp 300.000 </p>

                             </div>
                         </div>
                     </div>

                 </div>
                 <hr />
                 <div className="bg-white p-4  flex flex-col items-start">
                     <label htmlFor="amount" className="text-gray-700 font-semibold mb-2">Enter Another Amount</label>
                     <div className="text-6xl font-bold mb-2">Rp <input type="text" value={formatNumber(TotalAmount)} onChange={handleChangeInput} className="text-6xl py-1 font-bold bg-transparent focus:outline-none" placeholder="0" /></div>

                     
                     <div className="flex items-center">
                         <i className="fas fa-info-circle text-gray-600 mr-2"></i> &nbsp;
                         <p className="text-sm text-gray-600">Minimum top up amount Rp 20.000</p>
                     </div>
                 </div>
                    <div className="w-full py-5">
                        <button 
                            onClick={handleSubmitAmount}
                            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none">
                            Next
                        </button>
                    </div>
             </div>
         </div>
        </>
    );
}

export default TopUpCard;