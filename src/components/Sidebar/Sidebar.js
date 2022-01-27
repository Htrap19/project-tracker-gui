import React from "react";
import Button from '../../helpers/components/Button'
import './Sidebar.css'

import { faFolderPlus, faFolder } from '@fortawesome/free-solid-svg-icons'
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = () => {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <p className="sidebar-headertxt">Projects</p>
                <Button text="New" color="#27ae60" img={faFolderPlus} />
            </div>

            <ul className="components">
                <SidebarItem label="projects/MyProject1" icon={faFolder} />
                <SidebarItem label="projects/MyProject2" icon={faFolder} />
                <SidebarItem label="projects/MyProject3" icon={faFolder} />
            </ul>
        </nav>
    )
}

export default Sidebar