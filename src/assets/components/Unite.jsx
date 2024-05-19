import { useEffect, useState } from "react";
import { operators } from "../utils/r6s_data";

export default function Unite(props) {
  const { handleClick, filter } = props;
  const uniqueUnites = [...new Set(operators.map((op) => op.unite))];

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!filter ? false : true);
  }, [filter]);

  return (
    <section id="unite" className="sticky top-8 w-1/5 max-w-xs">
      <h2>Unités</h2>
      <ul className="flex flex-col gap-2">
        <li
          className={`button uppercase ${
            isActive && filter ? "opacity-50" : ""
          }`}
          onClick={() => handleClick("unite", "")}
        >
          TOUS
        </li>
        {uniqueUnites.map((unite) => (
          <li
            key={unite}
            className={`button uppercase ${
              isActive && filter !== unite ? "opacity-50" : ""
            }`}
            onClick={() => handleClick("unite", unite)}
          >
            {unite}
          </li>
        ))}
      </ul>
    </section>
  );
}
