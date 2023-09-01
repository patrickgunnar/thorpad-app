"use client"

import { create } from "zustand";


interface SelectionStore {
    selectionStart: number
    selectionEnd: number
    setSelection: (start: number, end: number) => void
}

const useSelection = create<SelectionStore>((set) => ({
    selectionStart: 0,
    selectionEnd: 0,
    setSelection: (start: number, end: number) => set({ selectionStart: start, selectionEnd: end })
}))

export default useSelection
