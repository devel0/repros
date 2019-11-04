import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import { useWindowSize } from "./Util";

const columns: any = [];

const COLS = 20;
const ROWS = 1000;

for (let ci = 0; ci < COLS; ++ci) {
  columns.push({ key: "field" + ci, name: "col" + ci, editable: true });
}

const brows: any = [];

for (let ri = 0; ri < ROWS; ++ri) {
  const obj: any = { id: ri };
  for (let ci = 0; ci < COLS; ++ci) {
    obj["field" + ci] = ri + "_" + ci;
  }
  brows.push(obj);
}

export default function App() {
  const [rrows, setRows] = useState<any[]>(brows);
  const size = useWindowSize();

  const onGridRowsUpdated = (x: ReactDataGrid.GridRowsUpdatedEvent<any>) => {

    const rows = rrows.slice();
    for (let i = x.fromRow; i <= x.toRow; i++) {
      rows[i] = { ...rows[i], ...x.updated };
    }

    setRows(rows);
  };

  return <div>    
    <ReactDataGrid
      minWidth={size.width! - 50}
      minHeight={size.height! - 50}
      columns={columns}
      rowGetter={i => rrows[i]}
      rowsCount={rrows.length}
      onGridRowsUpdated={(x) => onGridRowsUpdated(x)}
      enableCellSelect={true}
    />
  </div>
}
