from sqlalchemy.orm import Session
import models
import schemas

def get_project(db: Session, project_id: int):
    return db.query(models.Project).filter(models.Project.id == project_id).first()

def get_projects(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Project).offset(skip).limit(limit).all()

def create_project(db: Session, project: schemas.ProjectCreate):
    db_project = models.Project(**project.dict())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

def get_skills(db: Session):
    return db.query(models.Skill).all()

def create_skill(db: Session, skill: schemas.SkillCreate):
    db_skill = models.Skill(**skill.dict())
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    return db_skill

def create_contact_message(db: Session, contact: schemas.ContactForm):
    db_message = models.ContactMessage(**contact.dict())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message