import { useEffect, useState } from "react";

export const Button = (props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!props.filter ? false : true);
  }, [props.filter]);

  return (
    <li
      className={`button-poste ${
        isActive && props.poste !== props.filter ? "opacity-50" : ""
      }`}
      onClick={() => props.handleClick("poste", props.poste)}
    >
      <img className="w-full h-auto" src={props.src} alt={props.title} />
      <h3 className="leading-none">{props.title}</h3>
    </li>
  );
};

export default function Poste({ filter, handleClick }) {
  return (
    <section id="poste" className="text-center py-4">
      <h2>Poste</h2>
      <ul className="flex justify-center gap-4">
        <Button
          filter={filter}
          poste="att"
          src="./src/assets/images/postes/att.png"
          title="Assaillant"
          handleClick={handleClick}
        />
        <Button
          filter={filter}
          poste="def"
          src="./src/assets/images/postes/def.png"
          title="Défenseur"
          handleClick={handleClick}
        />
      </ul>
    </section>
  );
}
