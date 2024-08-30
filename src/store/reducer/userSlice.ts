import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { PURGE } from 'redux-persist';

export interface UserState {
  isLogin: boolean;
  isIdleTimeout: boolean;
  dateFormat: string;
}

const initialState: UserState = {
  isLogin: false,
  isIdleTimeout: false,
  dateFormat: 'YYYY-MM-DD HH:mm:ss'
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setDateFormat: (state, action: PayloadAction<string>) => {
      state.dateFormat = action.payload;
    },
    setIsIdleTimeout: (state, action: PayloadAction<boolean>) => {
      state.isIdleTimeout = action.payload;
    }
  },

});

export const {  setDateFormat, setIsIdleTimeout, setIsLogin } =
  userSlice.actions;

export const selectIsIdleTimeout = (state: RootState) =>
  state.user.isIdleTimeout;
export const selectDateFormat = (state: RootState) =>
  state.user.dateFormat.split(' ')[0];
export const selectTimeFormat = (state: RootState) => state.user.dateFormat;
export const selectIsLogin = (state: RootState) => state.user.isLogin;

export default userSlice.reducer;
