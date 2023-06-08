"use server";

import { Prisma, PrismaPromise } from "@prisma/client";
import { prisma } from "./client";
import { CreateTodoResponse } from "./enums";

export async function toggleTodo(
    id: number,
    completed: boolean
): Promise<void> {
    await prisma.todo.update({ where: { id }, data: { completed } });
}

export async function deleteTodo(id: number): Promise<void> {
    await prisma.todo.delete({ where: { id } });
}

export async function getTodos(): Promise<
    PrismaPromise<Array<Prisma.TodoGetPayload<Prisma.TodoArgs>>>
> {
    return prisma.todo.findMany();
}

export async function createTodo(data: FormData): Promise<CreateTodoResponse> {
    const title = data.get("title")?.valueOf() as string;
    const description = data.get("description")?.valueOf() as string;
    const deadline = new Date(data.get("deadline")?.valueOf() as string);

    const now = new Date(Date.now());

    if (typeof title !== "string" || title.length === 0) {
        return CreateTodoResponse.InvalidTypes;
    } else if (typeof description !== "string" || description.length !== 0) {
        return CreateTodoResponse.InvalidTypes;
    } else if (!(deadline instanceof Date) || isNaN(deadline.getTime())) {
        return CreateTodoResponse.InvalidTypes;
    } else if (now > deadline) {
        return CreateTodoResponse.InvalidDeadline;
    } else {
        await prisma.todo.create({
            data: {
                title,
                completed: false,
                description,
                deadline,
            },
        });

        return CreateTodoResponse.Ok;
    }
}
