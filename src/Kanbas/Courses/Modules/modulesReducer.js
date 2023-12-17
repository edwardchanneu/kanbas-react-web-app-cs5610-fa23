import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [],
  module: { name: "New Module 234", description: "New Description" },
};
const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    addModule: (state, action) => {
      state.modules = [
          ...state.modules,
          action.payload,
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
          (module) => module.number !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module.number === action.payload.number) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});

export const { addModule, deleteModule,
  updateModule, setModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;
