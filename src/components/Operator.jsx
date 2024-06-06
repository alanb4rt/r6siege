import { getImageUrl } from "../utils/imageUrl";

export default function Operator({ data, handleModal }) {
  return (
    <div key={data.id} onClick={() => handleModal(data.id)} className="card">
      <div className="relative flex flex-col items-center">
        <img src={getImageUrl(`operators/${data.img}`)} alt={data.agent} />
        <img
          className="absolute bottom-2 w-1/2"
          src={getImageUrl(`badges/${data.badge}`)}
          alt="Badge"
        />
      </div>
      <p className="text-center w-full p-2 bg-black uppercase font-bold">
        {data.agent}
      </p>
    </div>
  );
}
