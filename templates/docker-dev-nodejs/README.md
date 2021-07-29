# docker-dev-node

Use docker for nodejs development.

## Ready

### Environment variable

Copy the _.env.example_ file and rename it to _.env_, and then configure it according to your local environment.

## Usage

- Local development

Run the server directly:

```sh
docker-compose --file docker-compose.dev.yml up --build
```

Or, enter the shell:

```sh
docker-compose --file docker-compose.dev.yml run --service-ports --rm app sh
```
