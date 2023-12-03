import { create } from 'zustand';

interface StoreState {
  bluetooth: boolean;
  toggleBluetooth: (value: boolean) => void;
}

const useBluetooth = create<StoreState>((set) => ({
    bluetooth: true,
    toggleBluetooth: () => set((state) => ({ bluetooth: !state.bluetooth })),
}));

export default useBluetooth;