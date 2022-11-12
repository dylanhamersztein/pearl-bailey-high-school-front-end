import { ColDef, GridOptions } from "ag-grid-community";
import { useMemo } from "react";
import { StudentForm } from "../student-form/StudentForm";
import { useGetAllStudentsQuery } from "../../redux/student/studentApi";
import { ResourcePage } from "../resource-page/ResourcePage";
import {
  setSelectedStudent,
  Student,
  unsetSelectedStudent,
} from "../../redux/student/studentSlice";

type Props = {};

export const StudentPage = (props: Props) => {
  const columnDefs: ColDef[] = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        lockPosition: "left",
        suppressMovable: true,
        maxWidth: 100,
      },
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
    ],
    []
  );

  const gridOptionsOverrides: GridOptions = useMemo(() => ({}), []);

  return (
    <ResourcePage<Student>
      resourceName="Student"
      columnDefinitions={columnDefs}
      resourceFormElement={<StudentForm />}
      getResourceDispatch={useGetAllStudentsQuery}
      gridOptionsOverrides={gridOptionsOverrides}
      selectResource={setSelectedStudent}
      unselectResource={unsetSelectedStudent}
    />
  );
};
