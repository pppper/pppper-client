import { IonAlert } from '@ionic/react';
import { createContext, useContext, useState } from 'react';

interface IAlertData {
  header: string;
  subtitle: string | null;
  message: string | null;
  buttons: string[];
}

export interface IAlertContext {
  isAlertOpen: boolean;
  alertData: IAlertData;
  showAlert: (IAlertData) => void;
  hideAlert: () => void;
}

export const AlertContext = createContext<IAlertContext>({
  isAlertOpen: null,
  alertData: null,
  showAlert: null,
  hideAlert: null,
});

export const AlertContextProvider = ({ children }) => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [alertData, setAlertData] = useState<IAlertData>();

  const showAlert = (data: IAlertData) => {
    setAlertData(data);
    setIsAlertOpen(true);
  };

  const hideAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <AlertContext.Provider
      value={{
        isAlertOpen,
        alertData,
        showAlert,
        hideAlert,
      }}
    >
      {children}
      <IonAlert
        isOpen={isAlertOpen}
        onDidDismiss={hideAlert}
        header={alertData?.header}
        subHeader={alertData?.subtitle}
        message={alertData?.message}
        buttons={alertData?.buttons}
      ></IonAlert>
    </AlertContext.Provider>
  );
};

export const useAlert = (): IAlertContext => {
  const { isAlertOpen, alertData, showAlert, hideAlert } =
    useContext(AlertContext);
  return { isAlertOpen, alertData, showAlert, hideAlert };
};
