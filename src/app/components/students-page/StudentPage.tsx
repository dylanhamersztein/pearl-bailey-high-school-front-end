import { ColDef, GridOptions } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ResourcePage from "../resource-page/ResourcePage";

type Student = {
  id: number;
  firstName: string;
  middleName: string | undefined | null;
  lastName: string;
  dateOfBirth: string;
  status: string;
};

class StudentPage extends ResourcePage<Student> {
  getResourceName(): string {
    return "Student";
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
      {
        field: "status",
      },
    ];
  }

  getGridOptionsOverrides(): GridOptions {
    return {};
  }

  getRowData(): Student[] {
    return Array.from({ length: 100 }, (value, key) => key).map((it) => {
      return {
        id: it,
        firstName: `Steven ${it}`,
        middleName: `Anita ${it}`,
        lastName: `Smith ${it}`,
        dateOfBirth: "25/01/1994",
        status: "ENROLLED",
      } as Student;
    });
  }
}

export default StudentPage;
