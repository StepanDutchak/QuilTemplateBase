import {createSlice} from '@reduxjs/toolkit';
import {UserAuthProp} from '../../../../@types/store';
import {SLICE_NAME} from '../../constants/sliceName';
import {userAuthDefault} from '../initialState';

const slice = createSlice({
  name: SLICE_NAME.USER_AUTH,
  initialState: userAuthDefault as UserAuthProp,
  reducers: {
    setUserAuth: (state, action: UserPayload) => {
      const {isUserAuth, isProfileSetup} = action.payload;
      if (typeof isUserAuth !== 'undefined') {
        state.isUserAuth = isUserAuth;
      }
      if (typeof isProfileSetup !== 'undefined') {
        state.isProfileSetup = isProfileSetup;
      }
    },
  },
});

export const {setUserAuth} = slice.actions;

export default slice.reducer;

type UserPayload = {
  payload: Partial<UserAuthProp>;
};
