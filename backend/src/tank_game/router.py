from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from ..datebase import get_async_session
from models import tank

router = APIRouter (
    prefix='/game',
    tags= ['game']
)

@router.get("/")
async def get_one_tank(session: AsyncSession = Depends(get_async_session)):
    query = select(tank).where()
    return 'game'