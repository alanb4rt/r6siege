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
    <section id="unite" className=" w-1/5 max-w-xs max-lg:w-full">
      <div className="sticky top-12">
        <h2 className="max-lg:text-center">Unités</h2>
        <ul className="flex flex-col gap-2 max-lg:flex-row max-lg:overflow-x-scroll max-lg:pb-1">
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
      </div>
    </section>
  );
}
