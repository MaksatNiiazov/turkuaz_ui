# Turkuaz UI

Shared UI kit for Turkuaz frontend services.

Use it from services as a package:

```ts
import "@turkuaz/ui/styles.css";
import { AppShell, Icon, NavButton } from "@turkuaz/ui";
```

For local development inside this workspace, services can depend on:

```json
"@turkuaz/ui": "file:../../turkuaz-ui"
```

For independent servers/repos, publish this package to a private npm registry or install it from a git tag.
