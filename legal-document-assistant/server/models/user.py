from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    full_name = Column(String, nullable=False)
    date_of_birth = Column(Date, nullable=False)
    email = Column(String, unique=True, nullable=False)
    phone = Column(String, nullable=False)
    address = Column(String, nullable=False)

    def __repr__(self):
        return f"<User(id={self.id}, full_name={self.full_name}, email={self.email})>"