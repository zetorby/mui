import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import scss from 'rollup-plugin-scss'

export default {
    input: "./lib/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: 'es'
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        typescript(),
        scss(),
    ],
    exclude: ['node_modules/**', 'stories/**']
}