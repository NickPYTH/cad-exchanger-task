import Link from "next/link";
import React from "react";

export const Button = () => (
    <Link className="m-2 lg:m-8 flex justify-center items-center text-white bg-[#2c2c2c] w-40 h-8 rounded-lg" href="/contact_us">
        Contact us
    </Link>
)