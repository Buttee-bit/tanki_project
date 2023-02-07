from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .auth.base_config import  auth_backend, fastapi_users
from .auth.schemas import UserRead, UserCreate


app = FastAPI(
    title="Tank API"
)

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:3000",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth",
    tags=["Auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["Auth"],
)
@app.get('/api')
async def get_api():
    print('Подключение к FASTAPI')
    return {'message': 'Подключение к FASTAPI'}