# erc20-balance-of-limited

Extends the `erc20-balance-of` strategy to limit the maximum voting power
of a user to a percentage of the total voting power.

The `limit` sets the maximum percentage voting power of any given user. For
example, `0.04` means no user can have more than 4% voting power. If the user
exceeds 4% ownership then their voting power is capped to 4%.
