import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { ContainerContent } from "../../common/container-content";
import { Header } from "../../epic/header";
import { ProjectCreate } from "../../epic/project-create";

const Page: React.FC = () => {
  return (
    <IonPage>
      <Header title="Create" />
      <IonContent>
        <ContainerContent>
          <ProjectCreate />
        </ContainerContent>
      </IonContent>
    </IonPage>
  );
};

export default Page;
