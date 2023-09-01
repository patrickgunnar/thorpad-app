"use client"

import { create } from "zustand";


interface SelectionStore {
    selectionStart: number | null
    selectionEnd: number | null
    setSelection: (start: number | null, end: number | null) => void
}

const useSelection = create<SelectionStore>((set) => ({
    selectionStart: null,
    selectionEnd: null,
    setSelection: (start: number | null, end: number | null) => set({ selectionStart: start, selectionEnd: end })
}))

export default useSelection
