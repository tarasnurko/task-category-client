import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, BUTTON_TYPE } from "../../common/button";

import { ContainerVertical } from "../../common/container-vertical";
import { ErrorText } from "../../common/error-text";
import { PROJECT_CREATE, PROJECT_CREATE_RESPONSE } from "../../data/project";
import { ProjectInput } from "../project-input";
import { ProjectTextarea } from "../project-textarea";
import { createProjectAction } from "./actions";

const Component: React.FunctionComponent = () => {
  const [values, setValues] = useState<PROJECT_CREATE>({
    name: "",
    text: "",
  });

  const history = useHistory();
  const queryClient = useQueryClient();

  const {
    mutate: createProject,
    isLoading,
    isError,
    error,
  } = useMutation<
    PROJECT_CREATE_RESPONSE,
    AxiosError,
    PROJECT_CREATE,
    PROJECT_CREATE_RESPONSE
  >(createProjectAction, {
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      history.push("/projects");
    },
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setValues((prevValues) => ({ ...prevValues, name: e.target.value }));

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setValues((prevValues) => ({ ...prevValues, text: e.target.value }));

  const handleSubmit = () => {
    if (values.name.trim().length > 0 && values.text.trim().length > 0) {
      createProject({ name: values.name, text: values.text });
    }
  };

  return (
    <ContainerVertical gap={8}>
      <ProjectInput
        value={values.name}
        onChange={handleName}
        disabled={isLoading}
      />
      <ProjectTextarea
        value={values.text}
        onChange={handleText}
        disabled={isLoading}
      />
      <Button
        btnType={BUTTON_TYPE.CREATE}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        Create Project
      </Button>
      {isError && <ErrorText>{error.message}</ErrorText>}
    </ContainerVertical>
  );
};

export default Component;
