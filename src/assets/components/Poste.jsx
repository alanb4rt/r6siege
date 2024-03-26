export default function Poste() {
    return (
        <section id="poste" className="flex flex-col text-center gap-4">
            <h2> Poste </h2>
            <ul className="flex justify-center gap-4">
            <li className="button-poste" id="att"> 
                <img className="w-full h-auto" src="./src/assets/images/att.png" alt="att"/>
                <h3 className="leading-none">Assaillant</h3> 
            </li>    
            <li className="button-poste" id="def">
                <img className="w-full h-auto" src="./src/assets/images/def.png" alt="att"/> 
                <h3 className="leading-none">Défenseur</h3> 
            </li>      
            </ul>
        </section>
    )
}