import { initialCryptoData } from "./cryptoData";
import { updateAssets } from "./cryptoSlice";
import store from "./store";

let intervalId = null;

const assetIds = initialCryptoData.map(asset => asset.id); // Get IDs to update

const generateRandomChange = (currentValue, percentageVolatility = 0.005) => {
  // Simulate small percentage changes
  const changeFactor = 1 + (Math.random() - 0.5) * 2 * percentageVolatility; // e.g., between 0.995 and 1.005
  return currentValue * changeFactor;
};

const generateRandomPercentage = (currentPercentage, range = 0.5) => {
  // Simulate small changes in percentage points
  const change = (Math.random() - 0.5) * 2 * range;
  return currentPercentage + change;
}

export const startMockWebSocket = () => {
  if (intervalId) {
    console.log('Mock WebSocket already running.');
    return;
  }

  console.log('Starting Mock WebSocket simulation...');
  intervalId = setInterval(() => {
    const currentState = store.getState();
    const currentAssets = currentState.crypto.assets;
    const updates = [];

    
    const numUpdates = Math.floor(Math.random() * 3) + 1;
    const shuffledIds = [...assetIds].sort(() => 0.5 - Math.random());
    const idsToUpdate = shuffledIds.slice(0, numUpdates);


    idsToUpdate.forEach(id => {
      const asset = currentAssets.find(a => a.id === id);
      const changes = {
        price: generateRandomChange(asset.price, 0.001), 
        percentChange1h: generateRandomPercentage(asset.percentChange1h, 0.1),
        percentChange24h: generateRandomPercentage(asset.percentChange24h, 0.2),
        volume24h: generateRandomChange(asset.volume24h, 0.01), 
      };
      updates.push({ id, changes });
    });

    if (updates.length > 0) {
       store.dispatch(updateAssets(updates));
    }

  }, 1500); 
};

export const stopMockWebSocket = () => {
  if (intervalId) {
    console.log('Stopping Mock WebSocket simulation.');
    clearInterval(intervalId);
    intervalId = null;
  }
};