import {Button} from "@/component/Button";
import React from "react";

export const Navbar = () => (
    <nav className="flex justify-between items-center border-b-1 border-[#d9d9d9]">
        <h1 className="m-2 text-xl lg:m-8 lg:text-2xl font-bold">
            Some Company
        </h1>
        <Button />
    </nav>
)