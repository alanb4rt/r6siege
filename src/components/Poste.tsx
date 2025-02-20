import Button from "./Button";
import { FilterProps } from "../types/filter";
import { getImageURL } from "../utils/getImageURL";

export default function Poste({ filter, handleClick }: FilterProps) {
  return (
    <section id="poste" className="text-center py-4">
      <h2>Poste</h2>
      <ul className="flex justify-center gap-4">
        <Button
          filter={filter}
          poste="att"
          src={getImageURL("postes/att.png")}
          title="Assaillant"
          handleClick={handleClick}
        />
        <Button
          filter={filter}
          poste="def"
          src={getImageURL("postes/def.png")}
          title="Défenseur"
          handleClick={handleClick}
        />
      </ul>
    </section>
  );
}
