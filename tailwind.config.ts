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
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"background-thorpad": "linear-gradient(to top, var(--colour--001) 0%, var(--colour--002) 100%)",
				"background-toolbar": "linear-gradient(to top, var(--colour--003) 0%, var(--colour--004) 100%)",
				"background-notepad": "linear-gradient(to top, var(--colour--005) 0%, var(--colour--006) 100%)"
            },
			dropShadow: {
				"ds-001": "-1px 2px 3px var(--colour--004)",
			},
			borderRadius: {
				"notepad": "12px"
			}
        },
    },
    plugins: [],
};

export default config;
