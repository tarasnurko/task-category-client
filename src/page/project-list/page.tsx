import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { ProjectList } from "../../epic/project-list";
import { Header } from "../../epic/header";
import { ContainerContent } from "../../common/container-content";

const Page: React.FC = () => {
  return (
    <IonPage>
      <Header title="Project" />
      <IonContent>
        <ContainerContent>
          <ProjectList />
        </ContainerContent>
      </IonContent>
    </IonPage>
  );
};

export default Page;
