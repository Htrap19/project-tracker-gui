import React from "react";
import Button from '../../helpers/components/Button'

import { faFolderPlus, faFolder } from '@fortawesome/free-solid-svg-icons'
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = ({ changeRoute }) => {
    return (
        <nav id="sidebar" className="bg-midnight-light min-w-[350px] max-w-[350px] min-h-screen p-6">
            <div className="flex flex-row justify-between items-center border-b border-midnight-lighter pb-2">
                <p className="text-stone-300">Projects</p>
                <Button text="New" extraClassNames="bg-green-600 hover:bg-green-500 text-stone-300" icon={faFolderPlus} onClick={() => { changeRoute("NewProject") }} />
            </div>

            <ul className="p-2 list-none overflow-y-auto max-h-full">
                <SidebarItem label="projects/MyProject1" icon={faFolder} />
                <SidebarItem label="projects/MyProject2" icon={faFolder} />
                <SidebarItem label="projects/MyProject3" icon={faFolder} />
            </ul>
        </nav>
    )
}

export default Sidebar