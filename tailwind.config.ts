import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "background-thorpad":
                    "linear-gradient(to top, var(--colour--001) 0%, var(--colour--002) 100%)",
                "background-toolbar":
                    "linear-gradient(to top, var(--colour--003) 0%, var(--colour--004) 100%)",
                "background-notepad":
                    "linear-gradient(to top, var(--colour--005) 0%, var(--colour--006) 100%)",
                "paper-content":
                    "linear-gradient(transparent, transparent 30px, var(--colour--004) 30px)",
                "paper-balls":
                    "radial-gradient(var(--colour--008) 6px, transparent 7px)",
            },
            backgroundSize: {
                "paper-size": "31px 31px",
            },
            dropShadow: {
                "ds-001": "-1px 2px 3px var(--colour--004)",
            },
            borderRadius: {
                notepad: "12px",
                "tools-radius": "4px",
            },
            keyframes: {
                spin: {
                    "0%, 100%": {
                        boxShadow: ".2em 0px 0 0px var(--colour--006)",
                    },
                    "12%": {
                        boxShadow: ".2em .2em 0 0 var(--colour--006)",
                    },
                    "25%": {
                        boxShadow: "0 .2em 0 0px var(--colour--006)",
                    },
                    "37%": {
                        boxShadow: "-.2em .2em 0 0 var(--colour--006)",
                    },
                    "50%": {
                        boxShadow: "-.2em 0 0 0 var(--colour--006)",
                    },
                    "62%": {
                        boxShadow: "-.2em -.2em 0 0 var(--colour--006)",
                    },
                    "75%": {
                        boxShadow: "0px -.2em 0 0 var(--colour--006)",
                    },
                    "87%": {
                        boxShadow: ".2em -.2em 0 0 var(--colour--006)",
                    },
                },
            },
            animation: {
                "spin": "spin 1s steps(8) infinite",
            }
        },
    },
    plugins: [],
};

export default config;
