import { Box } from "grommet";
import React from "react";
import { TedHead } from "./shared/TedHead";
import axios from "axios";
import { SatDex } from ".";
import { createKeysForCache } from "../functions/util";

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
        count: {this.state.keys.length}
        <Box fill>
          
        </Box>
      </Box>
    );
  }
}

export default Rootlayout;
export { Rootlayout };
