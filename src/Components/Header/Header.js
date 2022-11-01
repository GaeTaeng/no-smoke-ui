import React from "react";
import Menu from "./Menu/Menu";

export default function Header({ children }) {
    console.log("children : ", children)
    return (
        <div>
            <Menu />
            <div>
                {children}
            </div>
        </div>
    )
}