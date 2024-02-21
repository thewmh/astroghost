import type { PostOrPage } from "@tryghost/content-api";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

interface Props {
  data: any;
}

const Navigation = ({data}: Props) => {
  return (
    <div className="w-full flex text-9xl font-extrabold break-all tracking-tighter">
      <NavigationMenu className="w-full">
        <NavigationMenuList className="flex gap-8">
          {data.map((item: PostOrPage) => {
            return (
            <NavigationMenuItem>
              <a className="text-neutral-300 hover:text-neutral-600" href={item.slug}>
                {item.title}
              </a>
            </NavigationMenuItem>
          )})}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Navigation;