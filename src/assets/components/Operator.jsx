export default function Operator({ data, handleModal }) {
  const path = "./src/assets/images";

  return (
    <div
      key={data.id}
      onClick={() => handleModal(data.id)}
      className="card flex flex-col cursor-pointer hover:scale-110 transition-all"
    >
      <div className="relative flex flex-col items-center">
        <img src={`${path}/operators/${data.img}`} alt={data.agent} />
        <img
          className="absolute bottom-2 w-1/2"
          src={`${path}/badges/${data.badge}`}
          alt="Badge"
        />
      </div>
      <p className="text-center w-full p-2 bg-black uppercase font-bold">
        {data.agent}
      </p>
    </div>
  );
}
