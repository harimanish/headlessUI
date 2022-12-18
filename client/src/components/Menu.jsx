import React from "react";
import { MdMenu } from "react-icons/md";
const Menu = () => {
    return (
        <div className="m-4 my-auto">
            <button className="h-8 my-2">
                <MdMenu className="w-full h-full hover:text-white" />
            </button>
        </div>
    );
};

export default Menu;
