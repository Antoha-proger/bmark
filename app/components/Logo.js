import Image from "next/image"
import logo from "@/app/assets/icons/Logo.svg"

export function Logo() {
    return (
        <Image src={logo}/>
    )
}