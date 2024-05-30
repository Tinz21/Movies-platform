""" Views movies """
from typing import Optional
from fastapi import APIRouter, status, Request, Query
from db.connection_interface import Database
from app.movies.models import Movies, Movies_return


router = APIRouter()


@router.get(
    path='/{init}&{end}',
    status_code=status.HTTP_200_OK,
    response_model=Movies,
    tags=['Movies'],
    summary='Get a list of movies'
)
def get_movies(
        title: Optional[str] = Query(None),
        year: Optional[int] = Query(None),
        genre: Optional[str] = Query(None)
):
    """
    Get movies

    This path operations get a filtered list of movies
    """
    table = Database(Movies)
    filters = {'title': title, 'genre': genre, 'year': year}
    movies = table.get_many_filters(filters=filters)
    for i in range(len(movies)):
        movies[i].release_date = movies[i].release_date.year
    return movies


@router.get(
    path='/slides',
    status_code=status.HTTP_200_OK,
    response_model=list[Movies_return],
    tags=['Movies'],
    summary='Get random movies'
)
def get_movie(request: Request):
    """
    Get random movies

    This path operations get a list of 5 random movies
    """
    table = Database(Movies)
    filters = request.query_params
    movies = table.get_slide(filters=filters)
    for i in range(len(movies)):
        movies[i].release_date = movies[i].release_date.year
    return movies
