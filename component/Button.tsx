import Link from "next/link";
import React from "react";

type ButtonPropsType = {
    path: string
}

export const Button = (props: ButtonPropsType) => {
    return (<Link
        className="cursor-pointer m-2 lg:m-8 flex justify-center items-center text-white hover:bg-[#595959] bg-[#2c2c2c] w-40 h-8 rounded-lg"
        href={Object.hasOwn(props, "path") ? props.path : ""}>
        Contact us
    </Link>)
}