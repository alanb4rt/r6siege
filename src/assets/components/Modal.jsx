import iconClose from "../images/icon-close.svg";

export default function Modal({ operatorData, isModalActive, close }) {
  const path = "./src/assets/images";

  return (
    <>
      {isModalActive && operatorData && (
        <div id="modal">
          <section
            className="ctn-modal"
            style={{
              backgroundImage: `url(${path}/bg-operators/bg-${operatorData.img})`,
            }}
          >
            <ul className="flex flex-col w-1/3 gap-2 p-4 text-sm">
              <img
                className="w-24 m-auto"
                src={`${path}/badges/${operatorData.badge}`}
                alt="Badge"
              />
              <li>
                Agent :<br />
                <span>{operatorData.agent}</span>
              </li>
              <li>
                Prénom :<br />
                <span>{operatorData.prenom}</span>
              </li>
              <li>
                Nom :<br />
                <span>{operatorData.nom}</span>
              </li>
              <li>
                Date de naissance :<br />
                <span>{operatorData.naissance}</span>
              </li>
            </ul>
            <img
              className="cursor-pointer absolute top-2 right-2 w-6"
              src={iconClose}
              alt="fermer"
              onClick={close}
            />
          </section>
        </div>
      )}
    </>
  );
}
