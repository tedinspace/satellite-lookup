import { SatDex } from "..";

export interface ITableRow {
  name?: string;
  number?: string;
  orbitClass?: string;
  orbitType?:  string;
  type?: string;
}

export const buildRows = (data: SatDex[]): ITableRow[] => {
    let oclass = new Set();
    let tclass = new Set();
    let type = new Set();

  let row: ITableRow[] = [];
  data.forEach((dexItem) => {
    row.push({
      name: dexItem.name,
      number: dexItem.number,
      orbitClass: dexItem.orbit?.orbitClass,
      orbitType: dexItem.orbit?.orbitType,
      type: dexItem.info?.type
    });

    oclass.add(dexItem.orbit?.orbitClass)
    tclass.add(dexItem.orbit?.orbitType)
    type.add(dexItem.info?.type)
  });
  console.log(oclass)
  console.log(tclass)
  console.log(type)
  return row;
};

