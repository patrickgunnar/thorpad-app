"use client"

import useAboutModal from "@/hooks/useAboutModal";
import Modal from "./Modal";
import Footer from "../footer/Footer";


const AboutModal = () => {
    // modal hook
    const { open, onClose } = useAboutModal()

    if(!open) return null

    return (
        <Modal title="Intriguing Insights: Discover More About Our Craft" onClose={onClose}>
            <div className="box-border flex flex-col justify-between items-start h-full w-full">
                <div className="box-border flex flex-col gap-4 justify-start items-start h-[90%] w-full overflow-hidden overflow-y-auto">
                    <h2 className="my-2 font-bold text-base">
                        CelestialScript: Crafting Elegance with Thorpad
                    </h2>
                    <p>
                        In the ethereal realm of digital craftsmanship, I beckon you to journey with me through the captivating tapestry of Thorpad, a notepad application that transcends the ordinary. With the tools of Next.js, React.js, and TypeScript, I have conjured a portal to uncharted creativity.
                    </p>
                    <p>
                        Thorpad, my magnum opus, is a marvel of meticulous engineering. It dances with the enigmatic elegance of Tailwind CSS, donning a cloak of visual splendor. It breathes life through Zustand, as state management becomes a symphony of precision and performance.
                    </p>
                    <p>
                        But what sets Thorpad apart is the whisper of mystique woven into its very essence. As I scribe my thoughts upon its digital parchment, it syncs seamlessly with the mystic forces of localStorage, preserving my innermost musings for eternity. Every keystroke, a testament to the artistry of simplicity.
                    </p>
                    <p>
                        In the quiet of its digital chambers, Thorpad becomes my silent confidant, guarding my secrets with unwavering loyalty. It understands the cadence of my thoughts, the contours of my ideas, and the subtleties of my intentions.
                    </p>
                    <p>
                        This is not just a notepad; it is an extension of my being, a manifestation of my creative soul. It understands that the act of creation is an act of profound intelligence, a dance of precision, and a stroke of elegance. It honors this truth with every pixel and line of code.
                    </p>
                    <p>
                        Thorpad is an ode to the symphony of creation, an invitation to explore the boundless expanse of thought with the precision of a maestro, the creativity of an artist, the mystique of a magician, and the elegance of a virtuoso. It is, in essence, a digital masterpiece, a testament to the harmony of technology and imagination.
                    </p>
                </div>
                <div className="box-border relative flex justify-center items-center h-[10%] w-full">
                    <Footer />
                </div>
            </div>
        </Modal>
    );
}
 
export default AboutModal;
