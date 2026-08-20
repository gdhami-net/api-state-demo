# api-state-demo

Companion repo for the post **"Kill the boolean soup"**
([gdhami.net](https://gdhami.net) — link added when the post is live).

One file, two models of API state:

- `SoupState<T>` — the boolean soup, including the impossible object
  it happily accepts.
- `ApiState<T>` — the discriminated union: four constructible states,
  narrowing per branch, and a `never`-typed default arm so a future
  fifth state breaks the build.

```bash
npm install
npx tsc -p .   # strict, noEmit — compiles clean
```

Framework-agnostic TypeScript; the post shows the Angular signal
usage. MIT license.
