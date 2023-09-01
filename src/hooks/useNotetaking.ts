"use client"

import { create } from "zustand";


interface NotetakingStore {
    content: string
    setContent: (content: string) => void
}

const useNotetaking = create<NotetakingStore>((set) => ({
    content: '',
    setContent: (content: string) => set({ content: content.trim() })
}))

export default useNotetaking
