import { defineDocs, defineConfig } from "fumadocs-mdx/config";

// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: "content/docs",
  // docs: {
  //   schema: z.object({
  //     title: z.string(),
  //     description: z.string().optional(),
  //     icon: z.string().optional(),
  //   }),
  // },
});

export default defineConfig({
  mdxOptions: {
    // remarkPlugins: [],
    // rehypePlugins: [],
  },
});
