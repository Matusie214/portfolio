from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List

class ProjectBase(BaseModel):
    title: str
    description: str
    short_description: str
    image_url: Optional[str] = None
    demo_url: Optional[str] = None
    github_url: Optional[str] = None
    tech_stack: str
    featured: bool = False

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class SkillBase(BaseModel):
    name: str
    category: str
    level: int
    icon_url: Optional[str] = None

class SkillCreate(SkillBase):
    pass

class Skill(SkillBase):
    id: int

    class Config:
        from_attributes = True

class ContactForm(BaseModel):
    name: str
    email: str
    subject: str
    message: str

class ContactMessage(ContactForm):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True