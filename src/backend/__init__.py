from flask import Flask
from .config import Config

app = Flask(__name__)
# Apply configuration from class
app.config.from_object(Config)

# Test value of variable that may or may not come from the environment
# print("SECRET KEY IS: ", app.config["SECRET_KEY"])


@app.route("/test")
def hello():
    # Returning something to see with react
    return {"Name": "tia", "programming": "python"}


@app.route("/")
def home_page():
    return {"Title": "Welcome to Tia's Jeopardy Maker!"}
