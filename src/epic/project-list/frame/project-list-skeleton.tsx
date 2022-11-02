import React from "react";
import { ContainerVertical } from "../../../common/container-vertical";
import { SkeletonText } from "../../../common/skeleton-text";
import { SkeletonTitle } from "../../../common/skeleton-title";

const ProjectListSkeleton: React.FC = () => {
  return (
    <>
      <ContainerVertical gap={3}>
        <SkeletonTitle />
        <SkeletonText />
      </ContainerVertical>
      <ContainerVertical gap={3}>
        <SkeletonTitle />
        <SkeletonText />
      </ContainerVertical>
      <ContainerVertical gap={3}>
        <SkeletonTitle />
        <SkeletonText />
      </ContainerVertical>
    </>
  );
};

export default ProjectListSkeleton;
