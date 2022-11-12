import {
  ColDef,
  GridOptions,
  GridSizeChangedEvent,
  RowSelectedEvent,
  SelectionChangedEvent,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { Button, Stack } from "react-bootstrap";
import { ReactElement, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, State } from "../../redux/store";
import { showModal } from "../../redux/appSlice";
import { ModalDialog } from "../modal-dialog/ModalDialog";
import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

type Props<T> = {
  getResourceDispatch: UseQuery<any>;
  selectResource: ActionCreatorWithPayload<T, string>;
  unselectResource: ActionCreatorWithoutPayload<string>;
  resourceName: string;
  resourceFormElement: ReactElement<any, any>;
  columnDefinitions: ColDef[];
  gridOptionsOverrides: GridOptions;
};

export const ResourcePage = <T extends unknown>({
  columnDefinitions,
  getResourceDispatch,
  gridOptionsOverrides,
  resourceFormElement,
  resourceName,
  selectResource,
  unselectResource,
}: Props<T>) => {
  const dispatch = useDispatch<Dispatch>();

  const columnDefs: ColDef[] = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        lockPosition: "left",
        suppressMovable: true,
        maxWidth: 100,
      },
      ...columnDefinitions,
    ],
    [columnDefinitions]
  );

  const selectedStudent = useSelector(
    ({ students }: State) => students.selectedStudent
  );

  const gridOptions: GridOptions = useMemo(
    () => ({
      suppressCellFocus: true,
      suppressClickEdit: true,
      rowSelection: "single",
      onGridSizeChanged({ api }: GridSizeChangedEvent<any>) {
        api.sizeColumnsToFit();
      },
      onRowSelected({ api }: RowSelectedEvent<any>) {
        dispatch(selectResource!!(api.getSelectedRows()[0] as T));
      },
      onSelectionChanged({ api }: SelectionChangedEvent<any>) {
        dispatch(selectResource!!(api.getSelectedRows()[0] as T));
      },
      ...gridOptionsOverrides,
    }),
    [gridOptionsOverrides, dispatch, selectResource]
  );

  // @ts-ignore
  const { data } = getResourceDispatch();

  const doUnselectResource = () => {
    gridOptions.api!!.deselectAll();
    dispatch(unselectResource());
  };

  const onCreateClicked = () => {
    doUnselectResource();
    dispatch(showModal());
  };

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
            rowData={data as T[]}
          />
        </div>
        <div className="d-flex flex-row justify-content-end pb-3">
          <Button
            variant="outline-secondary"
            className="mx-2"
            disabled={!selectedStudent}
            onClick={() => dispatch(showModal())}
          >
            Update {resourceName}
          </Button>
          <Button
            variant="outline-primary"
            className="mx-2 me-5"
            onClick={onCreateClicked}
          >
            Create {resourceName}
          </Button>
        </div>
      </Stack>
      <ModalDialog
        title={(selectedStudent ? "Update " : "Create ") + resourceName}
      >
        {resourceFormElement}
      </ModalDialog>
    </>
  );
};
