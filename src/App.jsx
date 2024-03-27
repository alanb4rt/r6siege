import { useState } from "react"
import Modal from "./assets/components/Modal"
import Operator from "./assets/components/Operator"
import Poste from "./assets/components/Poste"
import Rank from "./assets/components/Rank"
import Unite from "./assets/components/Unite"
import {operators} from './assets/utils/r6s_data'

export default function App() {

  const [isModalActive, setIsModalActive] = useState(false)
  const [idOperator, setIdOperator] = useState()

  const handleClick = (id) => {
    setIsModalActive(true)
    console.log(isModalActive)
    setIdOperator(id-1)
    console.log(id-1)
  }

  const closeModal = () => setIsModalActive(false)

  return (
    <>
      <header>
        <h1>Rainbow Six : Siege<br/>Les opérateurs</h1>
      </header>
      <main className="p-8 min-w-96">
        <Rank />
        <Poste />
        <Unite />
        <section id="operators" className="grid grid-cols-4 gap-6 p-6">
          <Operator onClick={handleClick} />
        </section>
      </main>
      {isModalActive && <Modal operator={operators[idOperator]} close={closeModal} />}
    </>
  )
}
