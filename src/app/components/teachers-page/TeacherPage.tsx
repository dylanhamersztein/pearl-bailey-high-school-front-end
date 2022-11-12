import { ResourcePage } from "../resource-page/ResourcePage";
import { ColDef, GridOptions } from "ag-grid-community";
import { StudentForm } from "../student-form/StudentForm";
import { useGetAllStudentsQuery } from "../../redux/student/studentApi";
import {
  setSelectedStudent,
  unsetSelectedStudent,
} from "../../redux/student/studentSlice";

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
      selectResource={setSelectedStudent}
      unselectResource={unsetSelectedStudent}
      getResourceDispatch={useGetAllStudentsQuery}
      resourceName="Teacher"
      resourceFormElement={<StudentForm />}
      columnDefinitions={columnDefinitions}
      gridOptionsOverrides={gridOptions}
    />
  );
};
