import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { ContainerContent } from "../../common/container-content";
import { Header } from "../../epic/header";
import { ProjectData } from "../../epic/project-data";

const Page: React.FC = () => {
  return (
    <IonPage>
      <Header title="Project" />
      <IonContent>
        <ContainerContent>
          <ProjectData />
        </ContainerContent>
      </IonContent>
    </IonPage>
  );
};

export default Page;
