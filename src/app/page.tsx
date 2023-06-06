import Link from "next/link";
import { TodoItem } from "@/components/TodoItem";
import { getTodos, toggleTodo, deleteTodo } from "./dbfunc";

export default async function Home(): Promise<JSX.Element> {
    const todos = await getTodos();

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-2xl text-center">Todos</h1>
                <Link href="/new" className="btn-outline-white animate">
                    New
                </Link>
            </div>

            <hr />

            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        className="mb-4"
                        key={todo.id}
                        {...todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </>
    );
}
