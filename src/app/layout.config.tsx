import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          alt="logo"
          width="137"
          height="32"
          decoding="async"
          data-nimg="1"
          style={{ color: "transparent" }}
          src="https://app.pokelocals.online/images/logo-locals-red-beta.svg"
        />
      </>
    ),
  },
  links: [
    // {
    //   text: "Documentation",
    //   url: "/docs",
    //   active: "nested-url",
    // },
    // {
    //   type: "main",
    //   text: "Introduction",
    //   url: "/docs",
    // },
    // {
    //   type: "menu",
    //   text: "Guide",
    //   on: "nav",
    //   items: [
    //     {
    //       text: "Organizations",
    //       // description: "Learn to use Fumadocs",
    //       url: "/docs/organizations",
    //       // (optional) Props for Radix UI Navigation Menu item in Home Layout
    //       // menu: {
    //       //   className: "row-span-2",
    //       //   // add banner to navigation menu card
    //       //   // can be an image or other elements
    //       //   banner: <div>Banner</div>,
    //       // },
    //     },
    //   ],
    // },
  ],
};
