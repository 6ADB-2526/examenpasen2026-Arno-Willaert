interface Props{
    lijst: string[]
}


export default function UserList({ lijst}: Props) {
    return (
    <ul>
        {lijst.map((personen, index)=>(
            <li key={index}>{personen}</li>
        ))}
    </ul>
    )
    
}