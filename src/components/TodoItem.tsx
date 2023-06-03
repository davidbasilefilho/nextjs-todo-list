"use client";

import { useRouter } from "next/navigation";

type TodoItemProps = {
    id: string;
    title: string;
    completed: boolean;
    toggleTodo: (id: number, completed: boolean) => void;
    deleteTodo: (id: number) => void;
};

export function TodoItem({
    id,
    title,
    completed,
    toggleTodo,
    deleteTodo,
}: TodoItemProps) {
    const router = useRouter();

    return (
        <li className="flex gap-3 justify-between">
            <div>
                <input
                    id={id}
                    type="checkbox"
                    className="checkbox peer animate mr-3"
                    defaultChecked={completed}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                <label
                    htmlFor={id}
                    className="peer-checked:line-through cursor-pointer select-none"
                >
                    {title}
                </label>
            </div>

            <input
                type="button"
                value="Delete"
                className="btn-outline-red animate"
                onClick={(e) => {
                    deleteTodo(id);
                    router.refresh();
                }}
            />
        </li>
    );
}
