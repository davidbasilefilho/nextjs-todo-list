"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

type TodoItemProps = {
    id: number;
    title: string;
    completed: boolean;
    toggleTodo: (id: number, completed: boolean) => void;
    deleteTodo: (id: number) => void;
    className?: string;
};

export function TodoItem({
    id,
    title,
    completed,
    toggleTodo,
    deleteTodo,
    className,
}: TodoItemProps) {
    const router = useRouter();
    const [checked, setChecked] = useState(completed);

    useEffect(() => {
        toggleTodo(id, checked);
    }, [checked, id, toggleTodo]);

    return (
        <li
            className={`flex card shadow-lg gap-3 justify-between ${className}`}
        >
            <div className="relative">
                <input
                    id={id.toString()}
                    type="checkbox"
                    className="checkbox align-middle animate mr-3 peer"
                    defaultChecked={checked}
                    onChange={(e) => {
                        setChecked(e.target.checked);
                    }}
                />
                {checked && (
                    <FaCheck className="w-3 h-3 cursor-pointer text-slate-50 absolute left-1 top-2" />
                )}

                <label
                    htmlFor={id.toString()}
                    className="peer-checked:line-through cursor-pointer align-middle select-none"
                >
                    {title}
                </label>
            </div>

            <button
                type="button"
                className="btn-outline-red animate align-middle"
                onClick={(e) => {
                    deleteTodo(id);
                    router.refresh();
                }}
            >
                Delete
            </button>
        </li>
    );
}
