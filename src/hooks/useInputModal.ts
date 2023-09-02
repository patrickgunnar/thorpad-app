"use client"

import { create } from "zustand"


interface InputModalStore {
    open: boolean
    onOpen: () => void
    onClose: () => void
}

const useInputModal = create<InputModalStore>((set) => ({
    open: false,
    onOpen: () => set({ open: true }),
    onClose: () => set({ open: false }),
}))

export default useInputModal
