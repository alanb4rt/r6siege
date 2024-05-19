export default function Operator({ data, handleModal }) {
  const path = "./src/assets/images";

  return (
    <div
      key={data.id}
      onClick={() => handleModal(data.id)}
      className="card flex flex-col cursor-pointer"
    >
      <div className="relative flex flex-col items-center">
        <img src={`${path}/operators/${data.img}`} alt={data.agent} />
        <img
          className="absolute bottom-2 w-1/2"
          src={`${path}/badges/${data.badge}`}
          alt="Badge"
        />
      </div>
      <h4 className="text-center w-full p-2 bg-black uppercase">
        {data.agent}
      </h4>
    </div>
  );
}
