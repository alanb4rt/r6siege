import Operator from "./assets/components/Operator"
import Poste from "./assets/components/Poste"
import Rank from "./assets/components/Rank"
import Unite from "./assets/components/Unite"

export default function App() {

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
          <Operator />
        </section>
      </main>
    </>
  )
}
