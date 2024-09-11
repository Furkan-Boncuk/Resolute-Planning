import { create } from 'zustand';

interface ModalState {
  isTopicDetailsModalOpen: boolean;
  selectedTopicId: string | null;
  setIsTopicDetailsModalOpen: (topicId: string | null) => void;
  isCreateNewTopicModalOpen: boolean;
  setIsCreateNewTopicModalOpen: (isOpen: boolean) => void;
}

const useModalStore = create<ModalState>((set) => ({
  isTopicDetailsModalOpen: false,
  selectedTopicId: null,
  setIsTopicDetailsModalOpen: (topicId: string | null) =>
    set(() => ({
      isTopicDetailsModalOpen: !!topicId,
      selectedTopicId: topicId,
    })),
  isCreateNewTopicModalOpen: false,
  setIsCreateNewTopicModalOpen: (isOpen: boolean) => set(() => ({
    isCreateNewTopicModalOpen: isOpen,
  }))
}));

export default useModalStore;
