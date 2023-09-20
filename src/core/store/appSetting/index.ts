import {createSlice} from '@reduxjs/toolkit';

import {AppSettingProp} from '../../../../@types/store';

import {SLICE_NAME} from '../../constants/sliceName';

import {appSettingDefault} from '../initialState';

const slice = createSlice({
  name: SLICE_NAME.APP_SETTING,
  initialState: appSettingDefault as AppSettingProp,
  reducers: {
    changeAppSetting: (state, {payload: {isAppAuthSetup}}: ConfigPayload) => {
      if (typeof isAppAuthSetup !== 'undefined') {
        state.isAppAuthSetup = isAppAuthSetup;
      }
    },
  },
});

export const {changeAppSetting} = slice.actions;

export default slice.reducer;

type ConfigPayload = {
  payload: Partial<AppSettingProp>;
};
