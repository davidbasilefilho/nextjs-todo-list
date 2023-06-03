import Link from "next/link";
import { prisma } from "../client";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
    "use server";

    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid title");
    }

    await prisma.todo.create({
        data: {
            title,
            completed: false,
        },
    });

    redirect("/");
}

export default function New() {
    return (
        <>
            <div className="flex justify-between mb-4">
                <h1 className="text-2xl text-center">New Todo</h1>
            </div>

            <form action={createTodo} className="flex gap-2 flex-col">
                <input
                    type="text"
                    name="title"
                    className="txt-field animate mb-2"
                />
                <div className="flex gap-3 justify-end">
                    <Link href="/" className="btn-outline-red animate">
                        Cancel
                    </Link>
                    <button type="submit" className="btn-green animate">
                        Create
                    </button>
                </div>
            </form>
        </>
    );
}
