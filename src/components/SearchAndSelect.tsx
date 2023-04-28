import React from "react";
import { Box, TextInput } from "grommet";
import { Satdex } from ".";

interface IProps {
  UCS: { [key: string]: Satdex };
  keys: string[];
}

export const SearchAndSelect = (props: IProps) => {
  const [value, setValue] = React.useState("");
  const onChange = (event: any) => setValue(event.target.value);
  const onSelect = (event: any) => setValue(event.suggestion);

  return (
    <TextInput
      value={value}
      onChange={onChange}
      onSelect={onSelect}
      suggestions={props.keys}
      defaultSuggestion={1}
      aria-label="Input Text"
    />
  );
};
