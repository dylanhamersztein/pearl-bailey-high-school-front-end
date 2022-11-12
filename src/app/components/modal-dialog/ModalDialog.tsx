import * as React from "react";
import { ReactElement } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, State } from "../../redux/store";
import { hideModal } from "../../redux/app/appSlice";

type Props = {
  title: string;
  children: ReactElement<any, any> | ReactElement<any, any>[];
};

export const ModalDialog = ({ children, title }: Props) => {
  const dispatch = useDispatch<Dispatch>();

  const showModal = useSelector(({ app }: State) => app.showModal);

  return (
    <Modal centered show={showModal}>
      <Modal.Dialog className="m-0">
        <Modal.Header closeButton onHide={() => dispatch(hideModal())}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};
