type UserProviderProps = {
  getUserId: string;
};

type sendFacebookTokens = {
  facebookAccessToken: string;
  firebaseIdToken: string;
};

type SubmissionPromptProps = {
  title: string;
  description: string;
  open: boolean;
  onClose: () => void;
  processRequest: () => void;
  positiveTitle: string;
};

type ReferValues = {
  FemaleFriend: 'string' | '';
  MaleFriend: 'string' | '';
};
