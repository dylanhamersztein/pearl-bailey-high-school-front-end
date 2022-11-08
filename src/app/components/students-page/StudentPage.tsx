import { ResourcePage } from "../resource-page/ResourcePage";
import { ColDef, GridOptions } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export type Student = {
  id?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  dateOfBirth?: string;
  status?: string;
};

type Props = {};

export const StudentPage = (props: Props) => {
  const columnDefinitions: ColDef[] = [
    {
      field: "firstName",
    },
    {
      field: "middleName",
    },
    {
      field: "lastName",
    },
    {
      field: "dateOfBirth",
    },
    {
      field: "status",
    },
  ];

  const gridOptions: GridOptions = {};

  return (
    <ResourcePage
      resourceName="Student"
      resourceLocation="https://localhost:8080/students"
      columnDefinitions={columnDefinitions}
      gridOptionsOverrides={gridOptions}
    />
  );
};
