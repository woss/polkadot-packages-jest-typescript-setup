# polkadot-packages-jest-typescript-setup

Currently this setup works for the:

- Polkadot api `4.10.1`
- jest `27.0.0-next.9`
- ts-jest `27.0.0-next.12`
- pnpm

This intentionally uses pnpm because i use it in the other project and need a place to test. So All PRs suggestions and improvements are welcome.

I hope this repo becomes good place for the ref on how to setup polkadot api and utils after they decide to change stuff again. 🙂

Make sure you see the test and change the types because these types are from [Anagolay Network](https://github.com/anagolay/node).

To install and see does this work do following:

```bash
# install pnpm then continue

# install packages
pnpm i

# check does it work
pnpm test

# if you have jest cache run this
pnpx jest --clearCache && pnpm test

```

## Failing tests when using the script

This is related to the Github issue https://github.com/polkadot-js/api/issues/3430

to see this in action run `pnpm test:withScript`
