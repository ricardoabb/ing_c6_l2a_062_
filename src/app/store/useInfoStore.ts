import { create } from "zustand";


interface ModalState {
  isOpen: boolean;
  isAnimated: boolean;
  isPlaying: boolean;
  isMuted: boolean;
  title: string;
  meaning: string;
  content: string;

  openModal: (params: {
    title: string;
    meaning: string;
    content: string;
    
  }) => void;
  closeModal: () => void;
  setOpen: () => void;
  setIsPlaying: (param: {
    isPlaying: boolean
  }) => void;
  setIsMuted: (param: {
    isMuted: boolean
  }) => void;
}

export const useInfoStore = create<ModalState>((set) => ({
  isOpen: false,
  isAnimated: false,
  isPlaying: false,
  isMuted: false,
  title: "",
  meaning: "",
  content: "",

  openModal: ({ title, meaning, content }) =>
    set({
      isOpen: false,
      isAnimated: true,
      isPlaying: true,
      title,
      meaning,
      content,
    }),
  closeModal: () =>
    set({
      isOpen: false,
      title: "",
      meaning: "",
      content: "",
    }),
  setOpen: () => set((state) => ({ isOpen: !state.isOpen, isAnimated: false })),
  setIsPlaying: ({ isPlaying }) => set({ isPlaying, }),
  setIsMuted: ({ isMuted }) => set({ isMuted, }),
}));
