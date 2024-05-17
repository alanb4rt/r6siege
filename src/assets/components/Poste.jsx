import { useEffect, useState } from "react";

export const Button = (props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!props.filter ? false : true);
  }, [props.filter]);

  return (
    <li
      className={`button-poste ${
        isActive && props.poste !== props.filter && "opacity-50"
      }`}
      onClick={() => props.handleClick("poste", props.poste)}
    >
      <img className="w-full h-auto" src={props.src} alt={props.title} />
      <h3 className="leading-none">{props.title}</h3>
    </li>
  );
};

export default function Poste({ filter, handleClick }) {
  const pathSrc = "./src/assets/images";

  return (
    <section id="poste" className="flex flex-col text-center gap-4">
      <h2>Poste</h2>
      <ul className="flex justify-center gap-4">
        <Button
          filter={filter}
          poste="att"
          src={`${pathSrc}/att.png`}
          title="Assaillant"
          handleClick={handleClick}
        />
        <Button
          filter={filter}
          poste="def"
          src={`${pathSrc}/def.png`}
          title="Défenseur"
          handleClick={handleClick}
        />
      </ul>
    </section>
  );
}
