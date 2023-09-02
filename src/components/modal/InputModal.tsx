"use client"

import useInputModal from "@/hooks/useInputModal";
import Modal from "./Modal";


const InputModal = () => {
    // modal hook
    const { open, onClose } = useInputModal()

    if(!open) return null

    return (
        <Modal title="Input Modal" onClose={onClose}>
            Input modal
        </Modal>
    );
}
 
export default InputModal;
