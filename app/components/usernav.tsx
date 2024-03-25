import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, 
    DropdownMenuGroup, 
    DropdownMenuSeparator, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";

import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Phone, Car, Info } from "lucide-react";


const navItems = [
    {name:'Carros', href:'/dashboard', icon:Car },
    {name:'Sobre nós', href:'/dashboard/about', icon:Info },
    {name:'Contatos', href:'/dashboard/info', icon:Phone },   
    ]

export function UserNav({image}: {image: string}){
    
    return(
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="relative h-10 w-10 rounded-full">
            <Avatar className='h-10 w-10 rounded-full'>
                <AvatarImage src={image} alt='' />
                <AvatarFallback></AvatarFallback>
            </Avatar>
            </Button>    
        </DropdownMenuTrigger>

        <DropdownMenuContent className='justify-center text:sm font-medium w-56'>

            <DropdownMenuGroup>
                {navItems.map((item, index)=> (
                    <DropdownMenuItem asChild key={index}>
                        <Link href={item.href} className="w-full flex justify-between items-center">
                            {item.name}
                            <span>
                                <item.icon className="w-4 text-primary mr-3 h-4" />
                            </span>
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator/>

            <LogoutLink><Button variant={"secondary"} className="w-full">Sair</Button></LogoutLink>

        </DropdownMenuContent>

    </DropdownMenu>    
    )
}