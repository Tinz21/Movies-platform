import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from views import router as movie

app = FastAPI()

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
