export interface IAlertData {
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
