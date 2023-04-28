import { Satdex } from "../components";
import _ from "lodash";
export const createKeysForCache = (UCS: {
  [key: string]: Satdex;
}): string[] => {
  return _.keys(UCS).sort();
};
