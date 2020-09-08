# Build Phase
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
# /app/build <-- result of this phase

# Run Phase
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
