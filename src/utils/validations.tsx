import * as Yup from 'yup';

export const ReferHomeValidation = Yup.object().shape({
  MaleFriend: Yup.string().required('A Male friend is required!'),
  FemaleFriend: Yup.string().required('A Female friend is required'),
});
