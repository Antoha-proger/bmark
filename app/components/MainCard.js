import { BaseButton } from "./BaseButton"
import { MainCardSubSet } from "./MainCardSubSet"
import location from "@/app/assets/icons/Location.svg"
import property from "@/app/assets/icons/Property.svg"
import price from "@/app/assets/icons/Price.svg"

const mainCardItems = [
    {id: 1, text: 'Los Angels', subText: 'Location', icon: location},
    {id: 2, text: 'Delux', subText: 'Property Type', icon: property},
    {id: 3, text: '$7000 - 8000', subText: 'Average Price', icon: price},
]

export function MainCard() {
    return (
        <div className="min-h-72 w-1200 bg-white rounded-3xl shadow-card"> 
            <div className="h-2/5 flex items-end gap-x-20 pl-14 border-b-2">
                
                <input class="hidden peer/one" defaultChecked={true} type="radio" name="card" id="rent" />
                <label class="-mb-0.5 px-4 font-semibold text-2xl pb-6 cursor-pointer peer-checked/one:border-b-2 peer-checked/one:border-black peer-checked/one:pb-22" for="rent">Rent</label>

                <input class="hidden peer/two" type="radio" name="card" id="buy" />
                <label class="-mb-0.5 px-4 font-semibold text-2xl pb-6 cursor-pointer peer-checked/two:border-b-2 peer-checked/two:border-black peer-checked/two:pb-22" for="buy">Buy</label>

                <input class="hidden peer/three" type="radio" name="card" id="sell" />
                <label class="-mb-0.5 px-4 font-semibold text-2xl pb-6 cursor-pointer peer-checked/three:border-b-2 peer-checked/three:border-black peer-checked/three:pb-22" for="sell">Sell</label>
            </div>
            <div className="flex justify-between items-center h-1/2 px-14">
                <div className="flex gap-x-20 items-center divide-x-2">
                    {mainCardItems.map(item => <MainCardSubSet key={item.id} text={item.text} subText={item.subText} icon={item.icon}/>)}                        
                </div>
                <BaseButton text="Search"/>
            </div>
        </div>
    )
}