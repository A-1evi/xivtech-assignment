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
    // Action to update multiple assets at once (more efficient for simulation)
    updateAssets: (state, action) => {
      // payload should be an array of { id: string, changes: { ... } }
      action.payload.forEach((update) => {
        const assetIndex = state.assets.findIndex((a) => a.id === update.id);
        if (assetIndex !== -1) {
          // Merge changes into the existing asset object
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