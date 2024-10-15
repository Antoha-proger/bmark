const navbarItem = [
    {id: 1, title: 'Home'},
    {id: 2, title: 'Listing'},
    {id: 3, title: 'Property'},
    {id: 4,title: 'Agents'},
    {id: 5, title: 'Blog'},
]

export function Navbar() {
    return (
        <nav>
            <ul className="flex gap-x-20 ">
                {navbarItem.map(item => <li key={item.id} className="cursor-pointer text-lg">{item.title}</li>)}
            </ul>
        </nav>
    )
    
}