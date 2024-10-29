/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import NavbarBack from "@/component/navbarBack";
import { useUsers } from "@/component/data-users-provider";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Swal from 'sweetalert2';


const VerifikasiOtp = () => {
  const { data, setOtpUsers } = useUsers();
 
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [activeIndex, setActiveIndex] = useState(0); 
  const router = useRouter();

  useEffect(()=>{
    alert("OTP anda : "+ data.otp);
  },[]);

  const fetchOtp = () => {
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtpUsers(randomOtp);
    alert("OTP anda : "+ randomOtp);
  }
  const ulangiOtp = () => {
    fetchOtp();
  };

  const handleDigitClick = async (digit: string) => {
    if (activeIndex < otp.length) {
      const newOtp = [...otp];
      newOtp[activeIndex] = digit;
      setOtp(newOtp);
      
      if (activeIndex < otp.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
    const emptyCount = otp.filter(item => item === '').length;
    if(emptyCount == 0){
        const otpInput = otp.join('');
        if(otpInput === data.otp){
            await fetch('/api/logs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ level: 'info', message: `Verifikasi OTP berhasil ` + data.otp }),
            });
            Swal.fire({
                icon: "success",
                title: "Berhasil",
                text: "Berhasil menyimpan data",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                router.push('/pages/registrasi-detail');
              });
            
        }else{
            console.log('otp salah');
            // Swal.fire({
            //   icon: "error",
            //   title: "error",
            //   text: "Pin yang kamu masukan tidak sesuai!",
            //   showConfirmButton: false,
            //   timer: 1500,
            // });
        }
    }
  };

  // Handle backspace click
  const handleBackspace = () => {
    if (activeIndex > 0 || otp[activeIndex] !== '') {
      const newOtp = [...otp];
      newOtp[activeIndex] = ''; 

      if (activeIndex > 0 && otp[activeIndex] === '') {
        setActiveIndex(activeIndex - 1);
      }
      setOtp(newOtp);
    }
  };

  const handleChange = (element: EventTarget & HTMLInputElement, index: number) => {
    const value = element.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        setActiveIndex(index + 1);
      }
    }
  };


  return (
    <>
      <div className="min-h-screen bg-white">
        <NavbarBack name={"Verifikasi Kode OTP"} />
        <section className=" py-10 text-black">
          <div className="container mx-auto px-4">
            <p className="text-gray-500">Masukkan 6 digit kode yang sudah dikirim ke nomor kamu dibawah ini ya!</p>
            <span className="text-red-600">{data.no_telp}</span>
          </div>
          <div className="container mx-auto px-4 pt-20">
            <div className="flex justify-center space-x-2 mt-4">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  value={value}
                  maxLength={1}
                  onChange={(e) => handleChange(e.target, index)}
                  className="w-10 h-10 border-b-2 border-gray-300 text-center text-xl focus:outline-none
                  focus:border-red-500 bg-transparent"
                  autoFocus={index === activeIndex}
                />
              ))}
            </div>
          </div>
          <div className="text-center mt-6">
            <a href="#" onClick={ulangiOtp} className="font-bold">Tidak terima kode?</a>
            <p className="text-gray-500">Kirim kode kembali dalam 00:10</p>
          </div>

          <div className="container mx-auto px-4 pt-20">
              <div className="flex flex-col items-center justify-center">
                  {/* Numeric Keypad */}
                  <div className="grid grid-cols-3 gap-4">
                      {/* First Row */}
                      {[1, 2, 3].map((number, index) => (
                      <button key={index} onClick={()=> handleDigitClick(number.toString())}
                          className="w-20 h-20 text-xl font-bold border rounded-lg bg-white shadow-md
                          hover:bg-gray-200 focus:outline-none"
                          >
                          {number}
                      </button>
                      ))}

                      {/* Second Row */}
                      {[4, 5, 6].map((number, index) => (
                      <button key={index} onClick={()=> handleDigitClick(number.toString())}
                          className="w-20 h-20 text-xl font-bold border rounded-lg bg-white shadow-md
                          hover:bg-gray-200 focus:outline-none"
                          >
                          {number}
                      </button>
                      ))}

                      {/* Third Row */}
                      {[7, 8, 9].map((number, index) => (
                      <button key={index} onClick={()=> handleDigitClick(number.toString())}
                          className="w-20 h-20 text-xl font-bold border rounded-lg bg-white shadow-md
                          hover:bg-gray-200 focus:outline-none"
                          >
                          {number}
                          <br />
                          
                      </button>
                      ))}

                      {/* Fourth Row with 0 centered and backspace on the right */}
                      {/* Empty cell to center the 0 */}
                      <div className="w-20 h-20"></div>

                      {/* Zero Button */}
                      <button onClick={()=> handleDigitClick('0')}
                          className="w-20 h-20 text-xl font-bold border rounded-lg bg-white shadow-md
                          hover:bg-gray-200 focus:outline-none"
                          >
                          0
                      </button>

                      {/* Backspace Button */}
                      <button onClick={handleBackspace}
                          className="w-20 h-20 text-xl font-bold rounded-lg hover:bg-gray-200 focus:outline-none bg-transparent">
                          ⌫
                      </button>
                  </div>
              </div>
          </div>

        </section>
      </div>
    </>
  );
};

export default VerifikasiOtp;
