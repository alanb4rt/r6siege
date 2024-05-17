import Operator from "./Operator";

export default function OperatorsList({ data, handleModal }) {
  return (
    <section id="operators" className="grid grid-cols-4 gap-6 p-6">
      {data.map((item) => (
        <Operator key={item.id} data={item} handleModal={handleModal} />
      ))}
    </section>
  );
}
