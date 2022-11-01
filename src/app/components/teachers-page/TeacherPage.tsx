import ResourcePage from "../resource-page/ResourcePage";
import { ColDef, GridOptions } from "ag-grid-community";

type Teacher = {
  id: number;
  firstName: string;
  middleName: string | undefined | null;
  lastName: string;
  dateOfBirth: string;
};

class TeacherPage extends ResourcePage<Teacher> {
  getResourceName(): string {
    return "Teacher";
  }

  getColumnDefinitions(): ColDef[] {
    return [
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
  }

  getGridOptionsOverrides(): GridOptions {
    return {};
  }

  getRowData(): Teacher[] {
    return Array.from({ length: 100 }, (value, key) => key).map((it) => {
      return {
        id: it,
        firstName: `Steven ${it}`,
        middleName: `Anita ${it}`,
        lastName: `Smith ${it}`,
        dateOfBirth: "25/01/1994",
      } as Teacher;
    });
  }
}

export default TeacherPage;
