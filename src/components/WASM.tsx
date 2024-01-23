import type { InitOutput } from "@/algorithm/pkg/algorithm";
import dynamic from "next/dynamic";

interface RustComponentProps {
    number: number;
}

const WASM = dynamic({
    loader: async () => {
        // Import the wasm module
        // @ts-ignore
        const exports = (await import("../../algorithm/pkg/algorithm_bg.wasm")) as InitOutput;
        const { fibonacci: fibonacci } = exports;

        // Return a React component that calls the add_one method on the wasm module
        return ({ number }: RustComponentProps) => (
            <div>
                <>{fibonacci(number)}</>
            </div>
        );
    },
});

export default WASM;