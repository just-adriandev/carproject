import Link from "next/link";
import { ThemeToggle } from "./theme-toggler";
import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./usernav";

export async function Navbar(){

const {isAuthenticated, getUser} = getKindeServerSession(); 
const user = await getUser()

    return(
        <nav className="border-b w-full h-[15vh] flex items-center">
            <div className="container flex items-center justify-between">

                <Link href={'/'}> <h1 className="font-bold text-4xl"> AUTO<span className="text-primary">adrian</span></h1> </Link>

                <div className="flex items-center gap-x-5">
                    <div className="hidden md:flex">
                        <ThemeToggle/>
                    </div>
                    
                    {await isAuthenticated() ? (
                        <div className="flex items-center gap-x-5">                        
                    
                        <UserNav image={user?.picture as string}/>
                    
                        </div>
                    ) : (
                        <div className="flex items-center gap-x-5">                        
                    
                        <LoginLink><Button className="text-white">Entrar</Button></LoginLink>
                        <RegisterLink><Button variant={"secondary"}>Registre-se</Button></RegisterLink>

                        
                    
                        </div>
                    )}
                
                </div>

            </div>
        </nav>
    )
}