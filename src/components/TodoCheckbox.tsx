import { FaCheck } from "react-icons/fa";

type TodoCheckboxProps = {
    id: number;
    checked: boolean;
    className?: string;
    setChecked: (value: boolean) => void;
};

export default function TodoCheckbox({
    id,
    checked,
    setChecked,
    className,
}: TodoCheckboxProps) {
    return (
        <>
            <input
                id={id.toString()}
                type="checkbox"
                className={`checkbox align-middle animate ${className}`}
                defaultChecked={checked}
                onChange={(e) => {
                    setChecked(e.target.checked);
                }}
            />
            {checked && (
                <FaCheck className="w-3 h-3 pointer-events-none select-none text-slate-50 absolute left-1 top-2" />
            )}
        </>
    );
}
