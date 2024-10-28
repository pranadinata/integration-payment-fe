/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"
import { useUsers } from "@/component/data-users-provider";
import NavbarBack from "@/component/navbarBack";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Footer from "@/component/footer";


const InputNoTelepon = () => {

    const { setNoTelp, setOtpUsers } = useUsers();
    const [NoTelp, setNoTelpUsers] = useState('');
    const router = useRouter();
    const kirimOtp = () =>{
        const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setOtpUsers(randomOtp);
        setNoTelp(NoTelp);
        router.push('/pages/verifikasi-otp');
    }

    const handleInputChange = (event: any) => {
        const { value } = event.target;
        setNoTelpUsers(value)
      };
   
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Bar */}
            
            <NavbarBack name={'LRT X JakOne Pay'}></NavbarBack>
            {/* Hero Section */}
            <section className="py-10 text-black">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center">
                        <img src="/logo/Logo_LRT_Jakarta.png" width={200} className="" alt="" />
                    </div>
                    <p className="text-gray-600">Selamat Datang</p>
                </div>
                <div className="container mx-auto py-10 px-4">
                    <p>Expresikan perjalananmu menggunakan LRT Pay</p>
                    <div className="py-5">
                        <p className="font-bold">
                            Nomor Telepon
                        </p>
                        <div className="relative w-full">
                            <input type="string" placeholder="Enter a number" maxLength={12} value={NoTelp} onChange={handleInputChange} name="no_telp"
                                className="text-red-500 w-full px-4 py-4 pr-20 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />

                            <button type="button" onClick={kirimOtp}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none">
                                Kirim OTP
                            </button>

                            
                        </div>
                    </div>
                    <p>Seluruh transaksi aman, dengan melanjutkan proses ini. Menu <span className="text-red-500 font-semibold">syarat & kententuan</span> yang berlaku</p>
                </div>
           
            </section>
            {/* Footer */}
            <Footer />
            
            
        </div>
    );
}
export default InputNoTelepon;

