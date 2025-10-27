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

WORKDIR /app

# (nitro) server build bundle output
COPY --from=builder /app/.output ./.output

# Expose the port (default for vite preview is 4173)
EXPOSE 3000

# Start the production server
CMD ["node", ".output/server/index.mjs"]
