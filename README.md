---

## 🏠 Airbnb Website Clone

A **full-stack clone** of Airbnb built as a **major project**, using Node.js, Express.js, MongoDB, EJS templating, authentication (Passport.js), image uploads (Cloudinary), and interactive maps (Mapbox/Maptiler). Users can register, list, edit, and book stays — just like the real Airbnb experience.

---

### 🚀 Features

* User authentication (register/login/logout)
* Secure password handling (Passport + MongoDB)
* Host can **create, edit, and delete** listings
* Cloudinary image upload with Multer
* Flash messages for success/errors
* Responsive UI with EJS templating
* Map integration using Mapbox SDK
* Form validation with Joi

---

### 🛠️ Tech Stack

| Category        | Tools/Libraries                   |
| --------------- | --------------------------------- |
| Backend         | Node.js, Express.js               |
| Database        | MongoDB + Mongoose                |
| Authentication  | Passport.js + Passport-Local      |
| Image Hosting   | Cloudinary + Multer               |
| Map Integration | @mapbox/mapbox-sdk, @maptiler/sdk |
| View Engine     | EJS + EJS-Mate Layouts            |
| Validation      | Joi                               |
| Sessions        | express-session + connect-mongo   |
| Flash Messages  | connect-flash                     |
| Environment     | dotenv                            |

---

### 📁 Folder Structure (OOP Style – `controllers`, `routes`, `models`)

```
majorproject/
├── controllers/
│   ├── listings.js
│   ├── users.js
│   └── reviews.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/
│   ├── listings.js
│   ├── users.js
│   └── reviews.js
├── views/
│   ├── partials/
│   ├── listings/
│   ├── users/
│   └── reviews/
├── public/
│   ├── css/
│   └── js/
├── app.js
├── .env
└── README.md
```

---

### 📦 Install & Run Locally

#### 1. Clone the Repo

```bash
git clone https://github.com/your-username/airbnb-clone.git
cd airbnb-clone
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Add `.env` File

Create a `.env` file and add:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=mongodb://127.0.0.1:27017/airbnb-clone
SECRET=session-secret
```

#### 4. Run the App

```bash
node app.js
```

Visit: [http://localhost:3000](http://localhost:3000)

---

### 🔐 Authentication Flow

* Uses `passport-local` and `passport-local-mongoose`
* Secure session handling via `express-session` and `connect-mongo`
* Flash messages on auth actions using `connect-flash`

---

### 🌍 Map & Geo Integration

* Uses `@mapbox/mapbox-sdk` and `@maptiler/sdk` to fetch location data
* Listings are geocoded and shown on a dynamic map
* Address entered while creating a listing gets converted to coordinates

---

### 📤 Image Uploads

* Uses `multer` for handling form uploads
* Uploads go to **Cloudinary** using `multer-storage-cloudinary`

---

### ✅ Validations

* `Joi` is used to validate form inputs server-side
* Flash messages used for feedback

---

### 🙋‍♂️ Author

**Utkarsh Sahu**
Full Stack Developer | BCA Student
[LinkedIn](https://www.linkedin.com/in/your-profile) • [GitHub](https://github.com/your-username)


