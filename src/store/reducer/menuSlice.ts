import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { PURGE } from 'redux-persist';
import { menus, type MenuItem } from '@/config/menuConfig';

export interface MenuState {
  menuItems: string[];
  menuTree: MenuItem[];
}

const initialState: MenuState = {
  menuItems: [],
  menuTree: []
};



export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
   
  },

});

export const {  } = menuSlice.actions;

export const selectMenuItem = (state: RootState) => state.menu.menuItems;
export const selectMenuTree = (state: RootState) => state.menu.menuTree;

export default menuSlice.reducer;
