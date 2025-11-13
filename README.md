# Deploy

```sh
docker compose up --build -d
```

# Build images

## backend

```sh
docker build -f ./backend/Dockerfile ./backend
```

## frontend

```sh
docker build -f ./frontend/Dockerfile ./frontend
```

## Обоснование выбранных библиотек

lucide-react - для быстрого доступа к иконкам