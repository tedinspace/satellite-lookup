import { SatDex } from "../components";
import _ from "lodash";
export const createKeysForCache = (UCS: {
  [key: string]: SatDex;
}): string[] => {
  return _.keys(UCS).sort();
};
