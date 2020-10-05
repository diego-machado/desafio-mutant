# desafio mutant

1 - Create a network to run the container
```bash
docker network create mutant_net
```

2 - The commands below will create the api and mysql containers
```bash
docker-compose up -d
```

> If you want to generate an error, you can access <http://localhost:3333/users/download> on postman. The api will generate a table not found error and save on errors.log file in the api container.

3 - Command to enter inside the container
```bash
docker exec -it mutant_api ash
```

3 - Command to generate database from migration
```bash
npm run typeorm migration:run
```
> Every endpoint access will generate a register at access.log file
