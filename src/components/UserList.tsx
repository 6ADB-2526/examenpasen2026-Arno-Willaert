interface Props{
    lijst: string[]
}


export default function UserList({ lijst}: Props) {
    return (
        <>
        <div>
            <h2>geregistreede gebruikers</h2>
            <ul>
        {lijst.map((personen, index)=>(
            <li key={index}>{personen}</li>
        ))}
        </ul>
        </div>
    </>
    
    )
    
}