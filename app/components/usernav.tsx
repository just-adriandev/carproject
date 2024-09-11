import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, 
    DropdownMenuGroup, 
    DropdownMenuSeparator, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Phone, Car, Info, MenuIcon } from "lucide-react";
import { ThemeToggle } from "./theme-toggler";


const navItems = [
    {name:'Carros', href:'/dashboard', icon:Car },
    {name:'Sobre nós', href:'/dashboard/about', icon:Info },
    {name:'Contatos', href:'/dashboard/info', icon:Phone },   
    ]

export function UserNav({image}: {image: string}){
    
    return(
        <DropdownMenu >
        
        <DropdownMenuTrigger asChild>

            <div className="rounded-full cursor-pointer border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                
                <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5"/>

                <Avatar className='h-8 w-8 rounded-full'>
                    <AvatarImage src={image ?? AvatarFallback} alt='imagem de perfil do usuario' />
                </Avatar>

            </div>
 
        </DropdownMenuTrigger>

        <DropdownMenuContent className='justify-center text:sm font-medium w-56'>

            <DropdownMenuGroup>
                {navItems.map((item, index)=> (
                    <DropdownMenuItem asChild key={index}>
                        <Link href={item.href} className="w-full flex cursor-pointer justify-between items-center">
                            {item.name}
                            <span>
                                <item.icon className="w-4 text-primary mr-3 h-4" />
                            </span>
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuGroup>

            <DropdownMenuSeparator/>
                <div className="flex md:hidden">
                <ThemeToggle/>
                </div>
            <DropdownMenuSeparator className="md:hidden flex" />

            <LogoutLink><Button variant={"secondary"} className="w-full">Sair</Button></LogoutLink>

        </DropdownMenuContent>

    </DropdownMenu>    
    )
}