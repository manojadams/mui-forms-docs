import React, { useState } from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

interface SidearMenuItem {
    name: string;
    description: string;
    path: string;
    children: Array<SidearMenuItem>;
}

interface Props {
    children?: Array<SidearMenuItem>;
}

function SidebarMenu(props: Props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <MenuList
            onClick={(e) => {
                setExpanded(!expanded);
                e.stopPropagation();
            }}
        >
        {
            props.children && props.children.map(menuItem => (
                <MenuItem key={menuItem.name} className="flex-col">
                    {menuItem.name}
                    {menuItem.children && expanded && <SidebarMenu>{menuItem.children}</SidebarMenu>}
                </MenuItem>
            ))
        }
        </MenuList>
    );
}

export default SidebarMenu;
