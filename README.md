# react-library-rollup

Boilerplate for Resact with Typescript with rollup.js (not webpack)

**peerDependencies:**

Nel `package.json` la voce `peerDependencies` indica che il nostro bundle (libreria) ha bisogno delle seguenti dipendenze per poter funzionare. Il caso d'uso d'esempio (e di questo caso) e per lo sviluppo di plugin.

Essendo un plugin React la "peerDependencie" sarà React (versione 16 o 17)

## Rollup.js

**Rollup.js vs Webpack:**

Rollup.js è un alternativa a Webpack (entrambi module bundle) la principale differenza che Rollup.js ha il "Node polifilly" per `import` o `export`.

webpack e Rollup richiedono entrambi un file di configurazione che specifichi voce, output, caricatori, plug-in, trasformazioni, ecc. Tuttavia, c'è una leggera differenza:

1. Il rollup ha polyfill di nodi per l'importazione / esportazione, ma il webpack no.
2. Il rollup supporta i percorsi relativi in config, ma il webpack no, motivo per cui utilizzi path.resolve o path.join.

**Dipendenze e configurazione:**

Le principali dipendenze per poter usare Rollup.js in modo da poter trasformare React TS in Javascript in vari moduli: UMD, CommoJS, ESNext.

Pacchetti core:

1. Core-js. [More info](https://www.npmjs.com/package/core-js)
2. `@babel/core` e `@babel/plugin-transform-runtime` - Transpiler core
3. Rollup.js con le seguenti estensioni: plugin-commonjs, plugin-node-resolver, plugin-replace

**File di configurazione di Rollup:**

Rollup.js si basa sui files di configurazione contenuti nella cartella `./scripts/rollup`.
Per maggiori info sulle varie [esportazioni javascript](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)

1. `rollup.config.js` - Configurazione per esportare in : cjs, amd, umd.
2. `createRollupConfig.js` - Funzione che genera la dist alla quale passo l'oggetto di config definito nel file al punto 1.

Esistono altre due file di configurazione per Inernet Explorer 11 (con relativo file tsconfig.ie11.json) e per ESM (Ecma Standard Module, import - export).

## Linter + Github

**Prettier & Eslint:**

Per una correta formattazione e sintassi del codice si userà `prettier` e `eslint`. Entrmambi hanno il file di configurazione e diversi plugin. Nello specifico i plugin usati sono:

1. `@typescript-eslint/eslint-plugin` & `@typescript-eslint/parser`
2. `eslint-config-prettier`
   Disattiva tutte le regole non necessarie o che potrebbero entrare in conflitto con Prettier. Nota che questa configurazione disattiva solo le regole, quindi ha senso usarla solo insieme a qualche altra configurazione.
3. `eslint-plugin-cypress` - Supporto alla libreria di test Cypress
4. `eslint-plugin-prettier` - Da usare perforza con il punto 2. Quando la formattazione non "matcha" segnala i problemi come singoli problemi eslint.
5. `eslint-plugin-react` - Rules preset for React
6. `eslint-plugin-react-hooks` - React rule extension for hooks

**NB:** Nelle regole di eslint sono ammessi tutti i tipi di console(error, warn, log). In fase di compilazione (per la prod) i `console.log()` vengino strippati.

**Github - Husky & Staged:**

Grazie a una combo di `husky` e `lint-staged` il codice deve ad ogni commit viene controllato e lintato (fix) prima di fare un commit.

Entrambe queste estensioni non hanno file di configurazione ma vegono configurati nel `package.json`

## Utility

Elenco di script e pacchetti utility per lo sviluppo e mantenimento della repo.

1. `npm run package:check`, controlla la qualità del package (skypack/package-check).
2. `npm run bundlesize` - Esegue una build e controlla la grandezza rispetto alla configurazione. La configurazione viene definita nel package.json
3. `npm run clean` - Pulisco la cartella dist

## Scripts

Elenco degli scripts disponibili in NPM:

1. `npm run bundlesize` - Esegue la build e il controllo del peso secondo i parametri definiti nel package.
2. `check:package`- Controlla il contenuto e la sintassi del package.json
3. `npm run cp:dts` - Usando il pacchetto copyfiles copio i tipi Typescript del plugin
4. `npm run dev` - Avvia lo sviluppo con storybook
5. `npm run test` - Esegue i test
6. `npm run build` - Crea direttamenta attraverso Rollup.js la build del progetto in vari formati js (CommoJs, umd, esnext)
7. `npm run prepublishOnly` - Crea al build per la pubblicazione, quindi prima esegue controlli con il linter, avvia i test e poi crea la build.
8. `npm run lint` - Controlla errori di sintatti e di forma
9. `npm run lint:fix` - Risolve, dove possibile, eventuali errori di sintatti o forma

## Build

La build è una transpilazione da Typescript a ES5 nei seguenti formati:

1. CommonJs - Sviluppo e produzione
2. ESM - Sviluppo e produzione
3. UMD - Sviluppo e produzione
4. ie11 - Sviluppo e produione

Vengono inoltre clonati tutti i `Types` di Typescript.  
I tipi all'interno del `src` devono essere collocati nella cartella `/src/types/`

Inoltre è possibile attraverso il comando `npm run check:package` creare un build e controllarne il peso rispetto a quello massimo impostto.

## Testing

**NB:** Enzyme non ha ancora rilasciato `Adapter()` ufficiale per la versione 17 di React.  
Quindi il progtto è stato "wongraded" alla versione di React e React Dom `React 16.14.0`.

Per i test verrà usata il solito `Jest` e `Cypress` [Visita il sito](https://www.cypress.io/).

**e2e Cypress:** Ho deciso di integrare per la maggior parte test **e2e** e non **unit test** t1ramite Cypress.  
I test di Cypress vengono assegnati tramite URL. Quindi è necessario compilare e avviare il plugin nel browser.  
Quindi è necessaria una configurazione TS per integrare la libreria compilata in "componenti esempio" e avviarli.
Tutta la configurazione per l'app di test e2e si trova nella folder `./app`.  

Per testare l'integrazione della library come "pacchetto" `import * from 'react-magic-form';` esiste un comando

**JEST + ENZYME:**

Jest è stato integrato con Enzyme. Pensavo fossero più easy, ma essendo complesso il plugin i tes non sono immediati per un noob.
Studiare e partire facendo "UNIT TEST" base. Anche vero che per l'esigenze del progetto e pe un fattore tempo i test migliori sono quelli **e2e**. 

**BYPASS LINT X GIT:**

Dal package.json rimuovere la sezione relativa a `husky`


"husky": {
    "hooks": {
      "pre-commit": "npm run lint:fix && npm run lint"
    }
  },
  "lint-staged": {
    "*.{js,ts,tsx}": [
      "npm run lint:fix"
    ],
    "*.{md,json,yml}": [
      "prettier --write"
    ]
  }

  "prepublishOnly": "npm run lint:fix && npm run lint && npm run lint:types && npm test && npm run build",