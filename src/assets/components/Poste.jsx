export const Button = (props) => {
  return (
    <li
      className={`button-poste ${props.isActive ? "opacity-50" : ""}`}
      onClick={() => props.handleClick("poste", props.poste)}
    >
      <img className="w-full h-auto" src={props.src} alt={props.title} />
      <h3 className="leading-none">{props.title}</h3>
    </li>
  );
};

export default function Poste({ handleClick, isActive }) {
  const pathSrc = "./src/assets/images";

  return (
    <section id="poste" className="flex flex-col text-center gap-4">
      <h2>Poste</h2>
      <ul className="flex justify-center gap-4">
        <Button
          isActive={isActive}
          poste="att"
          src={`${pathSrc}/att.png`}
          title="Assaillant"
          handleClick={handleClick}
        />
        <Button
          isActive={isActive}
          poste="def"
          src={`${pathSrc}/def.png`}
          title="Défenseur"
          handleClick={handleClick}
        />
      </ul>
    </section>
  );
}
