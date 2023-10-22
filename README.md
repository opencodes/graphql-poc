# contact-svc

postgres://rkjha.it.in:W9Zcf1iFEHsv@ep-tight-snow-31319187.us-east-2.aws.neon.tech/neondb
Contact Micro Service
docker-compose --env-file .docker.env build && docker-compose --env-file .docker.env up --detach

## Folder Structure

### entity

- src
  - entity

- dependencies : None

### Service

- src
  - service

- dependencies
  - core
  - parallel
  - framework

### Framework

This folder contains the code for middleware, error handlers, authentication, authorization etc. Mostly duplicated for each microservice to maintain consistency across services.

- src
  - framework
    - middlewares
    - error-handlers
    - authenticate
    - authorization
    - environment

- dependencies
  - None


### Server — Routes & Controllers

The controllers — may it be Express or any other framework, you’ll want to separate the infra routes from the API itself
Another issue is versioning your API — v1,v2, and so on to keep track of the latest API and backwards compatibility.

- src
  - server
    - routes
    - controllers
      - v1
        - controller.ts
      - v2
        - controller.ts
    - index.ts

- dependencies
  - service
  - framework