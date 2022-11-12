import { ResourcePage } from "../resource-page/ResourcePage";
import { ColDef, GridOptions } from "ag-grid-community";
import { StudentForm } from "../student-form/StudentForm";
import { useGetAllStudentsQuery } from "../../redux/student/studentApi";
import {
  setSelectedStudent,
  unsetSelectedStudent,
} from "../../redux/student/studentSlice";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      selectResource={setSelectedStudent}
      unselectResource={unsetSelectedStudent}
      getResourceDispatch={useGetAllStudentsQuery}
      resourceName="Course"
      resourceFormElement={<StudentForm />}
      columnDefinitions={columnDefinitions}
      gridOptionsOverrides={gridOptions}
    />
  );
};
