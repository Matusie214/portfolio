# Portfolio Website

A modern, responsive portfolio website built with Next.js and FastAPI.

## 🚀 Features

- **Frontend**: Next.js with React, TypeScript, and Tailwind CSS
- **Backend**: Python FastAPI with SQLAlchemy
- **Database**: SQLite for development
- **Deployment**: Ready for Netlify deployment

## 📁 Project Structure

```
portfolio/
├── portfolio/          # Next.js frontend
│   ├── src/
│   │   ├── app/        # Next.js app router
│   │   └── components/ # React components
│   └── netlify.toml    # Netlify configuration
└── backend/            # Python FastAPI backend
    ├── main.py         # FastAPI app
    ├── models.py       # Database models
    ├── schemas.py      # Pydantic schemas
    └── crud.py         # Database operations
```

## 🛠️ Local Development

### Frontend

```bash
cd portfolio
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## 🌐 Deployment

This project is configured for deployment on Netlify. Simply:

1. Push to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## 🎨 Customization

- Update personal information in components
- Add your projects to the Projects section
- Modify skills and experience in respective components
- Update contact information

## 📱 Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal information and skills overview
- **Projects**: Portfolio of work with links
- **Skills**: Technical skills categorized by type
- **Contact**: Contact form and social links