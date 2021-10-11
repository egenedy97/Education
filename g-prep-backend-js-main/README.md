# Usage

## How to run

### Docker and Database

Make sure to install docker for your OS [https://docs.docker.com/engine/install/]

Check that docker and docker-compose are both installed

```
$ docker -v
$ docker-compose -v
```

Run docker-compose

```
$ docker-compose up 

or

$ docker-compose up -d // detached from terminal
```

To stop docker containers

```
$ docker-compose down
```

<details>
<summary>[optional] setup pgadmin</summary>

Go to [http://localhost:5050](http://localhost:5050/)
+ setup a master password and login
```
pg-admin-email: admin@admin.com
pg-admin-pass: "root"
```
+ add new database server and add "test_db" as name
![image](https://user-images.githubusercontent.com/30159212/113638920-443ca880-9678-11eb-8190-883cb53d61f4.png)
Go to connection tab and fill like image below (password is "root") and click save
![image](https://user-images.githubusercontent.com/30159212/113639136-c88f2b80-9678-11eb-8c98-c33a437be1af.png)

</details>

### Backend server 
Run with npm start for now will add to docker-compose later

```
$ npm start
```
