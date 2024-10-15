import Image from "next/image"

export function MainCardSubSet({icon, subText, text}) {
    return (
        <div className="flex flex-col pl-12">
            <div className="flex gap-x-1.5 items-center -ml-9 mb-2">
                <Image src={icon}/>
                <p className="text-grey">{subText}</p>
            </div>
            <h4 className="text-center text-4xl font-semibold">{text}</h4>
        </div>
    )
}