"use client";

import Link from "next/link";
import { createTodo } from "../dbfunc";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function New(): JSX.Element {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-2xl text-center">New Todo</h1>
            </div>

            <hr />

            <form
                action={(f: FormData) =>
                    createTodo(f, () => setShowModal(true))
                }
                className="flex flex-col gap-6"
            >
                <div className="grid grid-flow-dense grid-cols-12 gap-4 justify-between">
                    <div className="flex flex-col sm:col-span-10 col-span-12 gap-1.5">
                        <label htmlFor="description-txt" className="ml-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Finish the project until 9pm"
                            className="txt-field animate mb-2"
                            required
                        />
                    </div>

                    <div className="flex flex-col sm:col-span-2 col-span-12 gap-1.5">
                        <label htmlFor="deadline-date" className="ml-1">
                            Deadline
                        </label>
                        <input
                            type="datetime-local"
                            className="txt-field"
                            name="deadline"
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="description-txt"
                        className="ml-1 col-span-2"
                    >
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description-txt"
                        placeholder="Finish the JavaScript web app about cat fighting until 9pm today"
                        required
                        className="txt-field animate mb-2"
                    />
                </div>

                <div className="flex gap-3 justify-end">
                    <Link href="/" className="btn-outline-red animate">
                        Cancel
                    </Link>
                    <button type="submit" className="btn-green animate">
                        Create
                    </button>
                </div>
            </form>
            <Modal
                title="Invalid deadline"
                content="The deadline should happen after the current date"
                submitTxt="I understand"
                enabled={showModal}
                onSubmit={() => setShowModal(false)}
            />
        </>
    );
}
