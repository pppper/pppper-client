import { IonAlert } from '@ionic/react';
import { useState } from 'react';

import { AlertContext } from '../contexts/AlertContext';

import { IAlertData } from '../../types/alert';

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
