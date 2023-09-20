import {UserAuthProp} from '../../../../@types/store';

export const userAuthSelector = (state: {userAuth: UserAuthProp}) =>
  state.userAuth;
