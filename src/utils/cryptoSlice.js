import { createSlice } from "@reduxjs/toolkit";
import { initialCryptoData } from "./cryptoData";

const initialState = {
  assets: initialCryptoData,
  status: "idle",
  error: "null",
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateAssets: (state, action) => {
      action.payload.forEach((update) => {
        const assetIndex = state.assets.findIndex((a) => a.id === update.id);
        if (assetIndex !== -1) {
          state.assets[assetIndex] = {
            ...state.assets[assetIndex],
            ...update.changes,
          };
        }
      });
    },
  },
});

export const { updateAssets } = cryptoSlice.actions;

export const selectAllAssets = (state) => state.crypto.assets;

export default cryptoSlice.reducer;
