"use client"

import * as React from "react"
import Link from "next/link"
import {cn} from "@/src/lib/utils"
import {CommandMenu} from "@/src/components/CommandMenu"
import {ThemeToggle} from "@/src/components/ThemeToggle"
import {Button} from "@/src/components/ui/button";
import {Hexagon, HexagonIcon} from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Faces",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Text and Symbols",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "People",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "TBD",
        href: "/docs/primitives/scroll-area",
        description: "TBD.",
    },
    {
        title: "TBD",
        href: "/docs/primitives/tabs",
        description:
            "TBD.",
    },
    {
        title: "TBD",
        href: "/docs/primitives/tooltip",
        description:
            "TBD.",
    },
]

export function Navbar() {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <a className="mr-6 flex items-center space-x-2" href="/">
                        <HexagonIcon/>
                        <span className="hidden font-bold sm:inline-block">VLB</span></a>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink href="/" asChild>
                                                <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                   href="/">
                                                    <div className="mb-2 mt-2 text-lg font-medium">
                                                        <Hexagon size="w-*"/>
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        The Video Library of Babel (VLB) contains every 5 second video
                                                        that ever has, or could exist.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/docs" title="Introduction">
                                            Re-usable components built using Radix UI and Tailwind CSS.
                                        </ListItem>
                                        <ListItem href="/docs/installation" title="Installation">
                                            How to install dependencies and structure your app.
                                        </ListItem>
                                        <ListItem href="/docs/primitives/typography" title="Typography">
                                            Styles for headings, paragraphs, lists...etc
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem
                                className="hover:text-accent-foreground font-normal text-muted-foreground">
                                <Link href="/search"
                                      legacyBehavior passHref>
                                    <NavigationMenuLink href="/search" className={navigationMenuTriggerStyle()}>
                                        Search
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/random" legacyBehavior passHref>
                                    <NavigationMenuLink href="/random" className={navigationMenuTriggerStyle()}>
                                        Random
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="justify-end no-hover-effect">
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
                                        About
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex flex-1 items-center justify-between md:justify-end">
                    <CommandMenu/>
                    <Button className="ms-2" variant="ghost" size="icon">
                        <a href="https://github.com/samueljcatania/video-library-of-babel" target="_blank"
                           rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="non  e"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="lucide lucide-github">
                                <path
                                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                                <path d="M9 18c-4.51 2-5-2-7-2"/>
                            </svg>
                            <span className="sr-only">Link to GitHub</span>
                        </a>
                    </Button>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink href="/" asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
