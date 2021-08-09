import { createContext } from 'react';

import { IAlertContext } from '../../types/alert';

export const AlertContext = createContext<IAlertContext>({
  isAlertOpen: null,
  alertData: null,
  showAlert: null,
  hideAlert: null,
});
