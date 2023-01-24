from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

fake_user = [
    {}
]

@app.post("api/register")
async def register():
    return 