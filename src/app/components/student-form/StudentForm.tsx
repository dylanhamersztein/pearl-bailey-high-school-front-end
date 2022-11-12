import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateStudentMutation,
  useUpdateStudentMutation,
} from "../../redux/student/studentApi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, State } from "../../redux/store";
import { hideModal } from "../../redux/app/appSlice";
import { Student } from "../../redux/student/studentSlice";

type Props = {};
export const StudentForm = (props: Props) => {
  const dispatch = useDispatch<Dispatch>();

  const student = useSelector((state: State) => state.students.selectedStudent);

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [createStudent] = useCreateStudentMutation();

  const [updateStudent] = useUpdateStudentMutation();

  const onSubmit = (e: any) => {
    e.preventDefault(); // stops page reload
    setSubmitButtonDisabled(true);

    const body: Omit<Student, "id"> | Partial<Student> = !student
      ? getCreateStudent(e)
      : patchStudent(e, student.id);

    const operation: Function = !student ? createStudent : updateStudent;

    operation(body).then(() => dispatch(hideModal()));
  };

  const patchStudent = (e: any, id: number) => {
    const { dateOfBirth, status, middleName, lastName, firstName } =
      e.currentTarget.elements;

    return {
      id,
      firstName:
        student!!.firstName !== firstName.value ? firstName.value : undefined,
      middleName:
        student!!.middleName !== middleName.value
          ? middleName.value
          : undefined,
      lastName:
        student!!.middleName !== lastName.value ? lastName.value : undefined,
      dateOfBirth:
        student!!.dateOfBirth !== dateOfBirth.value
          ? dateOfBirth.value
          : undefined,
      status: student!!.status !== status.value ? status.value : undefined,
    };
  };

  const getCreateStudent = (e: any) => ({
    firstName: e.currentTarget.elements.firstName.value,
    middleName: e.currentTarget.elements.middleName.value,
    lastName: e.currentTarget.elements.lastName.value,
    dateOfBirth: e.currentTarget.elements.dateOfBirth.value,
    status: e.currentTarget.elements.status.value,
  });

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control required defaultValue={student?.firstName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="middleName">
        <Form.Label>Middle Name</Form.Label>
        <Form.Control required defaultValue={student?.middleName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control required defaultValue={student?.lastName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dateOfBirth">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          required
          defaultValue={student?.dateOfBirth}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="status">
        <Form.Label>Student Status</Form.Label>
        <Form.Select required defaultValue={student?.status}>
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
      <Button variant="primary" type="submit" disabled={submitButtonDisabled}>
        {student ? "Update" : "Create"} Student
      </Button>
    </Form>
  );
};
