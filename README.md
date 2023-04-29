## Description

API en Nest con conexion a mongodb con autenticación basica de usuario y contraseña

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## AUTENTICACION

```bash
POST /auth/login

{
  "user": "test",
  "password": "test"
}
```

Esto devuelve un Access Token: 

```bash
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJzdWIiOiIxIiwiaWF0IjoxNjgyNzg3NTAxLCJleHAiOjE2ODI3ODc1NjF9.kFudp1xd5q206_6suO5h0rBb2bQDSFboIVqWIaozWt8"
}
```
Este access token debe pasarse como metodo de autenticación en las request.
Por ejemplo:

```bash
curl --location 'localhost:3000/users/' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJzdWIiOiIxIiwiaWF0IjoxNjgyNzg3NTAxLCJleHAiOjE2ODI3ODc1NjF9.kFudp1xd5q206_6suO5h0rBb2bQDSFboIVqWIaozWt8'
```

## USUARIOS

Para crear un usuario deberá hacerse una POST request con un body de tipo multipart/form-data

```bash
curl --location 'localhost:3000/users/' \
--form 'profilePicture=@"/path/to/file"' \
--form 'name="mati"' \
--form 'lastName="cazas"' \
--form 'address="calle falsa 123"' \
--form 'password="123456password"'
```

Para obtener un usuario:

```bash 
curl --location 'localhost:3000/users/' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJzdWIiOiIxIiwiaWF0IjoxNjgyNzg4NTYxLCJleHAiOjE2ODI3ODg2MjF9.WX-qhj1LNxPfRyzInZ-PUhG9QY3odPFvZ_OjjojjYIo'
```

Para editar un usuario:

```bash
curl --location --request PUT 'localhost:3000/users/644b0019254495752d4e25e7' \
--form 'profilePicture=@"/path/to/file"' \
--form 'name="aaaaaaaa"' \
--form 'lastName="cazas"' \
--form 'address="calle falsa 123"' \
--form 'password="123456password"'
```

