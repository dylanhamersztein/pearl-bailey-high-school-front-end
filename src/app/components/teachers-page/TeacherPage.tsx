import { ResourcePage } from "../resource-page/ResourcePage";
import { ColDef, GridOptions } from "ag-grid-community";
import {
  setSelectedTeacher,
  Teacher,
  unsetSelectedTeacher,
} from "../../redux/teachers/teacherSlice";
import { useGetAllTeachersQuery } from "../../redux/teachers/teacherApi";
import { State } from "../../redux/store";
import { TeacherForm } from "../teacher-form/TeacherForm";

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
    <ResourcePage<Teacher>
      columnDefinitions={columnDefinitions}
      getResourceDispatch={useGetAllTeachersQuery}
      gridOptionsOverrides={gridOptions}
      resourceFormElement={<TeacherForm />}
      resourceName="Teacher"
      resourceSelector={(state: State) => state.teachers.selectedTeacher}
      setResourceSelected={setSelectedTeacher}
      unsetResourceSelected={unsetSelectedTeacher}
    />
  );
};
