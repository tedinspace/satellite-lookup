import { SatDex } from "../components";
import _ from "lodash";
export const createKeysForCache = (UCS: {
  [key: string]: SatDex;
}): string[] => {
  return _.keys(UCS).sort();
};

export const topLevelDiv = (UCS: { [key: string]: SatDex }) => {
  let types:Set<string> = new Set<string>();
  let topLevel:{[key:string]:{
    count:number;
    items:SatDex[]
  }} = {}

  _.forEach(UCS,(v:SatDex)=>{
    let type: string|undefined = v.info?.type;
    if(type!==undefined){
      if(topLevel[type]===undefined){
        types.add(type);
        topLevel[type] = {
          count:1,
          items:[v]
        };
      }else{
        topLevel[type].count = topLevel[type].count+1;
        topLevel[type].items.push(v)
      }
    }
  })
  console.log(topLevel)
  console.log(types)
  types.forEach(type => {
    console.log(topLevel[type])
  });
  
};
