import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

export default [
    // Build JS (CJS + ESM) with "use client"
    {
        input: "./index.ts",
        output: [
            {
                file: "dist/index.cjs.js",
                format: "cjs",
                sourcemap: true,
                banner: '"use client";',
            },
            {
                file: "dist/index.esm.js",
                format: "esm",
                sourcemap: true,
                banner: '"use client";',
            },
            {
                file: "dist/client.cjs.js",
                format: "cjs",
                sourcemap: true,
                banner: '"use client";',
            },
            {
                file: "dist/client.esm.js",
                format: "esm",
                sourcemap: true,
                banner: '"use client";',
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                declaration: true,
                declarationDir: "dist/types",
                rootDir: "./",
            }),
        ],
        external: ["react", "react-dom"],
    },

    // Build Type Declarations
    {
        input: "dist/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [dts()],
    },
];
