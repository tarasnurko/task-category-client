import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, BUTTON_TYPE } from "../../common/button";

import { ContainerVertical } from "../../common/container-vertical";
import { ErrorText } from "../../common/error-text";
import {
  PROJECT_CREATE,
  PROJECT_ITEM_DATA_SHORT,
  PROJECT_UPDATE_RESPONSE,
} from "../../data/project";
import { ProjectInput } from "../project-input";
import { ProjectTextarea } from "../project-textarea";

import {
  getProjectDataAction,
  updateProjectAction,
  deleteProejctAction,
} from "./actions";

import { IGetProjectData, IUpdateProject, IDeleteProject } from "./constants";

const Component: React.FunctionComponent = () => {
  const [values, setValues] = useState<PROJECT_CREATE>({
    name: "",
    text: "",
  });

  const { projectId } = useParams<{ projectId: string }>();
  const history = useHistory();
  const queryClient = useQueryClient();

  const {
    isLoading: dataIsLoading,
    isError: dataIsError,
    error: dataError,
  } = useQuery<PROJECT_ITEM_DATA_SHORT, AxiosError>(
    [],
    async () => await getProjectDataAction({ projectId }),
    {
      onSuccess: (data) => {
        setValues({ name: data.name, text: data.text });
      },
    }
  );

  const {
    mutate: updateProject,
    isLoading: updateIsLoading,
    isError: updateIsError,
    error: updateError,
  } = useMutation<
    PROJECT_UPDATE_RESPONSE,
    AxiosError,
    IUpdateProject,
    PROJECT_UPDATE_RESPONSE
  >(updateProjectAction, {
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      history.push("/projects");
    },
  });

  const {
    mutate: deleteProject,
    isLoading: deleteIsLoading,
    isError: deleteIsError,
    error: deleteError,
  } = useMutation<void, AxiosError, IDeleteProject, void>(deleteProejctAction, {
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      history.push("/projects");
    },
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setValues((prevValues) => ({ ...prevValues, name: e.target.value }));

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setValues((prevValues) => ({ ...prevValues, text: e.target.value }));

  const handleUpdate = () => {
    updateProject({
      projectId,
      data: { name: values.name, text: values.text },
    });
  };

  const handleDelete = () => {
    deleteProject({ projectId });
  };

  const isLoading = dataIsLoading || updateIsLoading || deleteIsLoading;

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
      <ContainerVertical>
        <Button
          btnType={BUTTON_TYPE.EDIT}
          onClick={handleUpdate}
          disabled={isLoading}
        >
          Save Project
        </Button>
        <Button
          btnType={BUTTON_TYPE.DELETE}
          onClick={handleDelete}
          disabled={isLoading}
        >
          Delete Project
        </Button>
      </ContainerVertical>
      {dataIsError && <ErrorText>{dataError.message}</ErrorText>}
      {updateIsError && <ErrorText>{updateError.message}</ErrorText>}
      {deleteIsError && <ErrorText>{deleteError.message}</ErrorText>}
    </ContainerVertical>
  );
};

export default Component;
