"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import TodoCheckbox from "./TodoCheckbox";

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
}: TodoItemProps): JSX.Element {
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
                <TodoCheckbox
                    id={id}
                    checked={checked}
                    setChecked={setChecked}
                    className="mr-3 peer"
                />

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
