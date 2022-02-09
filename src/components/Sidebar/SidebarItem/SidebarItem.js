import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SidebarItem = ({ label, icon, onClick = () => {} }) => {
    return (
        <li>
            <p onClick={onClick} className="p-[5px] block text-stone-300 hover:underline cursor-pointer"><FontAwesomeIcon icon={icon} style={{ marginRight: '5px' }} />{label}</p>
        </li>
    )
}

export default SidebarItem;