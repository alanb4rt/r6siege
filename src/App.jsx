import { useEffect, useState } from "react";
import Rank from "./assets/components/Rank";
import Poste from "./assets/components/Poste";
import Unite from "./assets/components/Unite";
import OperatorsList from "./assets/components/OperatorsList";
import Modal from "./assets/components/Modal";
import { operators } from "./assets/utils/r6s_data";

export default function App() {
  const [data, setData] = useState(operators);
  const [isModalActive, setIsModalActive] = useState(false);
  const [operatorId, setOperatorId] = useState();
  const [posteOperator, setPosteOperator] = useState("");
  const [isPosteActive, setIsPosteActive] = useState(false);
  useEffect(() => {
    console.log("effet");
  }, [posteOperator]);

  const handleClick = (id) => {
    setIsModalActive(true);
    setOperatorId(id - 1);
    console.log(id - 1);
  };

  const closeModal = () => setIsModalActive(false);

  const handlePoste = (newPoste) => {
    if (!newPoste) return;
    setIsPosteActive(!isPosteActive);

    if (newPoste !== posteOperator) {
      setPosteOperator(newPoste);
      filteredOperators(newPoste); // setIsPosteActive(true)
    } else {
      setPosteOperator("");
      filteredOperators(""); // setIsPosteActive(false)
    }
  };

  const filteredOperators = (postefilter) => {
    console.log("poste", postefilter);

    if (!postefilter) {
      setData(operators);
    } else {
      const filteredData = operators.filter(
        (operator) => operator.poste === postefilter
      );
      setData(filteredData);
    }
  };

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
        <Poste poste={handlePoste} isActive={isPosteActive} />
        {/* <Unite /> */}
        <OperatorsList data={data} handleClick={handleClick} />
      </main>
      <Modal
        operator={operators[operatorId]}
        isModalActive={isModalActive}
        close={closeModal}
      />
    </>
  );
}
