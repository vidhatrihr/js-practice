from sqlalchemy import Column, String, Integer, Boolean
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Todo(db.Model):
  id = Column(Integer, primary_key=True, autoincrement=True)
  text = Column(String, nullable=False)
  is_done = Column(Boolean, nullable=False, default=False)
  is_star = Column(Boolean, nullable=False, default=False)
