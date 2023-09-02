"use client"

import { create } from "zustand"


interface AboutModalStore {
    open: boolean
    onOpen: () => void
    onClose: () => void
}

const useAboutModal = create<AboutModalStore>((set) => ({
    open: false,
    onOpen: () => set({ open: true }),
    onClose: () => set({ open: false }),
}))

export default useAboutModal
