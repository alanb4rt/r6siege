import iconClose from "../images/icon-close.svg";

export default function Modal({ operator, isModalActive, close }) {
  const path = "./src/assets/images";

  return (
    <>
      {isModalActive && operator && (
        <div id="modal">
          <section
            className="ctn-modal"
            style={{
              backgroundImage: `url(${path}/bg-operators/bg-${operator.img})`,
            }}
          >
            <ul className="flex flex-col w-1/3 gap-2 p-4 text-sm">
              <img
                className="w-24 m-auto"
                src={`${path}/badges/${operator.badge}`}
                alt="Badge"
              />
              <li>
                Agent :<br />
                <span>{operator.agent}</span>
              </li>
              <li>
                Prénom :<br />
                <span>{operator.prenom}</span>
              </li>
              <li>
                Nom :<br />
                <span>{operator.nom}</span>
              </li>
              <li>
                Date de naissance :<br />
                <span>{operator.naissance}</span>
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
