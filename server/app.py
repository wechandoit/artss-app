from flask import Flask
from flask_cors import CORS  # communicate with express
import os
from dotenv import load_dotenv
from models import db
from routes import bp

### setup ###

app = Flask(__name__)
load_dotenv() # load env variables


CORS(app,
    origins=['http://localhost:5173'],
    methods=['GET', 'POST', 'PATCH', 'DELETE'],
    allow_headers=['Content-Type', 'Authorization'],
    supports_credentials=True
    )  # enable cross-origin requests for front end

DATABASE_URL = os.getenv("DATABASE_URL")

app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
app.register_blueprint(bp)

if __name__ == "__main__":
    # app = create_app()
    app.run(debug=True)
