import iconClose from "../assets/icons/icon-close.svg";
import { getImageUrl } from "../utils/imageUrl";

export default function Modal({ operatorData, isModalActive, close }) {
  return (
    <>
      {isModalActive && operatorData && (
        <div id="modal">
          <section
            className="ctn-modal"
            style={{
              backgroundImage: `url(${getImageUrl(
                `bg-operators/bg-${operatorData.img}`
              )})`,
            }}
          >
            <div className="flex flex-col w-1/3 gap-2 p-4 max-lg:w-full">
              <img
                className="w-24 m-auto"
                src={getImageUrl(`badges/${operatorData.badge}`)}
                alt="Badge"
              />
              <ul className="text-sm max-lg:w-1/2">
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
            </div>
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
