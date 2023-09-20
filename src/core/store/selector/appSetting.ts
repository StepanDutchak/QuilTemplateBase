import {AppSettingProp} from '../../../../@types/store';

export const appSettingSelector = (state: {appSetting: AppSettingProp}) =>
  state.appSetting;
