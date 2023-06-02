import { Box } from "grommet";
import React from "react";
import { TedHead } from "./shared/TedHead";
import axios from "axios";
import { SatDex } from ".";
import { createKeysForCache, topLevelDiv } from "../functions/util";
import { SatTable } from "./table/SatTable";
import _ from "lodash";
import { buildRows } from "./table";

export interface IState {
  UCS: { [key: string]: SatDex };
  keys: string[];
}

interface IProps {}
class Rootlayout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      UCS: {},
      keys: [],
    };
  }

  componentDidMount(): void {
    axios
      .get("/satcat_2023.json")
      .then((d) => {
        topLevelDiv(d.data)
        this.setState({
          UCS: d.data,
          keys: createKeysForCache(d.data),
        });
      })
      .catch((e) => {});
  }

  render() {
    return (
      <Box fill>
        <TedHead />
        <Box
          fill="horizontal"
          style={{ height: "100px", border: "1px solid red" }}
        >
          cat metrics here
        </Box>
        <Box fill direction="row">
          <Box fill>
            <SatTable
              data={buildRows(_.values(this.state.UCS))}
            />
          </Box>
          <Box fill>x</Box>
        </Box>
      </Box>
    );
  }
}

export default Rootlayout;
export { Rootlayout };
