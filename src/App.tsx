import { useEffect, useState } from "react";
import Poste from "./components/Poste";
import Unite from "./components/Unite";
import OperatorsList from "./components/OperatorsList";
import Modal from "./components/Modal";
import Operators from "./data/operators.json";
import { OperatorType } from "./types/operator";
import { FilterType } from "./types/filter";
import { filterOperators } from "./utils/filterOperators";

const initialFilter: FilterType = {
  poste: "",
  unite: "",
};

export default function App() {
  const [data, setData] = useState<OperatorType[]>(Operators);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [operatorDetails, setOperatorDetails] = useState<OperatorType | null>(null);

  const [filter, setFilter] = useState(initialFilter);

  const handleModal = (id: OperatorType["id"]) => {
    setIsModalActive(true);
    const findOperator = Operators.find((op) => op.id === id);
    setOperatorDetails(findOperator || null)
  };

  const handleClick = (type: "poste" | "unite", filterValue: string) => {
    setFilter((prev) => ({
      ...prev,
      [type]: prev[type] === filterValue ? "" : filterValue,
    }));
  };

  useEffect(() => {
    const filteredData = filterOperators(filter);
    setData(filteredData);
  }, [filter]);

  const closeModal = () => setIsModalActive(false);

  return (
    <>
      <header>
        <h1>
          Rainbow Six : Siege
          <br />
          Les opérateurs
        </h1>
      </header>
      <main id="content" className="ctn">
        <Poste handleClick={handleClick} filter={filter.poste} />
        <section className="flex gap-8 py-4 max-lg:flex-col">
          <Unite handleClick={handleClick} filter={filter.unite} />
          <OperatorsList data={data} handleModal={handleModal} />
        </section>
        <section className="w-full text-right">
          <a href="#content">Retour haut de page</a>
        </section>
      </main>
      {isModalActive && <Modal
        operatorData={operatorDetails}
        isModalActive={isModalActive}
        close={closeModal}
      />}
      <footer className="flex justify-center p-4">
        <p>© 2025 - Alan Bart</p>
      </footer>
    </>
  );
}
