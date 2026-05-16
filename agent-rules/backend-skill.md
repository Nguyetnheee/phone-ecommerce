# BACKEND SKILL — SPRING BOOT

Backend stack:
- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- MySQL
- Lombok
- Validation

Package structure:
com.phoneecommerce.backend
├── config
├── controller
├── dto
├── entity
├── repository
├── service
├── exception
└── mapper

Layer rules:
- Controller handles HTTP requests only.
- Service contains business logic.
- Repository handles database access.
- Entity maps database tables.
- DTO is used for request/response data.
- Do not expose entity directly if DTO is available.
- Keep validation in DTO where possible.
- Use constructor injection, not field injection.

API rules:
- Base path should start with /api
- Use RESTful naming:
  - GET /api/products
  - GET /api/products/{id}
  - POST /api/products
  - PUT /api/products/{id}
  - DELETE /api/products/{id}

Response rules:
- Return meaningful HTTP status codes.
- Do not return raw stack traces.
- Use clear error messages.

Security rules:
- Keep /api/health public.
- Do not implement JWT unless requested.
- Do not disable security globally without explanation.

Backend output:
- Create/update only required files.
- Ensure ./mvnw spring-boot:run works.
- Mention database impact if entity changes.