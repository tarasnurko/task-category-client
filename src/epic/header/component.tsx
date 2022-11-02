import {
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Component: React.FC<{ title: string }> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="primary">
          <IonButton routerLink="/projects">Projects</IonButton>
          <IonButton routerLink="/create">Create</IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Component;
