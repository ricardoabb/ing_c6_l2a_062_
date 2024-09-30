import { create } from "zustand";
const contentStart = {
  title : 'Língua Inglesa',
  meaning: "phrasal verbs in the context of health and well-being",
  content: "Os phrasal verbs são estruturas comuns na língua inglesa.\n\n Ao ler um texto, ouvir uma música, ser influenciado por uma propaganda – eles estarão lá! Isso não é diferente quando falamos do tema saúde.\nPara se expressar sobre dores, sintomas, problemas, e até mesmo dizer como se sente, você pode usar uma série de estruturas verbais que trarão, para o seu inglês, naturalidade.\n\nImagine se você estivesse em outro país que o idioma fosse a língua inglesa, como seria sua comunicação? Por isso, aqui você vai conhecer alguns desses phrasal verbs associados à temática da saúde.",
}

interface ModalState {
  activeId: number
  imageActive: boolean
  isOpen: boolean;
  isAnimated: boolean;
  isPlaying: boolean;
  isTranslated: boolean;
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
  setActiveId: (param: {
    activeId: number
  }) => void;
  setImageActive: (param: {
    imageActive: boolean
  }) => void;
  setIsTranslated: (param: {
    isTranslated: boolean
  }) => void;
}

export const useInfoStore = create<ModalState>((set) => ({
  activeId: 0,
  imageActive: false,
  isOpen: false,
  
  isAnimated: false,
  isPlaying: false,
  isTranslated: false,
  title: contentStart.title,
  meaning: contentStart.meaning,
  content: contentStart.content,

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
  setActiveId: ({ activeId }) => set({ activeId, }),
  setImageActive: ({ imageActive }) => set({ imageActive, }),
  setIsTranslated: ({ isTranslated }) => set({ isTranslated, }),
}));
