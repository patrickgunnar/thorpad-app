"use client";

import { GiThorHammer } from "react-icons/gi";
import Modal from "../modal/Modal";

interface StartupProps {
    onClose: () => void;
}

const Startup: React.FC<StartupProps> = ({ onClose }) => {
    return (
        <Modal
            title="Secure Your Data: A Vital Reminder to Download Your Work"
            onClose={onClose}
        >
            <div className="box-border flex justify-center items-start h-full w-full overflow-hidden overflow-y-auto">
                <div className="relative flex flex-col justify-start items-center h-fit w-full">
                    <div className="box-border flex gap-2 justify-center items-center mt-10 mb-14 h-20 w-full">
                        <GiThorHammer className="h-[70%] w-fit" />
                        <span className="uppercase font-bold text-[20px]">
                            Thorpad
                        </span>
                    </div>
                    <div  className="box-border flex justify-center items-start h-fit w-full">
                        <p className="box-border flex h-fit w-full text-lg font-normal">
                            I want to make it clear that the stuff you create in the app
                            might not stick around forever since it&apos;s saved in
                            localStorage. To be sure your work lasts, I recommend
                            downloading it. This way, you can be sure your creations are
                            safe, considering how unpredictable the digital world can
                            be.
                        </p>
                    </div>
                    <div  className="box-border flex justify-center items-center mt-10 mb-14 h-20 w-full">
                        <label className="uppercase font-bold text-[16px]">
                            Thank You for Choosing Thorpad: Your Support Means the World!
                        </label>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Startup;
