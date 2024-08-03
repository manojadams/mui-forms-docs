import React from "react";
import sidebarData from "../../examples/sidebar-menu.json";
import templateData from "../../examples/templates.json";
// import { Menu, Sidebar, SubMenu, MenuItem } from "react-pro-sidebar";
import TemplateCard from "../TemplateCard";
import { Cards } from "nextra/components";

function SidebarLayout() {
  return (
    <div className="flex flex-row">
      {/* <Sidebar>
        <Menu>
          {
            sidebarData.items.map(menuItem => (
              <SubMenu label={menuItem.name} key={menuItem.name}>
                {menuItem.children && menuItem.children.map(submenuItem => <MenuItem key={submenuItem.name}>{submenuItem.name}</MenuItem>)}
              </SubMenu>
            ))
          }
        </Menu>
      </Sidebar> */}
      <div className="flex gap-4">
      <Cards num={2}>
        <Cards.Card
          image
          arrow
          title="Documentation theme"
          href="/docs/docs-theme/start"
          icon=""
        >
          <>![Documentation theme](/assets/docs-theme.png)</>
        </Cards.Card>
        <Cards.Card image arrow title="Blog theme" href="/docs/blog-theme/start" icon="">
          <>![Blog theme](/assets/blog-theme.png)</>
        </Cards.Card>
      </Cards>
        {
          templateData.templates.map(template => <TemplateCard key={template.name} {...template} />)
        }
      </div>
    </div>
  )
}

export default SidebarLayout;
