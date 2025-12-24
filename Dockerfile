FROM node:20-alpine AS build
RUN apk update && \
    apk add --no-cache openjdk17 maven
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build-keycloak-theme

FROM scratch
COPY --from=build /app/dist_keycloak/keycloak-theme-for-kc-all-other-versions.jar .
