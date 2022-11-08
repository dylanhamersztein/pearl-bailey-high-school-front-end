import * as React from "react";
import { ReactElement } from "react";
import { Modal } from "react-bootstrap";

type Props = {
  show: boolean;
  title: string;
  onHide: () => void;
  children: ReactElement<any, any> | ReactElement<any, any>[];
};
export const ModalDialog = ({ children, show, title, onHide }: Props) => {
  return (
    <Modal centered show={show}>
      <Modal.Dialog className="m-0">
        <Modal.Header closeButton onHide={onHide}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};
