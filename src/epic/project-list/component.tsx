import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";

import { ContainerVertical } from "../../common/container-vertical";
import { ErrorText } from "../../common/error-text";
import { Title } from "../../common/title";

import { PROJECT_LIST_DATA } from "../../data/project/constants";
import { ProjectListItem } from "../project-list-item";
import { getProjectListAction } from "./action";
import ProjectListSkeleton from "./frame/project-list-skeleton";

const Component: React.FC = () => {
  const { data, isLoading, isError, error } = useQuery<
    PROJECT_LIST_DATA,
    AxiosError
  >(["projects"], getProjectListAction);

  return (
    <ContainerVertical gap={8}>
      {isLoading && !isError && <ProjectListSkeleton />}

      {!isLoading && isError && <ErrorText>{error.message}</ErrorText>}

      {!isLoading &&
        !isError &&
        data?.list?.map((project) => (
          <ProjectListItem
            name={project.name}
            text={project.text}
            id={project.id}
            key={project.id}
          />
        ))}

      {!isLoading && !isError && data?.list?.length === 0 && (
        <Title size={8}>No available projects</Title>
      )}
    </ContainerVertical>
  );
};

export default Component;
