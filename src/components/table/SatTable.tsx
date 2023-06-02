import { DataTable, Text } from "grommet";
import { SatDex } from "..";
import { ITableRow } from ".";
import { useState } from "react";

interface IProps {
  data: ITableRow[];
}

export function SatTable(props: IProps) {
  const [sort, setSort] = useState<any>(undefined);
  return (
    <DataTable
      columns={columns}
      data={props.data}
      step={10}
      onClickRow={(event) => {
        //setClicked(event.datum);
      }}
      onSort={setSort}  
      sort={sort}
    
    />
  );
}

const columns = [
  {
    property: "number",
    header: <Text>NORAD</Text>,
    primary: true,
    sortable: true,
    search: true,
  },
  {
    property: "name",
    header: <Text>Satellite Name</Text>,
    primary: true,
    sortable: true,
    search: true,
  },
  {
    property: "type",
    header: <Text>Type</Text>,
    primary: true,
    sortable: true,
    search: true,
  },
  {
    property: "orbitClass",
    header: <Text>Regime</Text>,
    primary: true,
    sortable: true,
    search: true,
  },
  {
    property: "orbitType",
    header: <Text>Orbit Type</Text>,
    primary: true,
    sortable: true,
    search: true,
  },
];
