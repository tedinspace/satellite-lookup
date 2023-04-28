import { Header, Box, Text } from "grommet";
import { Deploy, Github, Home } from "grommet-icons";
import { DARK3, TED, POP2, DARK2 } from "./colors";

export function TedHead() {
  return (
    <Header
      pad="small"
      background={DARK2}
      style={{
        borderBottom: "2px solid " + DARK3,
      }}
    >
      <Box direction="row">
        <a href="http://tedsite.com">
          <Deploy size="medium" color={TED} />
        </a>
        &nbsp;&nbsp;
        <Text size="large">
          <b>
            <span style={{ color: POP2 }}>Ted</span>Site
          </b>
          <i>.com</i>
        </Text>
      </Box>
      <Box direction="row">
        <a href="http://tedsite.com">
          <Home />
        </a>
        &nbsp;&nbsp;
        <a href="https://github.com/tedinspace">
          <Github />
        </a>
      </Box>
    </Header>
  );
}
