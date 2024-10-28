"use client";
import Footer from "@/component/footer";
import NavbarBack from "@/component/navbarBack";
import { useUsers } from "@/component/data-users-provider";
import { useState } from "react";

const RegistrasiDetail = () => {
    const { data, setDetailData } = useUsers();
    const [formData, setFormData] = useState({
        nama: '',
        tanggal_lahir: '',
        tempat_lahir: '',
        email: '',
      });
    const handleDaftar = () => {
        setDetailData({
            nama: formData.nama,
            tanggal_lahir: formData.tanggal_lahir,
            tempat_lahir: formData.tempat_lahir,
            email: formData.email,
        });
       
    };
    const cekData = () => {
        console.log(data)
    }

    if(data.nama != '' && data.tanggal_lahir != '' && data.tempat_lahir != '' && data.email != ''){
        console.log('bisa redirect');
    }else{
        console.log('belum lengkap');
    }

    
    
      const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value || "",
        });
      };

    return (
        <>
            <div className="min-h-screen bg-white">
                <NavbarBack name={"LRT X JakOne Pay"} />
                <div className=" flex flex-col items-center">
                <section className="py-10 text-black w-full max-w-md">
                    <div className="flex justify-center pb-3">
                        <img src="/logo/Logo_LRT_Jakarta.png" width={200} alt="Logo LRT Jakarta" />
                    </div>
                    <div className="w-full px-4">
                        <div className="py-2">
                            <input
                                type="string"
                                placeholder="Masukan telepon / handphone"
                                maxLength={12}
                                name="no_telp"
                                value={data.no_telp}
                                className="w-full px-4 py-4 pr-20 bg-gray-100 rounded-lg"
                                readOnly
                            />
                        </div>
                        <div className="py-2">
                            <input
                                type="string"
                                placeholder="Nama"
                                name="nama"
                                onChange={handleInputChange}
                                value={formData.nama}
                                className="w-full px-4 py-4 pr-20 bg-gray-100 rounded-lg"
                            />
                        </div>
                        <div className="py-2">
                            <input
                                type="date"
                                placeholder="Tanggal Lahir"
                                name="tanggal_lahir"
                                onChange={handleInputChange}
                                value={formData.tanggal_lahir}
                                className="w-full px-4 py-4 pr-20 bg-gray-100 rounded-lg"
                            />
                        </div>
                        <div className="py-2">
                            <input
                                type="string"
                                placeholder="Tempat Lahir"
                                name="tempat_lahir"
                                onChange={handleInputChange}
                                value={formData.tempat_lahir}
                                className="w-full px-4 py-4 pr-20 bg-gray-100 rounded-lg"
                            />
                        </div>
                        <div className="py-2">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleInputChange}
                                value={formData.email}
                                className="w-full px-4 py-4 pr-20 bg-gray-100 rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 py-5">
                        <button
                            onClick={handleDaftar}
                            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none">
                            Daftar
                        </button>
                    </div>
                </section>
                <Footer />
                </div>
                
            </div>
        </>
    );
};

export default RegistrasiDetail;
