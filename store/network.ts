import { create } from 'zustand';

interface StoreState {
  network: boolean;
  toggleNetwork: (value: boolean) => void;
}

const useNetwork = create<StoreState>((set) => ({
    network: true,
    toggleNetwork: () => set((state) => ({ network: !state.network })),
}));

export default useNetwork;