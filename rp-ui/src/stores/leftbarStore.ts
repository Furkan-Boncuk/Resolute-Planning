import { create } from "zustand";

interface LeftbarState {
    isCollapsed: boolean;
    toggleIsCollapsed: () => void;
}

const useLeftbarStore = create<LeftbarState>((set) => ({
    isCollapsed: false,
    toggleIsCollapsed: () => set((state) => ({isCollapsed: !state.isCollapsed}))
}))

export default useLeftbarStore