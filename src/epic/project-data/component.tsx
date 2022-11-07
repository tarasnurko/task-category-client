import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";
import { useParams } from "react-router";
import { Button, BUTTON_TYPE } from "../../common/button";

import { ContainerVertical } from "../../common/container-vertical";
import { ErrorText } from "../../common/error-text";
import { LinkWrapper } from "../../common/link-wrapper";

import { Text } from "../../common/text";
import { Title } from "../../common/title";
import { PROJECT_ITEM_DATA } from "../../data/project";
import { CategoryList } from "../category-list";
import { getProjectDataAction } from "./actions";
import { IGetProjectData } from "./constants";
import ProjectDataSkeleton from "./frame/project-data-skeleton";

const Component: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const { data, isLoading, isError, error } = useQuery<
    PROJECT_ITEM_DATA,
    AxiosError
  >(
    ["projects", "categories"],
    async () => await getProjectDataAction({ projectId })
  );

  return (
    <ContainerVertical gap={8}>
      {isLoading && !isError && <ProjectDataSkeleton />}

      {!isLoading && isError && <ErrorText>{error.message}</ErrorText>}

      {!isLoading && !isError && data && (
        <React.Fragment>
          <Title size={8}>{data.name}</Title>
          <Text size={6}>{data.text}</Text>
          {data?.categories?.length > 0 && (
            <CategoryList list={data.categories} />
          )}
          <LinkWrapper to={`/projects/${projectId}/edit`}>
            <Button btnType={BUTTON_TYPE.UPDATE}>Update</Button>
          </LinkWrapper>
        </React.Fragment>
      )}
    </ContainerVertical>
  );
};

export default Component;
