
"use client"

import NavbarBack from "@/component/navbarBack";
import TopUpCard from "@/component/top-up-card";
const OtherBank = () => {
    
    return(
        <>
            <div className="min-h-screen bg-white">
                <NavbarBack name="Top Up LTRPay"></NavbarBack>
                <div className=" flex flex-col items-center">
                    <TopUpCard name="Via Other Bank" ></TopUpCard>
                </div>

            </div>

        </>
    );
}
export default OtherBank;