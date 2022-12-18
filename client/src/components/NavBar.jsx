import React from "react";
import logo from "../asset/logo.png";
import { MdMenu } from "react-icons/md";
import Menu from "./Menu";
import DropDown from "./DropDown";
import Tabs from "./Tabs";
const NavSm = () => {
    return (
        <>
            <nav className="bg-white">
                <div className="flex justify-between">
                    <img
                        src={logo}
                        className="object-scale-down h-14 mx-2 p-1"
                        alt="logo"
                    />
                    <DropDown />
                </div>
            </nav>
        </>
    );
};

const NavLg = () => {
    return (
        <>
            <nav className="bg-white w-full">
                <div className="flex justify-between">
                    <img
                        src={logo}
                        className="object-scale-down h-14 mx-2 p-1"
                        alt="logo"
                    />
                    {/* <Tabs/> */}
                    {/* <button className={({selected})}></button> */}
                </div>
            </nav>
        </>
    );
};

const NavBar = () => {
    return (
        <>
            <nav>
                {/* mobile screen */}
                <div className="drop-shadow md:hidden">{<NavSm />}</div>
                {/* large screen */}
                <div className="hidden md:flex lg:flex ">{<NavLg />}</div>
            </nav>
        </>
    );
};

export default NavBar;
