"use client"

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    return (
        <div></div>
    );
}
 
export default Modal;
