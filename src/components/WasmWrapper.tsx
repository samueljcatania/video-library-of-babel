"use client"

import React, {useState, useEffect} from 'react';

const WasmWrapper = () => {
    const [add, setAdd] = useState<((a: number, b: number) => number) | null>(null);

    useEffect(() => {
        const loadWasm = async () => {
            const wasmModule = await import("../../rust/pkg/rust_bg.wasm");
            setAdd(() => wasmModule.add);
        };
        loadWasm().catch(error => console.error('Error loading wasm module:', error));
    }, []);

    if (!add) {
        return <div>Loading...</div>;
    }

    return <div className="font-normal">Adding two numbers: {add(8, 4)}</div>;
};

export default WasmWrapper;
