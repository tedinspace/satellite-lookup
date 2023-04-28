import { Box, TextInput } from "grommet";
import React from "react";
import { TedHead } from "./shared/TedHead";
import axios from "axios";
import { Satdex } from ".";
import { createKeysForCache } from "../functions/util";
import { SearchAndSelect } from "./SearchAndSelect";

export interface IState {
  UCS: { [key: string]: Satdex };
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
      .get("/UCS_2023.json")
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
        <Box fill>
          <div style={{ border: "1px solid red" }}>
            <SearchAndSelect {...this.state} />
          </div>
        </Box>
      </Box>
    );
  }
}

export default Rootlayout;
export { Rootlayout };
