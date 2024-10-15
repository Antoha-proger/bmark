import Link from "next/link"

const navbarItem = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Listing', path: '#2'},
    {id: 3, title: 'Property', path: '/'},
    {id: 4,title: 'Agents', path: '/'},
    {id: 5, title: 'Blog', path: '/'},
]

export function Navbar() {
    return (
        <nav>
            <ul className="flex gap-x-20 ">
                {navbarItem.map(item => <Link href={item.path}> <li key={item.id} className="cursor-pointer text-lg">{item.title}</li></Link>)}
            </ul>
        </nav>
    )
    
}