import { ResourcePage } from "../resource-page/ResourcePage";
import { ColDef, GridOptions } from "ag-grid-community";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Teacher = {
  id: number;
  firstName: string;
  middleName: string | undefined | null;
  lastName: string;
  dateOfBirth: string;
};

type Props = {};

export const TeacherPage = (props: Props) => {
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
  ];

  const gridOptions: GridOptions = {};

  return (
    <ResourcePage
      resourceName="Teacher"
      resourceLocation="https://localhost:8080/teachers"
      columnDefinitions={columnDefinitions}
      gridOptionsOverrides={gridOptions}
    />
  );
};
