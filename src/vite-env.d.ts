/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPERHERO_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
