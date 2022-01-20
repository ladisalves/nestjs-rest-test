# random-resp-rest

For Fastify testing purposes. Availability RESP API response generator.

## Usage

### Start a Server
Log is sent into the standard output.
```shell
yarn build
node dist/main.js
```

### GET end-point testing
Response returns fake entity after given timeout. Default timeout is 10-300 ms.

```shell
curl -w '\n\nTotal: %{time_total}s\n\n' http://localhost:3000?timeout=0
```

### POST end-point testing
Response returns fake entity after given timeout. Default timeout is 10-300 ms.

```shell
curl -X POST -H "Content-Type: application/json" -d '{"timeout": 10000}' -w '\n\nTotal: %{time_total}s\n\n' http://localhost:3000
```

### Benchmarking
You can make a benchmark for `timeout=0`.

```shell
npx autocannon -c 100 -d 5 -p 10 http://localhost:3000/bechmark
```
