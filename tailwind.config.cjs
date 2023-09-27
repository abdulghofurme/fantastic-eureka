const plugin = require("tailwindcss/plugin");
const buttonPlugin = require("./tailwind/button");
const typographyHeadingPlugin = require("./tailwind/typography/heading");
const typographyHeadlinePlugin = require("./tailwind/typography/headline");
const typographyTextPlugin = require("./tailwind/typography/text");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      nunito: "Nunito Sans, sans-serif",
    },
    fontSize: {
      "heading-2xl": "24px",
      "heading-xl": "20px",
      "heading-l": "18px",
      "heading-m": "16px",
      "heading-s": "14px",
      "heading-xs": "12px",
      "nominal-2xl": "28px",
      "nominal-xl": "24px",
      "nominal-l": "20px",
      "nominal-m": "16px",
      "nominal-s": "15px",
      "nominal-xs": "13px",
      "nominal-2xs": "11px",
      "text-xl": "24px",
      "text-l": "18px",
      "text-m": "14px",
      "text-s": "12px",
      "text-xs": "10px",
      "desktop-2xs": "12px",
      "desktop-xs": "14px",
      "desktop-s": "16px",
      "desktop-m": "20px",
      "desktop-l": "26px",
      "desktop-xl": "36px",
      "desktop-2xl": "42px",
      "desktop-heading-6": "24px",
      "desktop-heading-5": "28px",
      "desktop-heading-4": "36px",
      "desktop-heading-3": "42px",
      "desktop-heading-2": "48px",
      "desktop-heading-1": "56px",
    },
    extend: {
      fontWeight: {
        regular: "400",
      },
      boxShadow: {
        flat: "0px 0px 3px rgba(61, 71, 81, 0.02), 0px 2px 8px rgba(61, 71, 81, 0.04)",
        low: "0px 0px 4px 1px rgba(61, 71, 81, 0.04), 0px 6px 16px rgba(61, 71, 81, 0.06)",
        medium:
          "0px 0px 10px rgba(61, 71, 81, 0.06), 0px 6px 24px rgba(61, 71, 81, 0.08)",
        high: "0px 0px 15px 1px rgba(61, 71, 81, 0.08), 0px 6px 32px rgba(61, 71, 81, 0.1)",
        dialog:
          "0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)",
      },
    },
  },
  plugins: [
    plugin(function (params) {
      params.addComponents(typographyHeadingPlugin(params));
      params.addComponents(typographyHeadlinePlugin(params));
      params.addComponents(typographyTextPlugin(params));
      buttonPlugin(params);
    }),
  ],
};
