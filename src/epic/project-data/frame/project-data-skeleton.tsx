import React from "react";
import { ContainerHorizontal } from "../../../common/container-horizontal";
import { SkeletonBlock } from "../../../common/skeleton-block";
import { SkeletonText } from "../../../common/skeleton-text";
import { SkeletonTitle } from "../../../common/skeleton-title";

const ProjectDataSkeleton: React.FC = () => {
  return (
    <>
      <SkeletonTitle height={8} />
      <SkeletonText height={18} />
      <ContainerHorizontal>
        <SkeletonBlock width={12} height={7} />
        <SkeletonBlock width={12} height={7} />
        <SkeletonBlock width={12} height={7} />
      </ContainerHorizontal>
    </>
  );
};

export default ProjectDataSkeleton;
