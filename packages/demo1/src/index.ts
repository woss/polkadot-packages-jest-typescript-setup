import { stringToHex } from '@polkadot/util'

export function usePolkadotUtils(value: string): string {
  return stringToHex(value)
}
