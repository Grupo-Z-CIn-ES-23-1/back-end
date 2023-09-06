# ExpressJS API

This is an API made in Express.JS that supplies an Flood Forecasting app.
For the Final Project of Software Engineering Class at Information Systems B.Sc. in UFPE, 2023.

<br>

![image](https://github.com/Grupo-Z-CIn-ES-23-1/back-end/assets/15808208/c9df0415-37d0-4a9f-ba8f-a0146f23c3fc)


---

[You can check this app`s Database Model here](/docs/Database_Model.md)

[You can check how to deploy this app using AWS Elastic BeanStalk here](/docs/Deploy_Notes.md)

[You can check test notes and draft here](/docs/Test_Notes.md)

You can test this API locally using Postman:
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/19132676-01d1a3fc-3e30-4aac-a455-6b9532cd2670?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D19132676-01d1a3fc-3e30-4aac-a455-6b9532cd2670%26entityType%3Dcollection%26workspaceId%3Dc253871f-f102-4203-b742-299cebd203fa)

---

<br>

# Running in dev mode

Clone this repository  
Set up the .env file with mongodb uri, and run these commands:

```cmd
npm install
```

```cmd
npm start-dev
```

<br>

# Testing

Just run

```cmd
npm test
```

to execute tests for this app  
<br>

# Docker / Deploy

You can use tools like Docker Desktop to deploy this project in your local machine.

Clone this repository  
Set up the .env file with mongodb uri and run this command:

```cmd
docker compose up
```

You can also check [how to deploy using AWS Elastic BeanStalk](/docs/Deploy_Notes.md)
