import { useEffect, useState } from "react";
import Rank from "./assets/components/Rank";
import Poste from "./assets/components/Poste";
import Unite from "./assets/components/Unite";
import OperatorsList from "./assets/components/OperatorsList";
import Modal from "./assets/components/Modal";
import { operators } from "./assets/utils/r6s_data";

export default function App() {
  const initialFilter = {
    poste: "",
    unite: "",
  };

  const [data, setData] = useState(operators);
  const [isModalActive, setIsModalActive] = useState(false);
  const [operatorDetails, setOperatorDetails] = useState();
  const [isUniteActive, setIsUniteActive] = useState(false);
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

  useEffect(() => {
    const unite = filter.unite ? true : false;
    setIsUniteActive(unite);
  }, [filter]);

  return (
    <>
      <header>
        <h1>
          Rainbow Six : Siege
          <br />
          Les opérateurs
        </h1>
      </header>
      <main className="p-8 min-w-96">
        <Rank />
        <Poste handleClick={handleClick} filter={filter.poste} />
        <Unite handleClick={handleClick} isActive={isUniteActive} />
        <OperatorsList data={data} handleModal={handleModal} />
      </main>
      <Modal
        operatorData={operatorDetails}
        isModalActive={isModalActive}
        close={closeModal}
      />
    </>
  );
}
