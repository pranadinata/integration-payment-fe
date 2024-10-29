/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import NavbarBack from "@/component/navbarBack";
import { useUsers } from "@/component/data-users-provider";

const DetailUsers = () => {
    const { data } = useUsers();
    const formatNumber = (input: any) => {
        const number = parseInt(input);
        return isNaN(number) ? '0' : new Intl.NumberFormat('id-ID').format(number);
    }
    return(
        <>
            <div className="min-h-screen bg-white">
                <NavbarBack name={'Detail users'}></NavbarBack>
                <div className="flex flex-col items-center">
                    <section className=" text-black w-full max-w-md">
                        <div className="container text-black px-4 py-5">
                            <div className="py-4">
                                <p className="font-bold">Nama Lengkap</p>
                                <p className="">{ data.nama }</p>
                            </div>
                            <div className="py-4">
                                <p className="font-bold">Tanggal Lahir</p>
                                <p className="">{ data.tanggal_lahir }</p>
                            </div>
                            <div className="py-4">
                                <p className="font-bold">Tempat Lahir</p>
                                <p className="">{ data.tempat_lahir }</p>
                            </div>
                            <div className="py-4">
                                <p className="font-bold">Email</p>
                                <p className="">{ data.email }</p>
                            </div>
                            <div className="py-4">
                                <p className="font-bold">Pin</p>
                                <p className="">{ data.pin }</p>
                            </div>
                            <div className="py-4">
                                <p className="font-bold">Otp</p>
                                <p className="">{ data.otp }</p>
                            </div>
                           
                            <div className="py-4">
                                <p className="font-bold">Terakhir Top Up</p>
                                <p className="">{ data.top_up_type }</p>
                            </div>
                            <div className="py-4">
                                <p className="font-bold">Saldo</p>
                                <p className="">Rp. { formatNumber(data.saldo) }</p>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        </>
    );
}
export default DetailUsers;