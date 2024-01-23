"use client"

import * as React from "react";
import {useState} from "react";
import dynamic from "next/dynamic";

const WasmComponent = dynamic(() => import('../components/WasmWrapper'), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

export default function Home() {
    return (
        <main className="flex-1">
            <div className="border-b">
                <div className="container relative">
                    <section
                        className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
                        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                            The Video Library of Babel
                        </h1>
                        <span className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
                            A library of every 5 second video that ever has, or could exist. Completely open
                            source. Videos are 1080p at 30fps.
                        </span>
                        <WasmComponent/>
                    </section>
                    <p>Hello</p>
                </div>
            </div>
        </main>
    )
}
