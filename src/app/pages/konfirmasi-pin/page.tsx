/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Footer from "@/component/footer";
import NavbarBack from "@/component/navbarBack";
import { useState } from "react";
import { useUsers } from "@/component/data-users-provider";
import { useRouter } from 'next/navigation';
import { decryptData } from "@/lib/crypto";

import Swal from 'sweetalert2';

const KonfirmasiPin = () => {
    const router = useRouter();

    const { data , setSaldo, setStateSaldo, setTopUpType, setStateTopUpType} = useUsers();
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
            
            if (emptyCount === 0) {
                const pinInput = newPin.join('');

                const decrpytPin = decryptData(data.pin);
               
                if(pinInput === decrpytPin.pinInput){
                    const total_saldo = data.state_saldo + data.saldo;
                    setSaldo(total_saldo);
                    setTopUpType(data.state_top_up_type);
                    fetch('/api/logs', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ level: 'info', message: `Users berhasil top up sebesar  `+ data.state_saldo + ' melalui ' + data.state_top_up_type }),
                    }).then(()=>{
                        Swal.fire({
                            icon: "success",
                            title: "Berhasil",
                            text: "Berhasil menyimpan data",
                            showConfirmButton: false,
                            timer: 1500,
                        }).then(() => {
                            setStateSaldo(0);
                            setStateTopUpType('');
                            router.push('/pages/detail-users');
                        });
                    });
                    
                }else{
                    fetch('/api/logs', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ level: 'info', message: `Users gagal top up karena pin salah  ` }),
                    }).then(()=>{
                        Swal.fire({
                            icon: "error",
                            title: "error",
                            text: "Pin yang kamu masukan tidak sesuai!",
                            showConfirmButton: false,
                            timer: 1500,
                        }).then(() => {
                            setPin(['','','','','','']);
                        });
                    });
                   
                }
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
                            <p>Konfirmasi PIN Kamu!</p>
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
                            <p>Konfirmasi PIN Kamu!</p>
                        </div>
                        <div className="container flex justify-center py-10">
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default KonfirmasiPin;
