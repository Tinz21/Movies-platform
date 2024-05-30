""" Database connection interface """

# Database engine
from db.postgres import Postgres


class Database(Postgres):
    pass
