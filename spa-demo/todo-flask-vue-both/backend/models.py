from sqlalchemy import Column, String, Boolean, Integer
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()


class Todo(db.Model, SerializerMixin):
  id = Column(Integer, autoincrement=True, primary_key=True)
  text = Column(String, nullable=False)
  is_done = Column(Boolean, default=False)
  is_star = Column(Boolean, default=False)
