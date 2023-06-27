import { NextPage } from "next";
import React from "react";
import { useCookies } from "react-cookie";
import VerifyPhoneForm from "../../app/forms/auth/verifyPhoneForm";

const VerifyPhone : NextPage = () => {
    const [cookies, setCookie] = useCookies(['phoenix-token'])

    return(
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
                            Enter the code sent to your phone
                        </h2>
                        
                    </div>

                    <VerifyPhoneForm setCookie={setCookie} cookies={cookies} />
                </div>
            </div>
        </>
    )
}

export default VerifyPhone;
