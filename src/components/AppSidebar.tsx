import { Home, Brain, MessageSquare, Users, Mail, Sparkles } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import logo from "../assets/logo1.jpg"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "AI Career Counselor", url: "/ai-counselor", icon: Brain },
  { title: "Community Forum", url: "/community", icon: MessageSquare },
  { title: "Premium Mentorship", url: "/mentorship", icon: Sparkles },
  { title: "Team", url: "/team", icon: Users },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border/50 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-15 w-50 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <img src={logo} alt="skillsence" />
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          {/* <div>
            <h2 className="text-lg font-bold text-foreground">SkillSense</h2>
            <p className="text-xs text-muted-foreground">AI Career Intelligence</p>
          </div> */}
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className="flex items-center gap-3"
                      activeClassName="bg-accent text-accent-foreground font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
