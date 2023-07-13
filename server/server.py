from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app:FastAPI=FastAPI()

app.mount("/",StaticFiles(
    directory="../build",
    html=True
))