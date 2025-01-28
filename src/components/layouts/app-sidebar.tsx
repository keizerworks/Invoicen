import Image from "next/image";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/ui/sidebar";
import { navigationList } from "../../constants/navigation";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="pt-4">
        <Image
          src={"/assets/logos/light.svg"}
          className="mx-auto"
          alt="logo"
          width={200}
          height={100}
        />
      </SidebarHeader>
      <Separator />
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationList.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon /> <span>{item.title}</span>{" "}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter className="px-4">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback>KI</AvatarFallback>
          </Avatar>

          <div>
            <p>Keizer Works</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
export default AppSidebar;
