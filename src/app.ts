import { createApp, createRouter, defineEventHandler } from "h3";

export const app = createApp();

const router = createRouter();
app.use(router);

router.get(
  "/",
  defineEventHandler(() => {
    return { message: "⚡️ Tadaa!" };
  }),
);
