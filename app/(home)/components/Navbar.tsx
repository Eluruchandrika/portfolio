
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiX, SiGithub,SiLinkedin, SiInstagram } from "react-icons/si";
const Navbar = ({className}:{className?:string}) => {

    const socials = [
        {
            link:"https://www.linkedin.com/in/chandrika-eluru/",
            label:"LinkedIN",
            Icon: SiLinkedin,
        },
        {
            link:"https://github.com/Eluruchandrika",
            label:"GitHub",
            Icon:SiGithub,
        },
        {
            link:"https://www.instagram.com/itx_chandhuu",
            label:"Instagram",
            Icon: SiInstagram,
        },
        

    ]
  return (
   <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
    <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2"> Chandrika Eluru 🧿</h1>
    <div className="flex items-center gap-5">
        {socials.map((elem,index)=>{
            const Icon = elem.Icon;
            return <Link href={elem.link}  key={index} aria-label={elem.label} >
                <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
            </Link>
        })}
    </div>
   </nav>
  )
}

export default Navbar