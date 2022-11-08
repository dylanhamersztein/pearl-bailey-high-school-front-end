import { ColDef, GridOptions } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { Button, Stack } from "react-bootstrap";
import React, { useMemo, useState } from "react";
import { StudentForm } from "../student-form/StudentForm";
import { ModalDialog } from "../modal-dialog/ModalDialog";

type Props = {
  resourceName: string;
  resourceLocation: string;
  columnDefinitions: ColDef[];
  gridOptionsOverrides: GridOptions;
};

export const ResourcePage = (props: Props) => {
  const columnDefs: ColDef[] = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        lockPosition: "left",
        suppressMovable: true,
        maxWidth: 100,
      },
      ...props.columnDefinitions.filter((colDef) => colDef.field !== "id"),
    ],
    [props.columnDefinitions]
  );

  const gridOptions: GridOptions = useMemo(
    () => ({
      onGridSizeChanged: () => gridOptions?.api?.sizeColumnsToFit(),
      ...props.gridOptionsOverrides,
    }),
    [props.gridOptionsOverrides]
  );

  const [rowData, setRowData] = useState([]);

  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   fetch(props.resourceLocation)
  //     .then((res) => res.json())
  //     .then((resources) => setRowData(resources));
  // });

  return (
    <>
      <Stack gap={3}>
        <div
          className="ag-theme-alpine"
          style={{ height: "100%", width: "100%" }}
        >
          <AgGridReact
            gridOptions={gridOptions}
            columnDefs={columnDefs}
            rowData={rowData}
          />
        </div>
        <div className="d-flex flex-row justify-content-end pb-3">
          <Button variant="outline-secondary" className="mx-2">
            Update {props.resourceName}
          </Button>
          <Button
            variant="outline-primary"
            className="mx-2 me-5"
            onClick={() => setShowModal(true)}
          >
            Create {props.resourceName}
          </Button>
        </div>
      </Stack>
      <ModalDialog
        title="Create Student"
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <StudentForm mode="CREATE" />
      </ModalDialog>
    </>
  );
};
