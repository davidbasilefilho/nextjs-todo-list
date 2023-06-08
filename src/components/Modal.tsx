import { ForwardedRef, forwardRef } from "react";

type ModalProps = {
    title: string;
    content: string;
    proceedTxt?: string;
    onProceed: () => void;
};

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
    (
        { title, content, proceedTxt, onProceed }: ModalProps,
        ref: ForwardedRef<HTMLDialogElement>
    ) => {
        return (
            <dialog
                ref={ref}
                className="inset-0 w-full h-full bg-slate-950 bg-opacity-25 backdrop-blur-sm flex justify-center items-center p-6"
            >
                <div className="card shadow text-center flex flex-col gap-5 p-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl text-slate-50">{title}</h1>
                        <p className="text-slate-200">{content}</p>
                    </div>

                    <form action={() => onProceed()}>
                        <div className="flex flex-col gap-4">
                            {proceedTxt && (
                                <input
                                    className="btn-green animate text-lg"
                                    type="submit"
                                    value={proceedTxt}
                                />
                            )}
                        </div>
                    </form>
                </div>
            </dialog>
        );
    }
);

export default Modal;
