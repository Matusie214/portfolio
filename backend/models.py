from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    short_description = Column(String)
    image_url = Column(String)
    demo_url = Column(String)
    github_url = Column(String)
    tech_stack = Column(String)  # JSON string of technologies
    featured = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    category = Column(String)  # frontend, backend, database, tools
    level = Column(Integer)  # 1-5 proficiency level
    icon_url = Column(String)

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    subject = Column(String)
    message = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)