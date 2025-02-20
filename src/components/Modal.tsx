import iconClose from "../assets/icons/icon-close.svg";
import { OperatorType } from "../types/operator";
import { getImageURL } from "../utils/getImageURL";

interface ModalProps {
  operatorData: OperatorType | null;
  isModalActive: boolean;
  close: () => void;
}

export default function Modal({ operatorData, isModalActive, close }: ModalProps) {
  return (
    <>
      {isModalActive && operatorData && (
        <div id="modal">
          <section
            className="ctn-modal"
            style={{
              backgroundImage: `url(${getImageURL(
                `bg-operators/bg-${operatorData.image}`
              )})`,
            }}
          >
            <div className="flex flex-col w-1/3 gap-2 p-4 max-lg:w-full">
              <img
                className="w-24 m-auto"
                src={getImageURL(`badges/${operatorData.badge}`)}
                alt="Badge"
              />
              <ul className="text-sm max-lg:w-1/2">
                <li>
                  Agent :<br />
                  <span>{operatorData.agent}</span>
                </li>
                <li>
                  Prénom :<br />
                  <span>{operatorData.firstName}</span>
                </li>
                <li>
                  Nom :<br />
                  <span>{operatorData.lastName}</span>
                </li>
                <li>
                  Date de naissance :<br />
                  <span>{operatorData.birth}</span>
                </li>
              </ul>
            </div>
            <img
              className="cursor-pointer absolute top-2 right-2 w-6"
              src={iconClose}
              alt="close"
              onClick={close}
            />
          </section>
        </div>
      )}
    </>
  );
}
