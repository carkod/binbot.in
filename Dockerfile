# ---------- Dependencies ----------
FROM node:20.19.0 AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- Build ----------
FROM node:20.19.0 AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- Runtime ----------
FROM node:20.19.0-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=4000

COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts && npm cache clean --force

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

USER node
EXPOSE 4000

CMD ["npm", "run", "start"]
