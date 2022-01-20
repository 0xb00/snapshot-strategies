import { strategy as erc20BalanceOfStrategy } from '../erc20-balance-of';

export const author = '0xb00';
export const version = '0.1.0';

export async function strategy(
  space,
  network,
  provider,
  addresses,
  options,
  snapshot
) {
  const scores = await erc20BalanceOfStrategy(
    space,
    network,
    provider,
    addresses,
    options,
    snapshot
  );

  let sum = 0;
  for (const address of Object.keys(scores)) {
    const score = scores[address];
    sum += score;
  }
  const limit = sum * options.limit;

  return Object.fromEntries(
    Object.entries(scores).map((address: any) => [
      address[0],
      address[1] > limit ? limit : address[1]
    ])
  );
}
