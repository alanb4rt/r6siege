interface ButtonProps {
    filter?: string;
    poste: "att" | "def";
    src: string;
    title: "Assaillant" | "Défenseur";
    handleClick: (type: "poste" | "unite", filterValue: string) => void;
}
  
export default function Button ({filter, poste, handleClick, src, title}: ButtonProps) {
    const liClass = filter && filter !== poste ? "opacity-50" : ""

    return (
        <li
        className={`button-poste ${liClass}`}
        onClick={() => handleClick("poste", poste)}
        >
        <img className="w-full h-auto" src={src} alt={title} />
        <h3 className="leading-none">{title}</h3>
        </li>
    );
};