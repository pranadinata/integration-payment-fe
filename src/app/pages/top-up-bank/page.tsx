
"use client"

import NavbarBack from "@/component/navbarBack";
import { useRouter } from 'next/navigation';

const TopUpMethod = () => {
    const router = useRouter();
    const JakMobileMethod = () => {
        router.push('/pages/top-up/jak-one-mobile');
    }

    const BankDkiMethod = () => {
        router.push('/pages/top-up/bank-dki');
    }

    const OtherBankMethod = () => {
        router.push('/pages/top-up/other-bank');
    }

    const DebitCardMethod = () => {
        router.push('/pages/top-up/debit-card');
    }
 
    return(
        <>
        <div className="min-h-screen bg-white">
        <NavbarBack name={'Top Up LRTJPay'}></NavbarBack>
        <div className=" flex flex-col items-center">
          <div className="container text-black px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

            <div className="bg-white p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                    <i className="fas fa-money-bill-wave text-red-500"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Top Up Methods </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={JakMobileMethod}>
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                    <i className="fas fa-mobile-alt text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold">JakOne Mobile </p>
                    <p className="text-sm text-gray-600">No administration fees via the JakOne Mobile Mobile App</p>
                  </div>
                </div>
                <i className="fas fa-arrow-right"></i>
              </div>

              <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={BankDkiMethod}>
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold">ATM Bank DKI</p>
                    <p className="text-sm text-gray-600">Top up Martipay from nearest Bank DKI ATM</p>
                  </div>
                </div>
                <i className="fas fa-arrow-right"></i>
              </div>


              <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={OtherBankMethod}>
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                    <i className="fas fa-landmark text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Other Bank</p>
                    <p className="text-sm text-gray-600">Transfer anytime from your favourite Indonesia bank </p>
                  </div>
                </div>
                <i className="fas fa-arrow-right"></i>
              </div>

              <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={DebitCardMethod}>
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                    <i className="fas fa-credit-card text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Debit Card</p>
                    <p className="text-sm text-gray-600">Top up online using your debit card </p>
                  </div>
                </div>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );   
}

export default TopUpMethod;