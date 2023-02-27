from sqlalchemy import Table, Column, Integer, String



tank = Table(
    'tank',
    Column('id', Integer, primary_key=True),
    Column('name', String, unique=True),
    Column('countru')
)

country = Table(
    'country',
    Column('id', Integer, primary_key=True),
    Column('name', String)
)
