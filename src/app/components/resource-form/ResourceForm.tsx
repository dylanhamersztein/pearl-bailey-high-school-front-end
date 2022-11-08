import * as React from "react";
import { Button, Form } from "react-bootstrap";
import { ReactElement } from "react";

type Props = {
  children: ReactElement<any, any> | ReactElement<any, any>[];
  mode: "CREATE" | "UPDATE";
  resourceName: string;
  onSubmit: (event: any) => void;
};

export const ResourceForm = ({
  children,
  mode,
  resourceName,
  onSubmit,
}: Props) => {
  const formatMode = () => mode[0] + mode.slice(1).toLowerCase();

  return (
    <Form onSubmit={onSubmit}>
      {children}
      <Button variant="primary" type="submit">
        {formatMode()} {resourceName}
      </Button>
    </Form>
  );
};
