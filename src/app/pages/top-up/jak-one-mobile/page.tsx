
"use client"

import NavbarBack from "@/component/navbarBack";
import TopUpCard from "@/component/top-up-card";
const JakOneMobileMethods = () => {
    
    return(
        <>
            <div className="min-h-screen bg-white">
                <NavbarBack name="Top Up LTRPay"></NavbarBack>
                <div className=" flex flex-col items-center">
                    <TopUpCard name="Via JakOne Mobile" ></TopUpCard>
                </div>

            </div>

        </>
    );
}
export default JakOneMobileMethods;