""" Views movies """

from typing import Optional
from fastapi import APIRouter, status, Path, Request
from db.connection_interface import Database
from models.models import Movies, Movies_return


router = APIRouter()


@router.get(
    path='/{init}&{end}',
    status_code=status.HTTP_200_OK,
)
def get_movies(request: Request):
    """

    :param request: {'title': '', 'gender': '', 'year': ''}


    :return: [{'title': '', 'gender': '', 'release_date': '', 'url': ''}, ...]
    """
    table = Database(Movies)
    filters = request.query_params
    movies = table.get_many_filters(filters=filters)
    for i in range(len(movies)):
        movies[i].release_date = movies[i].release_date.year
    return movies


@router.get(
    path='/slides',
    status_code=status.HTTP_200_OK,
    response_model=list[Movies_return],
)
def get_movie(request: Request):
    """

    :param request:
    :return:
    """
    table = Database(Movies)
    filters = request.query_params
    movies = table.get_slide(filters=filters)
    for i in range(len(movies)):
        movies[i].release_date = movies[i].release_date.year
    return movies
