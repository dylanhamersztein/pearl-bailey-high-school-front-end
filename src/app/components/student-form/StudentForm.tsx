import * as React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Student } from "../students-page/StudentPage";

type Props = {
  mode: "CREATE" | "UPDATE";
  student?: Student;
};
export const StudentForm = (props: Props) => {
  const formattedMode = props.mode[0] + props.mode.slice(1).toLowerCase();

  const [student, setStudent] = useState<Student>(
    props.student || ({} as Student)
  );

  const onSubmit = (e: any) => {
    e.preventDefault(); // stops page reload

    const student: Student = {
      firstName: e.currentTarget.elements.firstName.value,
      middleName: e.currentTarget.elements.middleName.value,
      lastName: e.currentTarget.elements.lastName.value,
      dateOfBirth: e.currentTarget.elements.dateOfBirth.value,
      status: e.currentTarget.elements.status.value,
    };

    console.log(e.currentTarget.checkValidity());
    console.log(student);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          required
          placeholder={(props.mode === "UPDATE" && student.firstName) || ""}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="middleName">
        <Form.Label>Middle Name</Form.Label>
        <Form.Control
          required
          placeholder={(props.mode === "UPDATE" && student.middleName) || ""}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          required
          placeholder={(props.mode === "UPDATE" && student.lastName) || ""}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dateOfBirth">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          required
          placeholder={(props.mode === "UPDATE" && student.dateOfBirth) || ""}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="status">
        <Form.Label>Student Status</Form.Label>
        <Form.Select
          required
          defaultValue={
            (props.mode === "UPDATE" && student.status) || undefined
          }
        >
          {[
            "PROSPECT",
            "ENROLLED",
            "GRADUATED",
            "SUSPENDED",
            "EXPELLED",
            "DECEASED",
          ].map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        {formattedMode} Students
      </Button>
    </Form>
  );
};
