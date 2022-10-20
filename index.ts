import {initTRPC} from "@trpc/server";
export const t = initTRPC.create();

export const app_router = t.router({
    metadata: t.router({
        versions: t.procedure.query(() => ({engine: '0.0.1'}))
    })
});