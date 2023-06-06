"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import TodoCheckbox from "./TodoCheckbox";
import { FaInfo } from "react-icons/fa";
import Link from "next/link";

type TodoItemProps = {
    id: number;
    title: string;
    completed: boolean;
    deadline: Date;
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
    deadline,
}: TodoItemProps): JSX.Element {
    const router = useRouter();
    const [checked, setChecked] = useState<boolean>(completed);

    useEffect(() => {
        toggleTodo(id, checked);
    }, [checked, id, toggleTodo]);

    return (
        <li
            className={`flex card shadow-lg gap-3 justify-between ${className}`}
        >
            <div className="relative my-auto">
                <TodoCheckbox
                    id={id}
                    checked={checked}
                    setChecked={setChecked}
                    className="mr-3 peer"
                />

                <label
                    htmlFor={id.toString()}
                    className="peer-checked:line-through cursor-pointer align-middle select-none my-auto"
                >
                    {title}
                </label>
            </div>

            <div className="flex gap-3">
                <p className="text-xs font-medium text-slate-200 my-auto">
                    {deadline.toLocaleString()}
                </p>

                <Link
                    href={`/${id}`}
                    className="btn-outline-white relative rounded-2xl w-9 h-9 animate align-middle text-center"
                >
                    <FaInfo className="absolute top-[0.55rem] left-[0.55rem]" />
                </Link>

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
            </div>
        </li>
    );
}
