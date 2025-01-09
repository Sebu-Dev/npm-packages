# My Logo Package

Mein Logo-Paket mit Animationen und Tailwind-Styling, das in verschiedenen Projekten verwendet werden kann.

## Dependencies

- `react`
- `framer-motion`
- `tailwind.css`

## Installation

Installiere das Paket mit npm:

```bash
npm i sebu-dev-logo```

```typescript
import Logo from "sebu-dev-logo";
```

## Verwendung

Importiere das Logo in deinem Projekt und füge es an der gewünschten Stelle ein:

```typescript
import React from "react";
import Logo from "my-logo-package"; // Logo-Paket importieren

const App = () => (
  <div>
    <h1>Willkommen auf meiner Seite!</h1>
    <Logo /> {/* Das Logo einfügen */}
  </div>
);

export default App;
```

### Optional: Anpassung von Animation und Styling

Du kannst die Animationen und das Styling des Logos durch Props anpassen. Hier ein Beispiel, wie du das Verhalten ändern kannst:

```typescript
<Logo
  className="custom-class"    // Eigene Tailwind-Klassen hinzufügen
  whileHover={{ scale: 1.2 }}  // Hover-Animation ändern
  whileTap={{ scale: 0.8 }}    // Tap-Animation ändern
/>
```
## Voraussetzungen

- Dein Projekt sollte **React** installiert haben.
- Dieses Paket nutzt **framer-motion** für Animationen. Stelle sicher, dass es als Abhängigkeit installiert ist (es wird als Peer-Abhängigkeit installiert).

## Lizenz

MIT

### Was du beachten solltest:

- **Dependencies**: Unter "Dependencies" wird klar aufgelistet, was für die Nutzung des Pakets erforderlich ist, sodass der Benutzer schnell sehen kann, was er ggf. installieren muss, wenn es nicht bereits im Projekt vorhanden ist.
- **Installation**: Die `npm install`-Anweisung ist wichtig, um das Paket korrekt zu installieren.
- **Anpassung**: Die Anpassung des Logos wird optional angeboten, damit Benutzer zusätzliche Flexibilität haben.
```
