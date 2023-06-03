import Link from "next/link";
import { prisma } from "./client";
import { TodoItem } from "@/components/TodoItem";

function getTodos() {
    return prisma.todo.findMany();
}

async function toggleTodo(id: string, completed: boolean) {
    "use server";
    await prisma.todo.update({ where: { id }, data: { completed } });
}

async function deleteTodo(id: string) {
    "use server";
    await prisma.todo.delete({ where: { id } });
}

export default async function Home() {
    const todos = await getTodos();

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-2xl text-center">Todos</h1>
                <Link href="/new" className="btn-outline-white animate">
                    New
                </Link>
            </div>

            <hr className="my-4" />

            <ul>
                {todos.map((todo) => (
                    <TodoItem
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
