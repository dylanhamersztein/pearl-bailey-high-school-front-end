import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, State } from "../../redux/store";
import {
  useCreateTeacherMutation,
  useUpdateTeacherMutation,
} from "../../redux/teachers/teacherApi";
import { Button, Form } from "react-bootstrap";
import { Teacher } from "../../redux/teachers/teacherSlice";
import { hideModal } from "../../redux/app/appSlice";

type Props = {};
export const TeacherForm = (props: Props) => {
  const dispatch = useDispatch<Dispatch>();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const teacher = useSelector((state: State) => state.teachers.selectedTeacher);

  const [createTeacher] = useCreateTeacherMutation();
  const [updateTeacher] = useUpdateTeacherMutation();

  const getCreateTeacherRequest = (e: any): Omit<Teacher, "id"> => ({
    firstName: e.currentTarget.elements.firstName.value,
    middleName: e.currentTarget.elements.middleName.value,
    lastName: e.currentTarget.elements.lastName.value,
    dateOfBirth: e.currentTarget.elements.dateOfBirth.value,
  });

  const getUpdateTeacherRequest = (id: number, e: any): Partial<Teacher> => {
    const { dateOfBirth, middleName, lastName, firstName } =
      e.currentTarget.elements;

    return {
      id,
      firstName:
        teacher!!.firstName !== firstName.value ? firstName.value : undefined,
      middleName:
        teacher!!.middleName !== middleName.value
          ? middleName.value
          : undefined,
      lastName:
        teacher!!.middleName !== lastName.value ? lastName.value : undefined,
      dateOfBirth:
        teacher!!.dateOfBirth !== dateOfBirth.value
          ? dateOfBirth.value
          : undefined,
    };
  };

  const onSubmit = (e: any) => {
    e.preventDefault(); // stops page reload
    setSubmitButtonDisabled(true);

    const body = !teacher
      ? getCreateTeacherRequest(e)
      : getUpdateTeacherRequest(teacher.id, e);

    const operation: Function = !teacher ? createTeacher : updateTeacher;

    operation(body).then(() => dispatch(hideModal()));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control defaultValue={teacher?.firstName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="middleName">
        <Form.Label>Middle Name</Form.Label>
        <Form.Control defaultValue={teacher?.middleName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control defaultValue={teacher?.lastName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dateOfBirth">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" defaultValue={teacher?.dateOfBirth} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={submitButtonDisabled}>
        {teacher ? "Update" : "Create"} Teacher
      </Button>
    </Form>
  );
};
