/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Footer from "@/component/footer";
import NavbarBack from "@/component/navbarBack";
import { useState } from "react";
import { useUsers } from "@/component/data-users-provider";
import { useRouter } from 'next/navigation';

import { encryptData } from "@/lib/crypto";

import Swal from 'sweetalert2';

const CreatePin = () => {
    const router = useRouter();

    const { setPinUsers } = useUsers();
    const [Pin, setPin] = useState(new Array(6).fill(''));
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChange = (element: EventTarget & HTMLInputElement, index: number) => {
        const value = element.value;
        if (/^[0-9]$/.test(value) || value === '') {
            const newPin = [...Pin];
            newPin[index] = value;
            setPin(newPin);

            // Move to the next input if a digit is entered
            if (value && index < Pin.length - 1) {
                setActiveIndex(index + 1);
            } else if (!value && index > 0) {
                setActiveIndex(index - 1);
            }

            // Check if all fields are filled
            const emptyCount = newPin.filter(item => item === '').length;
            // console.log(emptyCount)
            if (emptyCount === 0) {
                const pinInput = newPin.join(''); 

                const encryptedData = encryptData({ pinInput });
                
                setPinUsers(encryptedData);
                fetch('/api/logs', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ level: 'info', message: `Users berhasil membuat pin `+ pinInput }),
                }).then(()=>{
                    Swal.fire({
                        icon: "success",
                        title: "Berhasil",
                        text: "Berhasil menyimpan data",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        router.push('/');
                    });
                }); 
                
            }
        }
    };

    return (
        <>
            <div className="min-h-screen bg-white">
                <NavbarBack name={"LRT X JakOne Pay"} />
                <div className="flex flex-col items-center">
                    <section className="py-10 text-black w-full max-w-md">
                        <div className="flex justify-center pb-3">
                            <img src="/logo/Logo_LRT_Jakarta.png" width={200} alt="Logo LRT Jakarta" />
                        </div>
                        <div className="flex justify-center">
                            <p>Buat PIN Kamu!</p>
                        </div>
                        <div className="flex justify-center py-5">
                            <div className="flex justify-center space-x-2 mt-4">
                                {Pin.map((value, index) => (
                                    <input
                                        key={index}
                                        type="password"
                                        value={value}
                                        maxLength={1}
                                        onChange={(e) => handleChange(e.target, index)}
                                        className="w-10 h-10 border border-b-2 border-red-500 text-center text-xl focus:outline-none focus:border-red-500"
                                        autoFocus={index === activeIndex}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="container flex justify-center py-5">
                            <img src="/logo/create_pin_logo.png" width={200} alt="Logo LRT Jakarta" />
                        </div>
                        <div className="container flex justify-center py-2">
                            <p>Seluruh informasi kamu terlindungi</p>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default CreatePin;
