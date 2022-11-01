import React, { Component } from "react";
import { ColDef, GridOptions } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { Button, Stack } from "react-bootstrap";

abstract class ResourcePage<T> extends Component {
  abstract getResourceName(): string;

  abstract getRowData(): T[];

  abstract getColumnDefinitions(): ColDef[];

  abstract getGridOptionsOverrides(): GridOptions;

  gridOptions: GridOptions = {
    columnDefs: [
      {
        field: "id",
        headerName: "ID",
        lockPosition: "left",
        suppressMovable: true,
        maxWidth: 100,
      },
      ...this.getColumnDefinitions(),
    ],
    onGridSizeChanged: () => this.gridOptions?.api?.sizeColumnsToFit(),
    ...this.getGridOptionsOverrides(),
  };

  render() {
    return (
      <Stack gap={3}>
        <div
          className="ag-theme-alpine"
          style={{ height: "100%", width: "100%" }}
        >
          <AgGridReact
            gridOptions={this.gridOptions}
            rowData={this.getRowData()}
          />
        </div>
        <div className="d-flex flex-row justify-content-end pb-3">
          <Button variant="outline-secondary" className="mx-2">
            Update {this.getResourceName()}
          </Button>
          <Button variant="outline-primary" className="mx-2 me-5">
            Create {this.getResourceName()}
          </Button>
        </div>
      </Stack>
    );
  }
}

export default ResourcePage;
