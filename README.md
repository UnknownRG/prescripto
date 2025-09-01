# Prescripto 🩺

Prescripto is a full-stack doctor appointment management system that allows patients to easily book appointments, manage profiles, and doctors to handle schedules. The platform provides an intuitive user interface and secure backend services.

--------------------------------------------------
🚀 Tech Stack
--------------------------------------------------

Frontend:
- React.js (with Vite)
- Tailwind CSS
- Axios
- Context API
- shadcn/ui components

Backend:
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cloudinary (for image upload)

--------------------------------------------------
✨ Features
--------------------------------------------------

- Secure user authentication (JWT-based)
- Doctor profile management (specialization, experience, fees, availability)
- Appointment booking & management
- Patient profile with address & medical history
- Image upload with Cloudinary
- Admin dashboard (manage doctors, appointments, users)
- Responsive UI with modern design


--------------------------------------------------
⚡ Installation & Setup
--------------------------------------------------

1) Clone the Repository
   git clone https://github.com/your-username/prescripto.git
   cd prescripto

2) Setup Backend
   cd backend
   npm install

   Create a .env file in backend folder with:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   Run backend:
   npm start

3) Setup Frontend
   cd ../frontend
   npm install

   Create a .env file in frontend folder with:
   VITE_BACKEND_URL=http://localhost:5000

   Run frontend:
   npm run dev

--------------------------------------------------

