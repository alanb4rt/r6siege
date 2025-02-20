import { OperatorType } from "../types/operator";
import Operator from "./Operator";

interface OperatorListProps {
  data: OperatorType[],
  handleModal: (id: OperatorType["id"]) => void
}

export default function OperatorsList({ data, handleModal }: OperatorListProps) {
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
