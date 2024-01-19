import {Button} from "@/src/components/ui/button"
import {Input} from "@/src/components/ui/input"
import {Label} from "@/src/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/src/components/ui/sheet"
import * as React from "react";
import {AlignJustifyIcon, Hexagon, HexagonIcon} from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/src/components/ui/navigation-menu";
import Link from "next/link";

export function Sidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="me-2" variant="ghost" size="icon">
                    <AlignJustifyIcon size="20"/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>
                        <div className="mr-6 flex items-center space-x-2">
                            <HexagonIcon size="48"/>
                            <span className="font-bold text-4xl">VLB</span>
                        </div>
                    </SheetTitle>
                </SheetHeader>
                <div className="relative overflow-hidden my-8 pb-10 pl-14 space-y-16">
                    <div className="flex flex-col space-y-4">
                        <Link href="/search" legacyBehavior passHref>
                            Search
                        </Link>
                        <Link href="/random" legacyBehavior passHref>
                            Random
                        </Link>
                        <Link href="/about" legacyBehavior passHref>
                            About
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-bold text-2xl">Getting Started</h3>
                        <Link href="/search" legacyBehavior passHref>
                            Introduction
                        </Link>
                        <Link href="/random" legacyBehavior passHref>
                            Installation
                        </Link>
                        <Link href="/about" legacyBehavior passHref>
                            Typography
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-bold text-2xl">Explore</h3>
                        <Link href="/search" legacyBehavior passHref>
                            Faces
                        </Link>
                        <Link href="/random" legacyBehavior passHref>
                            People
                        </Link>
                        <Link href="/about" legacyBehavior passHref>
                            Text and Symbols
                        </Link>
                    </div>
                </div>
                <SheetFooter>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
