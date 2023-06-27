import { NextPage } from "next";
import React from "react";
import { useCookies } from "react-cookie";

const VerifyPhone : NextPage = () => {
    const [cookies, setCookie] = useCookies(['phoenix-token'])

    return(
    )
}

export default VerifyPhone;
