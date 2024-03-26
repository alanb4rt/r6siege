import Poste from "./assets/components/Poste"
import Rank from "./assets/components/Rank"

export default function App() {

  return (
    <>
      <header>
        <h1>Rainbow Six : Siege<br/>Les opérateurs</h1>
      </header>
      <main className="p-8 min-w-96">
        <Rank />
        <Poste />
      </main>
    </>
  )
}
