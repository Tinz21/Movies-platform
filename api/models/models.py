import datetime

from sqlmodel import SQLModel, Field


class Movies(SQLModel, table=True):

    id: int = Field(default=None, primary_key=True)
    release_date: datetime.date
    title: str
    overview: str
    popularity: str
    vote_count: int
    vote_average: float
    original_language: str = Field(max_length=2)
    genre: str
    poster_url: str


class Movies_return(SQLModel):
    title: str
    release_date: int
    poster_url: str

