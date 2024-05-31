# Movies platform

This is a website that looks like a platform for watching movies. You can apply filters or search for a specific movie. It also has pagination and a section for recommendations.

## Technologies
Technologies used within the project:

* React: 18.2.0
* FastAPI: 0.110.3
* postgres:15-alpine
* Docker: 25.0.3


## Installation

Installation and execution using docker
```
$ git clone https://github.com/Tinz21/Movies-platform.git

### Frontend
$ cd 'your_project'/views
$ docker-compose build
$ docker-compose up

### Backend
$ cd 'your_project'/api
$ docker-compose build
$ docker-compose up
```
The dataset used in this project you can find it [here](https://www.kaggle.com/datasets/disham993/9000-movies-dataset).
If you want to view database you can use pgadmin4 container.

### What does the app look like?
![main page](https://github.com/Tinz21/Movies-platform/blob/main/photo/main.png?raw=true)
![detail of a movie](https://github.com/Tinz21/Movies-platform/blob/main/photo/movie_details.png?raw=true)
![responsive view](https://github.com/Tinz21/Movies-platform/blob/main/photo/responsive.png?raw=true)
