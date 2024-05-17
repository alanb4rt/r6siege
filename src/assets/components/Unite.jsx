import { operators } from "../utils/r6s_data";

export default function Unite(props) {
  const { handleClick } = props;
  const uniqueUnites = [...new Set(operators.map((op) => op.unite))];

  return (
    <section id="unite">
      <div className="sticky">
        <h2> Unités </h2>
        <ul className="flex flex-col">
          <li className="button" onClick={() => handleClick("unite", "")}>
            TOUS
          </li>
          {uniqueUnites.map((unite) => (
            <li
              key={unite}
              className={`button uppercase ${
                props.isActive ? "opacity-50" : ""
              }`}
              onClick={() => handleClick("unite", unite)}
            >
              {unite}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
