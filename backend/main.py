from fastapi import FastAPI, Request, status, Depends
from fastapi_users import FastAPIUsers
from auth.auth import auth_backend
from auth.schemas import UserRead, UserCreate
from auth.DataBase import User
from auth.manager import get_user_manager
app = FastAPI ()

fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)


app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth/jwt",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)