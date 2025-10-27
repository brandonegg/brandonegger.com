# Build stage
FROM node:22-alpine AS builder

# Install pnpm
RUN npm install -g pnpm@latest

WORKDIR /app

# Copy package files for dependency installation
COPY package.json pnpm-lock.yaml ./

# Install dependencies (including devDependencies for build)
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN pnpm build

# Production stage
FROM node:22-alpine AS production

# Install pnpm
RUN npm install -g pnpm@latest

WORKDIR /app

# Copy package files for production dependencies only
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy build artifacts from builder stage
# TanStack Start builds to dist and dist-ssr
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/dist-ssr ./dist-ssr

# Copy public directory for static assets
COPY --from=builder /app/public ./public

# Expose the port (default for vite preview is 4173)
EXPOSE 4173

# Start the production server
CMD ["pnpm", "serve", "--host", "0.0.0.0"]
