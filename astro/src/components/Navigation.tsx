import type { PostOrPage } from "@tryghost/content-api";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

interface Props {
  currentUrl: string;
  data: any;
}

const Navigation = ({data, currentUrl}: Props) => {
  return (
    <div className="w-full flex text-9xl font-extrabold break-all tracking-tighter mb-10">
      <NavigationMenu className="w-full">
        <NavigationMenuList className="flex gap-8">
          {data.map((item: PostOrPage) => {
            return (
            <NavigationMenuItem>
              <a className={`text-neutral-300 ${item.slug !== currentUrl && 'hover:text-neutral-600 hover:cursor-pointer'} cursor-default`} href={currentUrl !== item.slug ? item.slug : 'javascript:void(0)'}>
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