import Operators from "../data/operators.json";
import { FilterType } from "../types/filter";
import { OperatorType } from "../types/operator";

export const filterOperators = (filter: FilterType): OperatorType[] => {
  const operatorsData = [...Operators] as OperatorType[];

  if (!filter || (filter.poste === "" && filter.unite === "")) {
    return operatorsData;
  }

  return operatorsData.filter((operator) => {
    return Object.entries(filter).every(([key, value]) => {
      const operatorValue = operator[key as keyof OperatorType];
      return value === undefined || value === "" || operatorValue === value;
    });
  });
};
