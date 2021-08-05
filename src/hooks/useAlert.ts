import { useContext } from 'react';
import { IAlertContext } from '../types/alert';
import { AlertContext } from '../contexts/AlertContext';

export const useAlert = (): IAlertContext => {
  const { isAlertOpen, alertData, showAlert, hideAlert } =
    useContext(AlertContext);
  return { isAlertOpen, alertData, showAlert, hideAlert };
};
