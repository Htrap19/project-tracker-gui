import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SidebarItem = ({ label, icon, ref = '#' }) => {
    return (
        <li>
            <a href={ref} className="p-[5px] block text-stone-300 hover:underline"><FontAwesomeIcon icon={icon} style={{ marginRight: '5px' }} />{label}</a>
        </li>
    )
}

export default SidebarItem;