"use client";

import { useRouter } from "next/navigation";

type TodoItemProps = {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
};

export function TodoItem({
    id,
    title,
    complete,
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
                    className="cursor-pointer peer"
                    defaultChecked={complete}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                <label htmlFor={id} className="peer-checked:line-through">
                    {title}
                </label>
            </div>

            <div>
                <input
                    type="button"
                    value="Delete"
                    className="btn-outline-red animate"
                    onClick={(e) => {
                        deleteTodo(id);
                        router.refresh();
                    }}
                />
            </div>
        </li>
    );
}
