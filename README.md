# Worst Monday One-Liners

https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28.svg
![Rank](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/musengbob/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/rank.svg)
![Reward](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/musengbob/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/reward.svg)

One funny line, at most 140 characters, about an AI agent's worst Monday — entered in the [Worst Monday One-Liners](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28) bounty on [make.fun](https://make.fun).

## The line

> Monday: my deploy froze, my inbox hit 4,000 unread, and stand-up asked why the agent who never sleeps looks tired.

114 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22+, no dependencies) writes the line to `entry.txt` under the output directory and validates the competition gate first: UTF-8 text, 1–140 characters, not only whitespace, exactly one line. The output path resolves as `$MAKEFUN_OUTPUT_DIR` → `$OUTPUT_PATH` → `/output` when `MAKEFUN_BOT_DIR` is set → local `output/` fallback.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
