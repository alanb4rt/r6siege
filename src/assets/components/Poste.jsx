export const Button = (props) => {
    return (
        <li className={`button-poste ${props.isActive ? 'opacity-50' : ''}`} onClick={() => props.onClick(props.id)}> 
            <img className="w-full h-auto" src={props.src} alt={props.title} />
            <h3 className="leading-none">{props.title}</h3> 
        </li>
    )
}

export default function Poste({poste, isActive}) {

    const pathSrc = "./src/assets/images/"

    return (
        <section id="poste" className="flex flex-col text-center gap-4">
            <h2>Poste</h2>
            <ul className="flex justify-center gap-4">
                <Button isActive={isActive} id="att" src={pathSrc + "att.png"} title="Assaillant" onClick={poste} /> 
                <Button isActive={isActive} id="def" src={pathSrc + "def.png"} title="Défenseur" onClick={poste} />    
            </ul>
        </section>
    )
}