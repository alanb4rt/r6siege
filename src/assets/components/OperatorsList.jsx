import Operator from "./Operator";

export default function OperatorsList({ data, handleModal }) {
  return (
    <section
      id="operators"
      className="grid justify-around grow w-full gap-6 p-6"
    >
      {data.map((item) => (
        <Operator key={item.id} data={item} handleModal={handleModal} />
      ))}
    </section>
  );
}
