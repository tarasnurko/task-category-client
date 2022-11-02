import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { ContainerContent } from "../../common/container-content";
import { CategoryEdit } from "../../epic/category-edit";
import { Header } from "../../epic/header";
import { ProjectEdit } from "../../epic/project-edit";

const Page: React.FC = () => {
  return (
    <IonPage>
      <Header title="Create" />
      <IonContent>
        <ContainerContent gap={20}>
          <ProjectEdit />
          <CategoryEdit />
        </ContainerContent>
      </IonContent>
    </IonPage>
  );
};

export default Page;
