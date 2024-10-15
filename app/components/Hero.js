import { MainCard } from "./MainCard"
import Image from "next/image"
import heroImage2 from '@/app/assets/image/heroImage2.png'

export function Hero() {
    return (
        <section className="h-1700 bg-beige flex flex-col items-center overflow-hidden">
            <div className="container mx-auto flex items-center pt-52 flex-col gap-y-8 mb-32">
                <h2 className="text-80 w-988 text-center font-extrabold">Easy way to find a home
                that`s perfect for you</h2>
                <p className="text-xl text-grey">The find and most trusted marketplace of design & build house in the world.</p>
            </div>
            <MainCard />
            <Image 
                src={heroImage2}
                id="2"
            />
        </section>
    )
}