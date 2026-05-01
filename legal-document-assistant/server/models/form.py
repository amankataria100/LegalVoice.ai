from sqlalchemy import Column, Integer, String, Text, Date
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Form(Base):
    __tablename__ = 'forms'

    id = Column(Integer, primary_key=True, autoincrement=True)
    full_name = Column(String(255), nullable=False)
    date_of_birth = Column(Date, nullable=False)
    address = Column(Text, nullable=False)
    email = Column(String(255), nullable=False)
    phone = Column(String(20), nullable=False)
    legal_purpose = Column(String(255), nullable=False)
    additional_details = Column(Text, nullable=True)
    urgency = Column(String(50), nullable=False)

    def __repr__(self):
        return f"<Form(id={self.id}, full_name={self.full_name}, date_of_birth={self.date_of_birth})>"