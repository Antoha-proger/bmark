import { BaseButton } from "./BaseButton"
import { Navbar } from "./Navbar"
import { Logo } from "./Logo"

export function Header() {
    return (
        <header className="bg-beige">
            <div className="flex container mx-auto justify-between h-20 items-center">
                <Logo />
                <div className="flex gap-x-28 items-center">
                    <Navbar />
                    <BaseButton text="Sign In"/>
                </div>
            </div>
        </header>
    )
}