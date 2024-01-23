"use client"

import * as React from "react"

export function Footer() {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by <a href="https://samueljcatania.com" target="_blank" className="underline">Samuel
                    Catania</a>. All source code is available on <a
                    href="https://github.com/samueljcatania/video-library-of-babel" target="_blank" rel="noreferrer"
                    className="underline">GitHub</a>. Inspired by <a href="https://libraryofbabel.info" target="_blank"
                                                                     rel="noreferrer" className="underline">Jonathan
                    Basile</a>.
                </p>
            </div>
        </footer>
    )
}