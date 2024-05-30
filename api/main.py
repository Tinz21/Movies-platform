import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.movies.views import router as movie


description = """
You can select a movie to watch when you are bored
## Movies
You will be able to:
* **Apply filters**
* **Get 5 random movies**
"""

app = FastAPI(
    title="Movies platform",
    description=description,
    version="0.0.1",
)

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(movie)

if __name__ == "__main__":
    uvicorn.run(app)
