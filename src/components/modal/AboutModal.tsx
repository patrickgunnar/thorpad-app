"use client"

import useAboutModal from "@/hooks/useAboutModal";
import Modal from "./Modal";


const AboutModal = () => {
    // modal hook
    const { open, onClose } = useAboutModal()

    if(!open) return null

    return (
        <Modal title="About Modal" onClose={onClose}>
            About modal
        </Modal>
    );
}
 
export default AboutModal;
