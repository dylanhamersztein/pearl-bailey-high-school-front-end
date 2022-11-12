import { ResourcePage } from "../resource-page/ResourcePage";
import { ColDef, GridOptions } from "ag-grid-community";
import { StudentForm } from "../student-form/StudentForm";
import { useGetAllStudentsQuery } from "../../redux/student/studentApi";
import {
  setSelectedStudent,
  Student,
  unsetSelectedStudent,
} from "../../redux/student/studentSlice";
import { State } from "../../redux/store";

type Props = {};

export const CoursePage = (props: Props) => {
  const columnDefs: ColDef[] = [
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

  const gridOptionsOverrides: GridOptions = {};

  return (
    <ResourcePage<Student>
      columnDefinitions={columnDefs}
      getResourceDispatch={useGetAllStudentsQuery}
      gridOptionsOverrides={gridOptionsOverrides}
      resourceFormElement={<StudentForm />}
      resourceName="Course"
      resourceSelector={({ students }: State) => students.selectedStudent}
      setResourceSelected={setSelectedStudent}
      unsetResourceSelected={unsetSelectedStudent}
    />
  );
};
