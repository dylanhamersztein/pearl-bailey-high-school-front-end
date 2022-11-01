import ResourcePage from "../resource-page/ResourcePage";
import { ColDef, GridOptions } from "ag-grid-community";

type Course = {
  id: number;
  name: string;
  teacherId: number;
  departmentId: number;
  description: string;
  courseStatus: string;
};

class CoursePage extends ResourcePage<Course> {
  getResourceName(): string {
    return "Course";
  }

  getColumnDefinitions(): ColDef[] {
    return [
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
  }

  getGridOptionsOverrides(): GridOptions {
    return {};
  }

  getRowData(): Course[] {
    return Array.from({ length: 100 }, (value, key) => key).map((it) => {
      return {
        id: it,
        name: "Computer Science",
        teacherId: 1,
        departmentId: 2,
        description: "Learn Computer Science at Pearl Bailey High School",
        courseStatus: "PLANNED",
      } as Course;
    });
  }
}

export default CoursePage;
