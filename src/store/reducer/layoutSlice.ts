import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import type { LayoutModeType } from '@/layouts/default';

export interface LayoutState {
  layoutMode: LayoutModeType;
  collapsed: boolean;
  isDarkMode: boolean;
  themeColor: string;
  isOpenSetting: boolean;
  isFixedWidth: boolean;
  isFixedHeader: boolean;
}

const initialState: LayoutState = {
  layoutMode: 'sidemenu',
  collapsed: false,
  isDarkMode: false,
  themeColor: '#00b96b',
  isOpenSetting: false,
  isFixedWidth: false,
  isFixedHeader: true
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setLayoutMode: (state, action: PayloadAction<LayoutModeType>) => {
      state.layoutMode = action.payload;
    },
    setCollapsed: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
    setThemeColor: (state, action: PayloadAction<string>) => {
      state.themeColor = action.payload;
    },
    setIsOpenSetting: (state, action: PayloadAction<boolean>) => {
      state.isOpenSetting = action.payload;
    },
    setIsFixedWidth: (state, action: PayloadAction<boolean>) => {
      state.isFixedWidth = action.payload;
    },
    setIsFixedHeader: (state, action: PayloadAction<boolean>) => {
      state.isFixedHeader = action.payload;
    }
  }
});

export const {
  setLayoutMode,
  setCollapsed,
  setDarkMode,
  setThemeColor,
  setIsOpenSetting,
  setIsFixedWidth,
  setIsFixedHeader
} = layoutSlice.actions;

export const selectLayoutMode = (state: RootState) => state.layout.layoutMode;

export const selectCollapsed = (state: RootState) => state.layout.collapsed;

export const selectIsDarkMode = (state: RootState) => state.layout.isDarkMode;

export const selectThemeColor = (state: RootState) => state.layout.themeColor;

export const selectIsOpenSetting = (state: RootState) =>
  state.layout.isOpenSetting;

export const selectIsFixedWidth = (state: RootState) =>
  state.layout.isFixedWidth;

export const selectIsFixedHeader = (state: RootState) =>
  state.layout.isFixedHeader;

export default layoutSlice.reducer;
