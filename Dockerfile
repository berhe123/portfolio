# Multi-stage production image set for portfolio frontend + API

# --- Frontend build ---
FROM node:22-alpine AS frontend-build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY index.html vite.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json ./
COPY public ./public
COPY src ./src
RUN npm run build

# --- Backend build ---
FROM node:22-alpine AS backend-build
WORKDIR /server
COPY server/package.json ./
RUN npm install
COPY server ./
RUN npm run build && npm prune --omit=dev

# --- API runtime ---
FROM node:22-alpine AS api
WORKDIR /app
ENV NODE_ENV=production
COPY --from=backend-build /server/dist ./dist
COPY --from=backend-build /server/node_modules ./node_modules
COPY --from=backend-build /server/package.json ./package.json
EXPOSE 3001
CMD ["node", "dist/main.js"]

# --- Web (nginx) ---
FROM nginx:1.27-alpine AS web
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend-build /app/dist /usr/share/nginx/html
EXPOSE 80
