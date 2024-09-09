import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export interface MenuState {
  menuItems: string[];
}

const initialState: MenuState = {
  menuItems: []
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {}
});

export const selectMenuItem = (state: RootState) => state.menu.menuItems;

export default menuSlice.reducer;
