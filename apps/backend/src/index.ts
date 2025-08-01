import express from "express";
import cors from "cors";
import supertokens from "supertokens-node";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import {
  middleware,
  errorHandler,
  SessionRequest,
} from "supertokens-node/framework/express";
import { getWebsiteDomain, SuperTokensConfig } from "./lib/supertokens";
import { PORT } from "./lib/env.js";

supertokens.init(SuperTokensConfig);

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: getWebsiteDomain(),
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  }),
);
app.use(middleware());

app.get("/", async (_req, res) => {
  res.send("<h1>Express Server</h1>");
});

app.get("/sessioninfo", verifySession(), async (req: SessionRequest, res) => {
  const session = req.session;
  res.send({
    sessionHandle: session!.getHandle(),
    userId: session!.getUserId(),
    accessTokenPayload: session!.getAccessTokenPayload(),
  });
});

app.use(errorHandler());

app.listen(PORT, () => console.log(`API Server listening on port ${PORT}`));
