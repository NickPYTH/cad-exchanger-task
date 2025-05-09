import {Button} from "@/component/Button";
import React from "react";
import Link from "next/link";

export const Navbar = () => (
    <nav className="flex justify-between items-center border-b-1 border-[#d9d9d9]">
        <h1 className="m-2 text-xl lg:m-8 lg:text-2xl font-bold">
            <Link href="/">
                Some Company
            </Link>
        </h1>
        <Button path={'/contact_us'}/>
    </nav>
)