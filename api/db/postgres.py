""" PostgreSQL database manager """

import os
from dotenv import load_dotenv
from sqlmodel import create_engine, Session, select, SQLModel, text

# Database interface
from db.database_interface import DataBaseInterface

load_dotenv()

USER = os.getenv('POSTGRES_USER')
PASSWORD = os.getenv('POSTGRES_PASSWORD')
SERVER = os.getenv('POSTGRES_SERVER')
DATABASE = os.getenv('POSTGRES_DB')
SQLALCHEMY_DATABASE_URL = f"postgresql://{USER}:{PASSWORD}@{SERVER}/{DATABASE}"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SQLModel.metadata.create_all(engine)


class Postgres(DataBaseInterface):
    def __init__(self, table):
        self.table = table

    def get_many_filters(self, filters):
        with Session(engine) as session:
            statement = select(self.table) \
                .where(text(sql_filter_movies(filters))) \
                #.offset(index_init) \
                #.limit(total)
            results = session.exec(statement).all()
            return results

    def get_slide(self, filters):
        with Session(engine) as session:
            statement = select(self.table) \
                .order_by(text('RANDOM()')) \
                .limit(5)
            results = session.exec(statement).all()
            return results


def sql_filter_movies(filters):
    response = ''
    if filters['genre']:
        response = f"genre LIKE '%{filters['genre']}%'"
    if filters['year']:
        if response == '':
            response = f"EXTRACT(YEAR FROM release_date)={filters['year']}"
        else:
            response = response + f" and EXTRACT(YEAR FROM release_date)={filters['year']}"
    if filters['title']:
        response = f"title ILIKE '%{filters['title']}%'"
    return response
