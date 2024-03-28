import { useState } from "react"
import Modal from "./assets/components/Modal"
import Operator from "./assets/components/Operator"
import Poste from "./assets/components/Poste"
import Rank from "./assets/components/Rank"
import Unite from "./assets/components/Unite"
import {operators} from './assets/utils/r6s_data'

export default function App() {

  const [dataOperator, setDataOperator] = useState(operators)
  const [isModalActive, setIsModalActive] = useState(false)
  const [idOperator, setIdOperator] = useState()
  const [posteOperator, setPosteOperator] = useState("")
  const [isPosteActive, setIsPosteActive] = useState(false);


  const handleClick = (id) => {
    setIsModalActive(true)
    console.log(isModalActive)
    setIdOperator(id-1)
    console.log(id-1)
  }

  const closeModal = () => setIsModalActive(false)

  const handlePoste = (newPoste) => {
    if (!newPoste) return;
  
    setIsPosteActive(!isPosteActive);
  
    if (newPoste !== posteOperator) {
      setPosteOperator(newPoste);
      filteredOperators(newPoste);
      // setIsPosteActive(true)
    } else {
      setPosteOperator("");
      filteredOperators("");
      // setIsPosteActive(false)
    }
  };

  const filteredOperators = (postefilter) => {
    console.log("poste", postefilter)
    if (!postefilter) {
      setDataOperator(operators)
    } else {
      const filteredData = operators.filter(operator => operator.poste === postefilter);
      setDataOperator(filteredData);
    }
  } 

  return (
    <>
      <header>
        <h1>Rainbow Six : Siege<br/>Les opérateurs</h1>
      </header>
      <main className="p-8 min-w-96">
        <Rank />
        <Poste poste={handlePoste} isActive={isPosteActive} />
        {/* <Unite /> */}
        <section id="operators" className="grid grid-cols-4 gap-6 p-6">
        {dataOperator.map(item => (
          <Operator key={item.id} data={item} onClick={handleClick} />
        ))}
        </section>
      </main>
      {isModalActive && <Modal operator={operators[idOperator]} close={closeModal} />}
    </>
  )
}
