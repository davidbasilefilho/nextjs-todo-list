import Link from "next/link";
import { prisma } from "./client";
import { TodoItem } from "@/components/TodoItem";
import { useRouter } from "next/navigation";

function getTodos() {
    return prisma.todo.findMany();
}

async function toggleTodo(id: number, completed: boolean) {
    "use server";
    await prisma.todo.update({ where: { id }, data: { completed } });
}

async function deleteTodo(id: number) {
    "use server";
    await prisma.todo.delete({ where: { id } });
}

export default async function Home() {
    const todos = await getTodos();
    const router = useRouter();

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
                        deleteTodo={() => {
                            deleteTodo;
                            router.refresh();
                        }}
                    />
                ))}
            </ul>
        </>
    );
}
