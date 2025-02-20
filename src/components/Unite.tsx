import Operators from "../data/operators.json";
import { FilterProps } from "../types/filter";

export default function Unite({ filter, handleClick }: FilterProps) {
  const uniqueUnites = [...new Set(Operators.map((op) => op.unite))];

  return (
    <section id="unite" className=" w-1/5 max-w-xs max-lg:w-full">
      <div className="sticky top-12">
        <h2 className="max-lg:text-center">Unités</h2>
        <ul className="flex flex-col gap-2 max-lg:flex-row max-lg:overflow-x-scroll max-lg:pb-1">
          <li
            className={`button uppercase ${filter === "" ? "" : "opacity-50"}`}
            onClick={() => handleClick("unite", "")}
          >
            TOUS
          </li>
          {uniqueUnites.map((unite) => (
            <li
              key={unite}
              className={`button uppercase ${filter && filter !== unite ? "opacity-50" : ""}`}
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
