# Feedback Frontend
React Frontend for [Feedback System Backend](https://github.com/dulajra/feedback-system-backend). 

## Developer Guide 
### How to run on local machine
#### Prerequisite
1. Node v10.x.x or higher (Should work with v8.x.x also - Not tested)
2. Yarn

Run the following command to install node modules

```
yarn 
```

Set the following environment variables on the host machine. 

```
export REACT_APP_SERVICE_URL=http://localhost:8080
```

Start the frontend in development mode

```
yarn start
```

#### How to access
Hit [http://localhsot:3000](http://localhsot:3000) on your web browser.

### How to run with docker 
#### Prerequisite
1. Docker
2. Docker Compose

Set the following environment variables on the host machine.

```
export SERVICE_URL=http://localhost:8080
```

Start frontend container.

```
docker-compose -f CICD/docker/docker-compose.yml up --build
```

Use the following command if you want to run in background.
 
```
docker-compose -f CICD/docker/docker-compose.yml up --build -d
```

Use the following command if you want to stop the containers running in the background mode.

```
docker-compose -f CICD/docker/docker-compose.yml down
```

#### How to access
Hit [http://localhsot:8888](http://localhsot:8888) on your web browser.

**Note:** When running without docker 3000 port is used. When running with docker 8888 port is used. 
You can configure this in `/CICD/docker/docker-compose.yml` file. 
