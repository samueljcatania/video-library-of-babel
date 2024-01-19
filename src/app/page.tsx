import Image from 'next/image'
import {Button} from "@/src/components/ui/button"
import * as React from "react";

export default function Home() {
    return (
        <main className="flex-1">
            <div className="border-b">
                <div className="container relative">
                    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
                        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                            The Video Library of Babel
                        </h1>
                    </section>
                    <p>Hello</p>
                </div>
            </div>
        </main>
    )
}
