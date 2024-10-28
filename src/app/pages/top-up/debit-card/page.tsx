
"use client"

import NavbarBack from "@/component/navbarBack";
import TopUpCard from "@/component/top-up-card";
const DebitCardMethods = () => {
    
    return(
        <>
            <div className="min-h-screen bg-white">
                <NavbarBack name="Top Up LTRPay"></NavbarBack>
                <div className=" flex flex-col items-center">
                    <TopUpCard name="Via Debit Card" ></TopUpCard>
                </div>

            </div>

        </>
    );
}
export default DebitCardMethods;