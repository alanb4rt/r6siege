import { OperatorType } from "../types/operator";
import { getImageURL } from "../utils/getImageURL";

interface OperatorProps {
  data: OperatorType,
  handleModal: (id: OperatorType["id"]) => void
}

export default function Operator({ data, handleModal }: OperatorProps) {
  return (
    <div onClick={() => handleModal(data.id)} className="card">
      <div className="relative flex flex-col items-center">
        <img src={getImageURL(`operators/${data.image}`)} alt={data.agent} loading="lazy"/>
        <img
          className="absolute bottom-2 w-1/2"
          src={getImageURL(`badges/${data.badge}`)}
          alt={`${data.agent} Badge`}
          loading="lazy"
        />
      </div>
      <p className="text-center w-full p-2 bg-black uppercase font-bold">
        {data.agent}
      </p>
    </div>
  );
}
