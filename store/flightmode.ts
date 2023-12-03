import { create } from 'zustand';

interface StoreState {
  flightmode: boolean;
  toggleFlightmode: (value: boolean) => void;
}

const useFlightmode = create<StoreState>((set) => ({
    flightmode: false,
    toggleFlightmode: () => set((state) => ({ flightmode: !state.flightmode })),
}));

export default useFlightmode;