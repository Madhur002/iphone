import { create } from 'zustand';

interface StoreState {
  wifiOn: boolean;
  toggleWifi: (value: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  wifiOn: true,
  toggleWifi: () => set((state) => ({ wifiOn: !state.wifiOn })),
}));

export default useStore;