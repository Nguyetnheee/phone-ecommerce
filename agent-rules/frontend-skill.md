# FRONTEND SKILL — REACT TYPESCRIPT

Frontend stack:
- React
- TypeScript
- Vite
- TailwindCSS
- React Router
- Axios

Folder rules:
- pages/: route-level screens
- components/ui/: small reusable UI components
- components/layout/: Navbar, Footer, Header
- services/: API calls
- types/: TypeScript interfaces
- hooks/: custom React hooks
- utils/: helper functions
- constants/: static constants

Component rules:
- Use function components.
- Use TypeScript interfaces for props.
- Keep components small.
- Use TailwindCSS only for styling.
- Mobile-first responsive design.
- Do not put API calls directly inside reusable UI components.
- Do not duplicate button/input/card styles.

Naming:
- Components: PascalCase
- Files for components: PascalCase.tsx
- Services: camelCase.service.ts
- Types: PascalCase interfaces

Example:
ProductCard.tsx
product.service.ts
Product type

Frontend output:
- Create/update only required files.
- Ensure npm run dev works.
- Ensure TypeScript has no errors.