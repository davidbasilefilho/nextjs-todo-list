type ModalProps = {
    title: string;
    content: string;
    cancelTxt?: string;
    submitTxt?: string;
    enabled: boolean;
    onSubmit?: () => void;
    onCancel?: () => void;
};

export default function Modal({
    title,
    content,
    cancelTxt,
    submitTxt,
    enabled,
    onSubmit,
    onCancel,
}: ModalProps): JSX.Element {
    if (enabled) {
        return (
            <div className="fixed inset-0 bg-slate-950 bg-opacity-25 backdrop-blur-sm flex justify-center items-center p-6">
                <div className="card shadow text-center flex flex-col gap-6 p-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">{title}</h1>
                        <p className="text-slate-200">{content}</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {submitTxt && (
                            <button
                                className="btn-green animate text-lg"
                                onClick={() => {
                                    if (onSubmit) onSubmit();
                                }}
                            >
                                {submitTxt}
                            </button>
                        )}

                        {cancelTxt && (
                            <button
                                className="btn-outline-red animate"
                                onClick={() => {
                                    if (onCancel) onCancel();
                                }}
                            >
                                {cancelTxt}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
    return <></>;
}
