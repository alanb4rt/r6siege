import { useEffect, useState } from "react";
import Poste from "./components/Poste";
import Unite from "./components/Unite";
import OperatorsList from "./components/OperatorsList";
import Modal from "./components/Modal";
import { operators } from "./utils/r6s_data";

export default function App() {
  const initialFilter = {
    poste: "",
    unite: "",
  };

  const [data, setData] = useState(operators);
  const [isModalActive, setIsModalActive] = useState(false);
  const [operatorDetails, setOperatorDetails] = useState();
  const [filter, setFilter] = useState(initialFilter);

  const handleModal = (id) => {
    setIsModalActive(true);
    const findOperator = operators.find((op) => op.id === id);
    setOperatorDetails(findOperator);
  };

  const handleClick = (type, filterValue) => {
    if (type === "poste" && filterValue === filter.poste) {
      setFilter((prev) => ({ ...prev, [type]: "" }));
    } else {
      setFilter((prev) => ({ ...prev, [type]: filterValue }));
    }
  };

  const filteredOperators = (filter) => {
    if (!filter.poste && !filter.unite) {
      return operators;
    }

    return operators.filter((operator) =>
      Object.entries(filter).every(
        ([key, value]) => !value || operator[key] === value
      )
    );
  };

  useEffect(() => {
    const filteredData = filteredOperators(filter);
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
      <Modal
        operatorData={operatorDetails}
        isModalActive={isModalActive}
        close={closeModal}
      />
      <footer className="flex justify-center p-4">
        <p>© 2024 - Alan Bart</p>
      </footer>
    </>
  );
}
