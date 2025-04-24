# Real-Time Crypto Price Tracker

![image](https://github.com/user-attachments/assets/37af2621-220a-40b8-b2e4-a4ebfd54d55c)


![video](https://github.com/user-attachments/assets/201b2891-048d-4774-887b-ed0929681cd8)




## Features

* **Simulated Real-Time Updates:** Uses `setInterval` to mimic WebSocket behavior, updating Price, 1h %, 24h %, and 24h Volume every few seconds for random assets.
* **Responsive UI:** Table layout adjusts to different screen sizes, hiding less critical columns on smaller devices.
* **Data Display:** Shows key cryptocurrency metrics including:
    * Logo, Name, Symbol
    * Price (USD)
    * Percentage Change (1h, 24h - updated by simulation)
    * Percentage Change (7d - static)
    * Market Cap (Static)
    * 24h Volume (USD - updated by simulation)
    * Circulating Supply (Static)
    * 7D Sparkline Chart (Static)
* **Centralized State:** Uses Redux Toolkit for robust state management.

## Tech Stack

* **Frontend Library:** [React](https://reactjs.org/) (v18+)
* **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/), [React-Redux](https://react-redux.js.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Build Tool:** [Vite](https://vitejs.dev/) (or Create React App if initialized differently)
* **Language:** JavaScript
* **Real-Time Data Source:** **Mock WebSocket Simulation (`setInterval` in `mockWebSocket.js`)**
* **Number Formatting:** [Numeral.js](http://numeraljs.com/)

## Architecture

* **Component-Based UI:** The interface is built using functional React components (e.g., `CryptoTable`, `CryptoTableRow`) located in `src/components/`.
* **Centralized Redux State:**
    * All application state related to crypto assets is managed within the Redux store, configured using Redux Toolkit (`configureStore`).
    * A dedicated slice (`src/utils/cryptoSlice.js`) defines the state structure, initial data (`initialCryptoData`), and reducers (`updateAssets`) for handling data updates. Redux Toolkit's Immer integration ensures immutable state updates.
    * Components use the `useSelector` hook (e.g., `selectAllAssets`) to subscribe to relevant parts of the state and the `useDispatch` hook to dispatch actions.
* **Simulated Real-Time Data Flow:**
    * The mock simulation is controlled by functions in `src/utils/mockWebSocket.js` (`startMockWebSocket`, `stopMockWebSocket`).
    * `startMockWebSocket` is typically called when the main `App` component mounts (`useEffect`).
    * It uses `setInterval` to periodically execute an update function (e.g., every 1.5 seconds).
    * Inside the interval, the function randomly selects a few assets, calculates small, random changes to their Price, 1h %, 24h %, and 24h Volume based on their current values in the Redux state.
    * An `updateAssets` action containing these changes is dispatched to the Redux store.
    * Components connected via `useSelector` automatically re-render with the new data.
    * `stopMockWebSocket` is called when the `App` component unmounts to clear the interval.
* **Styling Architecture:** Tailwind CSS utility classes are applied directly within the JSX of components for styling and responsiveness, eliminating the need for separate CSS files per component. Global base styles and Tailwind directives are configured in `src/index.css`.
* **Folder Structure:**
    * `src/app`: Redux store configuration.
    * `src/assets`: Static assets like logos and placeholder SVGs.
    * `src/components`: Reusable React UI components (`CryptoTable`, `CryptoTableRow`).
    * `src/utils`: Redux slice (`cryptoSlice.js`), initial data (`cryptoData.js`), and the mock WebSocket simulation (`mockWebSocket.js`),helper Function (`helper.js`).
    * `src/`: Main application files (`App.js`, `main.jsx`/`index.js`, `index.css`).

## Setup Instructions

**Prerequisites:**

* [Node.js](https://nodejs.org/) (LTS version recommended)
* [npm](https://www.npmjs.com/) 

**Steps:**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/A-1evi/xivtech-assignment.git
    cd real-time-crypto-tracker
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev 
    ```

4.  **Open the application:**
    Navigate to `http://localhost:5173` 
---
