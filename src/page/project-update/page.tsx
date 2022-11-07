import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { ContainerContent } from "../../common/container-content";
import { CategoryUpdate } from "../../epic/category-update";
import { Header } from "../../epic/header";
import { ProjectUpdate } from "../../epic/project-update";

const Page: React.FC = () => {
  return (
    <IonPage>
      <Header title="Create" />
      <IonContent>
        <ContainerContent gap={20}>
          <ProjectUpdate />
          <CategoryUpdate />
        </ContainerContent>
      </IonContent>
    </IonPage>
  );
};

export default Page;
