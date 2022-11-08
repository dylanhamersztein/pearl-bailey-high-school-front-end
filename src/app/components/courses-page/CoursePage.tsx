import { ResourcePage } from "../resource-page/ResourcePage";
import { ColDef, GridOptions } from "ag-grid-community";

type Course = {
  id: number;
  name: string;
  teacherId: number;
  departmentId: number;
  description: string;
  courseStatus: string;
};

type Props = {};

export const CoursePage = (props: Props) => {
  const columnDefinitions: ColDef[] = [
    {
      field: "name",
    },
    {
      field: "teacherId",
      headerName: "Teacher ID",
    },
    {
      field: "departmentId",
      headerName: "Department ID",
    },
    {
      field: "description",
    },
    {
      field: "courseStatus",
    },
  ];

  const gridOptions: GridOptions = {};

  return (
    <ResourcePage
      resourceName="Course"
      resourceLocation="https://localhost:8080/courses"
      columnDefinitions={columnDefinitions}
      gridOptionsOverrides={gridOptions}
    />
  );
};
