Perfect! I'll create a comprehensive, senior-level README.md file for your GitHub repository that incorporates both images you've attached. Here's the complete, professional README with enhanced visual elements:

---

# 🏠 **Airbnb Clone** - Full-Stack Rental Marketplace Platform

<div align="center">

![Airbnb Clone Architecture](elds.io/badge/Node.js-20.x-339933?logo=node.js&https://img.shields.io/badge/Express.js-4.x-000000?logo=goDB](https://img.shields.io/badge/MongoDB-7.x-47A248?logo
[![Cloudinary](https://img.shields.io/badge/Cloudinary-CDN-3448C5?logo=cloudinary&logoColormg.shields.io/badge/Mapbox-SDK-000000?logo=mapbox&logoIT](https://img.shields://opensource.org/licenses/MITs.io/badge/coverage-grade, full-stack rental marketplace platform built with modern web technologies**

[🎯 Features](#-features) -  [🏗️ Architecture](#-system-architecture) -  [🚀 Installation](#-installation--setup) -  [📖 API Docs](#-api-reference) -  [🤝 Contributing](#-contributing)

***

### 📊 **Project Stats**

![GitHub repo size](https://img.shields.io/github/repo-size/utkarshshields.io/github/stars/utkarshahu/AirB://img.shields.io/github/forks/utkarshahuio/github/last-commit/utkarshahu/AirBio/github/contributors/utkarshahu/AirBnB 📋 **Table of Contents**

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Environment Configuration](#-environment-configuration)
- [Usage Guide](#-usage-guide)
- [API Reference](#-api-reference)
- [Authentication Flow](#-authentication-flow)
- [Database Schema](#-database-schema)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Performance Optimization](#-performance-optimization)
- [Security Best Practices](#-security-best-practices)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Contact](#-contact)

***

## 🎯 **Overview**

This **Airbnb Clone** is a comprehensive, production-ready rental marketplace platform that replicates core Airbnb functionalities. Built with a modern tech stack following industry best practices, it demonstrates advanced full-stack development capabilities including MVC architecture, RESTful API design, secure authentication, cloud storage integration, and real-time geolocation services.

### **Why This Project?**

This project showcases:
- ✨ **Industry-standard architecture** with clean separation of concerns
- 🔒 **Enterprise-level security** implementations
- 🚀 **Scalable design patterns** for production environments
- 📱 **Responsive, modern UI/UX** principles
- ⚡ **Performance optimization** techniques
- 🧪 **Test-driven development** approach

### **Key Highlights**

- **Scalable MVC Architecture** with separation of concerns
- **Secure Authentication** using Passport.js with session management
- **Cloud-based Media Management** via Cloudinary CDN
- **Interactive Map Integration** using Mapbox/Maptiler SDK
- **Comprehensive Validation** with Joi schema validation
- **Flash Messaging System** for enhanced user experience
- **Responsive EJS Templating** with server-side rendering
- **RESTful API Design** following industry best practices

***

## ✨ **Features**

<div align="center">

![Tech Stack Overview](Airbnb-Website-Clone-visual-selection-🔐 User Management**
- ✅ Secure user registration and authentication
- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ Session-based authentication with MongoDB store
- ✅ User profile management and customization
- ✅ Authorization middleware for protected routes
- ✅ Password reset functionality (planned)

### **🏡 Listing Management**
- ✅ Full CRUD operations for property listings
- ✅ Multi-image upload with Cloudinary integration
- ✅ Automatic image optimization and CDN delivery
- ✅ Geolocation-based property mapping
- ✅ Advanced search and filter functionality
- ✅ Rich text description editor
- ✅ Category-based listing organization

### **⭐ Review & Rating System**
- ✅ User reviews and 5-star rating system
- ✅ Review ownership validation
- ✅ Automatic average rating calculations
- ✅ Review moderation capabilities
- ✅ Helpful/unhelpful review voting (planned)

### **🗺️ Interactive Map Integration**
- ✅ Interactive property location display
- ✅ Real-time geocoding for address-to-coordinates conversion
- ✅ Custom map markers and popups
- ✅ Cluster view for multiple listings
- ✅ Location-based search and filtering (future enhancement)

### **🔒 Security Features**
- ✅ CSRF protection with tokens
- ✅ Input sanitization against XSS attacks
- ✅ SQL/NoSQL injection prevention via Mongoose ODM
- ✅ Secure session management with httpOnly cookies
- ✅ Environment variable protection
- ✅ Rate limiting for API endpoints (planned)
- ✅ HTTPS enforcement in production

### **📱 User Experience**
- ✅ Responsive design for all devices
- ✅ Fast page load times
- ✅ Intuitive navigation
- ✅ Real-time form validation
- ✅ Flash messages for user feedback
- ✅ Breadcrumb navigation
- ✅ Search autocomplete (planned)

---

## 🔧 **Technology Stack**

### **Backend Technologies**
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **Node.js** | 20.x | JavaScript runtime environment | [Docs](https://nodejs.org/docs/) |
| **Express.js** | 4.19.x | Web application framework | [Docs](https://expressjs.com/) |
| **MongoDB** | 7.x | NoSQL database | [Docs](https://www.mongodb.com/docs/) |
| **Mongoose** | 8.x | MongoDB object modeling (ODM) | [Docs](https://mongoosejs.com/docs/) |

### **Authentication & Security**
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **Passport.js** | 0.7.x | Authentication middleware | [Docs](http://www.passportjs.org/) |
| **Passport-Local** | 1.0.x | Local authentication strategy | [Docs](http://www.passportjs.org/packages/passport-local/) |
| **Passport-Local-Mongoose** | 8.x | User authentication plugin | [Docs](https://github.com/saintedlama/passport-local-mongoose) |
| **express-session** | 1.18.x | Session middleware | [Docs](https://github.com/expressjs/session) |
| **connect-mongo** | 5.x | MongoDB session store | [Docs](https://github.com/jdesboeufs/connect-mongo) |
| **bcrypt** | 5.x | Password hashing | [Docs](https://github.com/kelektiv/node.bcrypt.js) |

### **File Upload & Cloud Storage**
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **Multer** | 1.4.x | File upload middleware | [Docs](https://github.com/expressjs/multer) |
| **Cloudinary** | 2.x | Cloud image storage & CDN | [Docs](https://cloudinary.com/documentation) |
| **multer-storage-cloudinary** | 4.x | Cloudinary storage engine | [Docs](https://github.com/affanshahid/multer-storage-cloudinary) |

### **Map & Geolocation Services**
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **@mapbox/mapbox-sdk** | 0.16.x | Mapbox geocoding API | [Docs](https://github.com/mapbox/mapbox-sdk-js) |
| **@maptiler/sdk** | 2.x | Maptiler mapping SDK | [Docs](https://docs.maptiler.com/sdk-js/) |

### **View Engine & Templating**
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **EJS** | 3.1.x | Embedded JavaScript templates | [Docs](https://ejs.co/) |
| **EJS-Mate** | 4.x | Layout support for EJS | [Docs](https://github.com/JacksonTian/ejs-mate) |
| **Bootstrap** | 5.x | CSS framework | [Docs](https://getbootstrap.com/) |

### **Validation & Utilities**
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **Joi** | 17.x | Schema validation | [Docs](https://joi.dev/) |
| **connect-flash** | 0.1.x | Flash messages | [Docs](https://github.com/jaredhanson/connect-flash) |
| **dotenv** | 16.x | Environment variable management | [Docs](https://github.com/motdotla/dotenv) |
| **method-override** | 3.x | HTTP method override | [Docs](https://github.com/expressjs/method-override) |
| **Morgan** | 1.10.x | HTTP request logger | [Docs](https://github.com/expressjs/morgan) |

---

## 🏗️ **System Architecture**

### **High-Level Architecture Diagram**

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENT LAYER                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │   Browser    │  │   Mobile     │  │    Tablet    │              │
│  │  (Desktop)   │  │   (Safari)   │  │   (Chrome)   │              │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘              │
│         │                 │                  │                       │
│         └─────────────────┴──────────────────┘                       │
│                           │                                          │
│                    HTTP/HTTPS Requests                               │
└───────────────────────────┼──────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     APPLICATION LAYER                                │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                    Express.js Server                           │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────────────────┐  │  │
│  │  │   Routes   │  │Controllers │  │     Middleware         │  │  │
│  │  │            │  │            │  │                        │  │  │
│  │  │ • Listings │  │ • Listings │  │  • Authentication      │  │  │
│  │  │ • Users    │  │ • Users    │  │  • Validation (Joi)    │  │  │
│  │  │ • Reviews  │  │ • Reviews  │  │  • Error Handler       │  │  │
│  │  │            │  │            │  │  • File Upload         │  │  │
│  │  │            │  │            │  │  • Session Manager     │  │  │
│  │  └────────────┘  └────────────┘  └────────────────────────┘  │  │
│  │                                                                 │  │
│  │  ┌────────────────────────────────────────────────────────┐   │  │
│  │  │                View Engine (EJS)                        │   │  │
│  │  │  • Layout Templates  • Partials  • Dynamic Content     │   │  │
│  │  └────────────────────────────────────────────────────────┘   │  │
│  └───────────────────────────────────────────────────────────────┘  │
└───────────────────────┬──────────────┬──────────────────────────────┘
                        │              │
        ┌───────────────┘              └────────────────┐
        ▼                                               ▼
┌──────────────────────┐                    ┌───────────────────────────┐
│   DATABASE LAYER     │                    │   EXTERNAL SERVICES       │
│  ┌────────────────┐  │                    │  ┌─────────────────────┐  │
│  │   MongoDB      │  │                    │  │    Cloudinary       │  │
│  │   Database     │  │                    │  │  (Image Storage)    │  │
│  │                │  │                    │  │  • Upload Images    │  │
│  │  Collections:  │  │                    │  │  • Optimize Images  │  │
│  │  • users       │  │                    │  │  • CDN Delivery     │  │
│  │  • listings    │  │                    │  └─────────────────────┘  │
│  │  • reviews     │  │                    │  ┌─────────────────────┐  │
│  │  • sessions    │  │                    │  │  Mapbox/Maptiler    │  │
│  │                │  │                    │  │  (Geocoding API)    │  │
│  │  Indexes:      │  │                    │  │  • Address → Coords │  │
│  │  • Geospatial  │  │                    │  │  • Map Rendering    │  │
│  │  • Text Search │  │                    │  │  • Location Search  │  │
│  └────────────────┘  │                    │  └─────────────────────┘  │
└──────────────────────┘                    └───────────────────────────┘
```

### **Request-Response Lifecycle**

```
Client Request
      │
      ├─► Express Server
      │        │
      │        ├─► Middleware Stack
      │        │    ├─► Morgan (Logging)
      │        │    ├─► express-session (Session Check)
      │        │    ├─► Passport (Authentication)
      │        │    ├─► connect-flash (Flash Messages)
      │        │    └─► Custom Middleware (Authorization)
      │        │
      │        ├─► Route Handler
      │        │    └─► Controller
      │        │         ├─► Joi Validation
      │        │         ├─► Business Logic
      │        │         ├─► Database Operations (Mongoose)
      │        │         └─► External API Calls (if needed)
      │        │
      │        └─► View Rendering (EJS)
      │             ├─► Layout Template
      │             ├─► Partials
      │             └─► Dynamic Data
      │
      └─► Response to Client
```

### **Application Flow Diagram**

```mermaid
graph TD
    A[User Visits Platform] --> B{Authenticated?}
    B -->|No| C[Login/Register Page]
    B -->|Yes| D[Dashboard/Home]
    
    C --> E[Passport Authentication]
    E --> F{Valid Credentials?}
    F -->|Yes| G[Create Session in MongoDB]
    F -->|No| H[Flash Error Message]
    H --> C
    
    G --> I[Set Session Cookie]
    I --> D
    
    D --> J{User Action}
    
    J -->|View Listings| K[Fetch All Listings from DB]
    J -->|Create Listing| L[Show Listing Form]
    J -->|View Profile| M[User Profile Page]
    J -->|Search| N[Search/Filter Listings]
    
    K --> O[Render Listings with Map]
    O --> P[Display Property Cards]
    
    L --> Q[Fill Listing Details]
    Q --> R[Upload Images to Cloudinary]
    R --> S[Geocode Address via Mapbox]
    S --> T[Validate with Joi Schema]
    T --> U{Valid Data?}
    U -->|Yes| V[Save to MongoDB]
    U -->|No| W[Flash Validation Errors]
    W --> L
    
    V --> X[Flash Success Message]
    X --> D
    
    P --> Y{Select Listing}
    Y --> Z[View Listing Details Page]
    Z --> AA[Display Images & Map]
    Z --> AB[Show Reviews]
    Z --> AC{Is Owner?}
    AC -->|Yes| AD[Edit/Delete Options]
    AC -->|No| AE[Add Review Option]
    
    AE --> AF[Submit Review]
    AF --> AG[Save Review to DB]
    AG --> AH[Update Average Rating]
    AH --> Z
```

### **Authentication Flow Sequence**

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant ExpressServer
    participant PassportJS
    participant MongoDB
    participant SessionStore

    User->>Browser: Enter Login Credentials
    Browser->>ExpressServer: POST /login (username, password)
    ExpressServer->>PassportJS: passport.authenticate('local')
    PassportJS->>MongoDB: Query users collection
    MongoDB-->>PassportJS: Return user document
    
    alt User Found
        PassportJS->>PassportJS: Verify password hash with bcrypt
        
        alt Password Valid
            PassportJS-->>ExpressServer: Authentication Success
            ExpressServer->>SessionStore: Create new session
            SessionStore->>MongoDB: Store session in sessions collection
            MongoDB-->>SessionStore: Session saved
            SessionStore-->>ExpressServer: Session ID
            ExpressServer->>Browser: Set-Cookie: connect.sid=<sessionId>
            ExpressServer->>Browser: Flash success message
            Browser->>Browser: Redirect to /listings
            Browser-->>User: Show Dashboard
        else Password Invalid
            PassportJS-->>ExpressServer: Authentication Failure
            ExpressServer->>Browser: Flash error: "Invalid password"
            Browser-->>User: Show login form with error
        end
    else User Not Found
        PassportJS-->>ExpressServer: Authentication Failure
        ExpressServer->>Browser: Flash error: "User not found"
        Browser-->>User: Show login form with error
    end
```

### **Image Upload Workflow**

```mermaid
graph LR
    A[User Selects Image] --> B[Client-side Validation]
    B --> C{Valid File?}
    C -->|No| D[Show Error Message]
    C -->|Yes| E[Send to Server]
    
    E --> F[Multer Middleware]
    F --> G{File Type & Size OK?}
    G -->|No| H[Return 400 Error]
    G -->|Yes| I[Upload to Cloudinary]
    
    I --> J[Cloudinary Processing]
    J --> K[Image Optimization]
    K --> L[Generate CDN URL]
    L --> M[Return Secure URL]
    
    M --> N[Save URL to MongoDB]
    N --> O[Update Listing Document]
    O --> P[Return Success Response]
    P --> Q[Display Image Preview]
    
    style A fill:#e1f5ff
    style K fill:#fff4e1
    style N fill:#e8f5e9
    style Q fill:#f3e5f5
```

### **Database Query Flow**

```mermaid
graph TD
    A[Controller Function] --> B[Mongoose Model]
    B --> C{Query Type}
    
    C -->|Create| D[model.create data]
    C -->|Read| E[model.find/findById]
    C -->|Update| F[model.findByIdAndUpdate]
    C -->|Delete| G[model.findByIdAndDelete]
    
    D --> H[MongoDB Driver]
    E --> H
    F --> H
    G --> H
    
    H --> I[MongoDB Server]
    I --> J{Query Successful?}
    
    J -->|Yes| K[Return Documents]
    J -->|No| L[Return Error]
    
    K --> M[Mongoose Middleware]
    L --> M
    
    M --> N[Controller Response]
    N --> O[Send to Client]
    
    style A fill:#e3f2fd
    style I fill:#fff3e0
    style M fill:#f1f8e9
    style O fill:#fce4ec
```

***

## 📁 **Project Structure**

```
airbnb-clone/
│
├── 📂 controllers/                # Business logic layer (MVC Pattern)
│   ├── 📄 listings.js            # Listing CRUD operations
│   ├── 📄 users.js               # User authentication & management
│   └── 📄 reviews.js             # Review management & ratings
│
├── 📂 models/                     # Data models (Mongoose schemas)
│   ├── 📄 listing.js             # Listing schema with validation
│   ├── 📄 review.js              # Review schema & relationships
│   └── 📄 user.js                # User schema with Passport plugin
│
├── 📂 routes/                     # Route definitions (RESTful)
│   ├── 📄 listings.js            # Listing routes (/listings/*)
│   ├── 📄 users.js               # User routes (/signup, /login, /logout)
│   └── 📄 reviews.js             # Review routes (/listings/:id/reviews)
│
├── 📂 middleware/                 # Custom middleware functions
│   ├── 📄 auth.js                # Authentication & authorization guards
│   ├── 📄 validation.js          # Joi validation middleware
│   └── 📄 multer.js              # File upload configuration
│
├── 📂 views/                      # EJS template files
│   ├── 📂 layouts/               # Layout templates
│   │   └── 📄 boilerplate.ejs   # Main layout with navbar/footer
│   ├── 📂 partials/              # Reusable UI components
│   │   ├── 📄 navbar.ejs        # Navigation bar
│   │   ├── 📄 footer.ejs        # Footer component
│   │   ├── 📄 flash.ejs         # Flash message display
│   │   └── 📄 error.ejs         # Error display template
│   ├── 📂 listings/              # Listing-related views
│   │   ├── 📄 index.ejs         # All listings page
│   │   ├── 📄 show.ejs          # Single listing details
│   │   ├── 📄 new.ejs           # Create listing form
│   │   └── 📄 edit.ejs          # Edit listing form
│   ├── 📂 users/                 # User-related views
│   │   ├── 📄 signup.ejs        # Registration form
│   │   └── 📄 login.ejs         # Login form
│   └── 📂 reviews/               # Review-related views
│       └── 📄 new.ejs           # Review form
│
├── 📂 public/                     # Static assets (served by Express)
│   ├── 📂 css/                   # Stylesheets
│   │   ├── 📄 style.css         # Main stylesheet
│   │   ├── 📄 listings.css      # Listing-specific styles
│   │   └── 📄 responsive.css    # Mobile-responsive styles
│   ├── 📂 js/                    # Client-side JavaScript
│   │   ├── 📄 map.js            # Mapbox integration
│   │   ├── 📄 validation.js     # Client-side validation
│   │   └── 📄 script.js         # General scripts
│   └── 📂 images/                # Static images
│       ├── 📄 logo.png
│       └── 📄 default-avatar.png
│
├── 📂 utils/                      # Utility functions & helpers
│   ├── 📄 ExpressError.js        # Custom error class
│   ├── 📄 wrapAsync.js           # Async error handler wrapper
│   ├── 📄 cloudinaryConfig.js    # Cloudinary configuration
│   └── 📄 geocoder.js            # Geocoding utility functions
│
├── 📂 schemas/                    # Joi validation schemas
│   ├── 📄 listingSchema.js       # Listing validation rules
│   ├── 📄 reviewSchema.js        # Review validation rules
│   └── 📄 userSchema.js          # User validation rules
│
├── 📂 config/                     # Configuration files
│   ├── 📄 database.js            # MongoDB connection config
│   ├── 📄 passport.js            # Passport.js configuration
│   └── 📄 cloudinary.js          # Cloudinary setup
│
├── 📂 tests/                      # Test files (Jest/Mocha)
│   ├── 📂 unit/                  # Unit tests
│   ├── 📂 integration/           # Integration tests
│   └── 📂 e2e/                   # End-to-end tests
│
├── 📄 app.js                      # Application entry point
├── 📄 .env                        # Environment variables (NOT committed)
├── 📄 .env.example                # Environment variable template
├── 📄 .gitignore                  # Git ignore rules
├── 📄 package.json                # Dependencies & scripts
├── 📄 package-lock.json           # Locked dependency versions
├── 📄 README.md                   # Project documentation
├── 📄 LICENSE                     # MIT License
└── 📄 .eslintrc.json             # ESLint configuration
```

### **File Naming Conventions**

- **Controllers**: `camelCase.js` (e.g., `listingController.js`)
- **Models**: `PascalCase.js` (e.g., `Listing.js`)
- **Routes**: `camelCase.js` (e.g., `listingRoutes.js`)
- **Views**: `lowercase.ejs` (e.g., `index.ejs`)
- **Utilities**: `camelCase.js` (e.g., `wrapAsync.js`)

***

## 🚀 **Installation & Setup**

### **Prerequisites**

Ensure you have the following installed:

| Software | Version | Download Link |
|----------|---------|---------------|
| **Node.js** | v20.x or higher | [Download](https://nodejs.org/) |
| **MongoDB** | v7.x or higher | [Download](https://www.mongodb.com/try/download/community) |
| **npm** or **yarn** | Latest | Comes with Node.js |
| **Git** | Latest | [Download](https://git-scm.com/) |

### **Quick Start (3 Minutes)**

```bash
# 1️⃣ Clone the repository
git clone https://github.com/utkarshahu/AirBnB-Clone.git
cd AirBnB-Clone

# 2️⃣ Install dependencies
npm install

# 3️⃣ Create environment file
cp .env.example .env
# Edit .env with your configuration

# 4️⃣ Start MongoDB (if running locally)
mongod

# 5️⃣ Run the application
npm start

# 🎉 Open http://localhost:3000
```

### **Detailed Installation Steps**

#### **Step 1: Clone the Repository**

```bash
git clone https://github.com/utkarshahu/AirBnB-Clone.git
cd AirBnB-Clone
```

#### **Step 2: Install Dependencies**

```bash
npm install
```

**Alternative (using Yarn):**
```bash
yarn install
```

This will install all required packages listed in `package.json`:
- Express.js and middleware
- MongoDB drivers and Mongoose
- Authentication packages
- File upload handlers
- Validation libraries
- And more...

#### **Step 3: Environment Configuration**

Create a `.env` file in the root directory:

```bash
# For Unix/Linux/Mac
cp .env.example .env

# For Windows
copy .env.example .env
```

Then edit `.env` with your configuration:

```env
# Database Configuration
DB_URL=mongodb://127.0.0.1:27017/airbnb-clone
# For production, use MongoDB Atlas:
# DB_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/airbnb-clone

# Cloudinary Configuration (Get from https://cloudinary.com)
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here

# Map Integration (Get from https://mapbox.com or https://maptiler.com)
MAPBOX_TOKEN=your_mapbox_access_token_here
MAPTILER_API_KEY=your_maptiler_api_key_here

# Session Secret (Use a strong random string)
SECRET=your_super_secret_session_key_here_min_32_chars

# Server Configuration
PORT=3000
NODE_ENV=development

# Optional: Admin Email
ADMIN_EMAIL=your_email@example.com
```

#### **Step 4: Database Setup**

**Option A: Local MongoDB**

```bash
# Start MongoDB service
mongod

# Verify MongoDB is running
mongo --eval "db.adminCommand('listDatabases')"
```

**Option B: MongoDB Atlas (Cloud)**

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Get connection string
4. Update `DB_URL` in `.env`:
   ```env
   DB_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/airbnb-clone?retryWrites=true&w=majority
   ```

#### **Step 5: Seed Database (Optional)**

```bash
# Run seed script to populate sample data
node seeds/index.js
```

#### **Step 6: Run the Application**

**Development Mode (with auto-restart):**
```bash
npm run dev
# or
nodemon app.js
```

**Production Mode:**
```bash
npm start
# or
node app.js
```

**With custom port:**
```bash
PORT=8080 npm start
```

#### **Step 7: Access the Application**

Open your browser and navigate to:
```
http://localhost:3000
```

You should see the Airbnb Clone homepage! 🎉

***

## ⚙️ **Environment Configuration**

### **Complete Environment Variables Reference**

| Variable | Required | Description | Example | Default |
|----------|----------|-------------|---------|---------|
| `DB_URL` | ✅ Yes | MongoDB connection string | `mongodb://localhost:27017/airbnb` | - |
| `CLOUDINARY_CLOUD_NAME` | ✅ Yes | Your Cloudinary cloud name | `democloud` | - |
| `CLOUDINARY_API_KEY` | ✅ Yes | Cloudinary API key | `123456789012345` | - |
| `CLOUDINARY_API_SECRET` | ✅ Yes | Cloudinary API secret | `abcd1234efgh5678` | - |
| `MAPBOX_TOKEN` | ✅ Yes | Mapbox access token | `pk.eyJ1Ijoi...` | - |
| `MAPTILER_API_KEY` | ❌ No | Maptiler API key (alternative to Mapbox) | `xyz789...` | - |
| `SECRET` | ✅ Yes | Session secret key (min 32 chars) | `my_super_secret_key_12345` | - |
| `PORT` | ❌ No | Server port number | `3000` | `3000` |
| `NODE_ENV` | ❌ No | Environment mode | `development` or `production` | `development` |
| `ADMIN_EMAIL` | ❌ No | Admin contact email | `admin@example.com` | - |

### **Getting Your API Keys**

#### **1. Cloudinary Setup** (Image Storage)

1. Visit [Cloudinary](https://cloudinary.com/)
2. Sign up for free account
3. Go to **Dashboard**
4. Copy the following:
   - **Cloud Name** → `CLOUDINARY_CLOUD_NAME`
   - **API Key** → `CLOUDINARY_API_KEY`
   - **API Secret** → `CLOUDINARY_API_SECRET`

#### **2. Mapbox Setup** (Maps & Geocoding)

1. Visit [Mapbox](https://www.mapbox.com/)
2. Sign up for free account
3. Go to **Account** → **Access Tokens**
4. Click **Create a token**
5. Copy the token → `MAPBOX_TOKEN`

#### **3. Maptiler Setup** (Alternative Map Provider)

1. Visit [Maptiler](https://www.maptiler.com/)
2. Create free account
3. Go to **Account** → **API Keys**
4. Copy your API key → `MAPTILER_API_KEY`

#### **4. Generate Session Secret**

```bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Using OpenSSL
openssl rand -hex 32
```

### **Sample `.env.example` File**

```env
# =================================
# DATABASE CONFIGURATION
# =================================
DB_URL=mongodb://127.0.0.1:27017/airbnb-clone

# =================================
# CLOUDINARY CONFIGURATION
# =================================
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# =================================
# MAP SERVICES
# =================================
MAPBOX_TOKEN=your_mapbox_token
MAPTILER_API_KEY=your_maptiler_key

# =================================
# SECURITY
# =================================
SECRET=your_session_secret_min_32_characters

# =================================
# SERVER CONFIGURATION
# =================================
PORT=3000
NODE_ENV=development

# =================================
# OPTIONAL
# =================================
ADMIN_EMAIL=admin@example.com
```

***

## 📖 **Usage Guide**

### **User Registration & Login**

#### **1. Create New Account**

1. Navigate to `/signup` or click "Sign Up" button
2. Fill in the registration form:
   - **Username**: Unique identifier
   - **Email**: Valid email address
   - **Password**: Minimum 8 characters
3. Click "Register" button
4. You'll be automatically logged in and redirected to the dashboard

#### **2. Login to Existing Account**

1. Navigate to `/login` or click "Login" button
2. Enter your credentials:
   - **Username** or **Email**
   - **Password**
3. Click "Login" button
4. Success! You're redirected to listings page

### **Managing Listings**

#### **Creating a New Listing**

1. **Login** to your account
2. Click **"Create New Listing"** button
3. Fill in the listing form:
   
   ```
   📝 Listing Details:
   ├── Title: "Luxury Beach Villa"
   ├── Description: Detailed property description
   ├── Price: $250 per night
   ├── Location: "123 Beach Road, Malibu, CA"
   ├── Country: "United States"
   └── Images: Upload up to 5 images
   ```

4. Click **"Create Listing"**
5. System will:
   - ✅ Upload images to Cloudinary
   - ✅ Geocode address to coordinates
   - ✅ Validate all inputs
   - ✅ Save to database
6. Success message displayed
7. Redirect to listing details page

#### **Editing Your Listing**

1. Go to your listing's detail page
2. Click **"Edit"** button (only visible to owners)
3. Modify any fields
4. Click **"Update Listing"**
5. Changes saved and displayed

#### **Deleting a Listing**

1. Go to your listing's detail page
2. Click **"Delete"** button (only visible to owners)
3. Confirm deletion in popup
4. Listing and all associated reviews are deleted

### **Reviews & Ratings**

#### **Adding a Review**

1. Visit any listing page
2. Scroll to **"Reviews"** section
3. Click **"Add Review"**
4. Fill in review form:
   - **Rating**: 1-5 stars (select using star icons)
   - **Comment**: Your detailed review
5. Click **"Submit Review"**
6. Review appears immediately
7. Listing's average rating updates automatically

#### **Deleting Your Review**

1. Find your review on the listing page
2. Click **"Delete"** button (only visible for your own reviews)
3. Review is removed
4. Average rating recalculates

### **Search & Filter**

```javascript
// Search by location
/listings?location=beach

// Filter by price range
/listings?minPrice=100&maxPrice=500

// Search with text query
/listings?q=villa
```

***

## 🔌 **API Reference**

### **Base URL**

```
http://localhost:3000/api
```

### **Authentication Endpoints**

#### **Register New User**

```http
POST /signup
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

#### **Login User**

```http
POST /login
Content-Type: application/json

{
  "username": "johndoe",
  "password": "securepassword123"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Logged in successfully",
  "user": {
    "id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "username": "johndoe"
  }
}
```

#### **Logout User**

```http
GET /logout
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### **Listing Endpoints**

#### **Get All Listings**

```http
GET /listings
```

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Results per page (default: 20)
- `sort` (string): Sort field (price, rating, createdAt)
- `order` (string): Sort order (asc, desc)

**Response (200 OK):**
```json
{
  "success": true,
  "count": 45,
  "pagination": {
    "currentPage": 1,
    "totalPages": 3,
    "hasNext": true
  },
  "listings": [
    {
      "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
      "title": "Luxury Beach Villa",
      "description": "Beautiful beachfront property...",
      "price": 250,
      "location": "Malibu, CA",
      "images": ["https://res.cloudinary.com/..."],
      "rating": 4.8,
      "reviewCount": 12,
      "owner": {
        "username": "johndoe"
      },
      "geometry": {
        "coordinates": [-118.7798, 34.0259]
      }
    }
  ]
}
```

#### **Get Single Listing**

```http
GET /listings/:id
```

**Response (200 OK):**
```json
{
  "success": true,
  "listing": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "title": "Luxury Beach Villa",
    "description": "Beautiful beachfront property with stunning ocean views",
    "price": 250,
    "location": "123 Beach Road, Malibu, CA 90265",
    "country": "United States",
    "images": [
      {
        "url": "https://res.cloudinary.com/demo/image/upload/v1234567890/sample.jpg",
        "filename": "AirbnbClone/sample.jpg"
      }
    ],
    "geometry": {
      "type": "Point",
      "coordinates": [-118.7798, 34.0259]
    },
    "owner": {
      "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
      "username": "johndoe",
      "email": "john@example.com"
    },
    "reviews": [
      {
        "_id": "65b2c3d4e5f6g7h8i9j0k1l2",
        "rating": 5,
        "comment": "Amazing place! Highly recommended.",
        "author": {
          "username": "janedoe"
        },
        "createdAt": "2025-01-15T10:30:00.000Z"
      }
    ],
    "avgRating": 4.8,
    "reviewCount": 12,
    "createdAt": "2025-01-01T12:00:00.000Z",
    "updatedAt": "2025-01-15T14:20:00.000Z"
  }
}
```

#### **Create New Listing**

```http
POST /listings
Content-Type: multipart/form-data
Authorization: Required (must be logged in)

{
  "title": "Luxury Beach Villa",
  "description": "Beautiful beachfront property with stunning ocean views",
  "price": 250,
  "location": "123 Beach Road, Malibu, CA 90265",
  "country": "United States",
  "images": [File, File]  // Array of image files
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Listing created successfully",
  "listing": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "title": "Luxury Beach Villa",
    "price": 250,
    "geometry": {
      "type": "Point",
      "coordinates": [-118.7798, 34.0259]
    },
    "images": [
      {
        "url": "https://res.cloudinary.com/...",
        "filename": "AirbnbClone/xyz123"
      }
    ]
  }
}
```

#### **Update Listing**

```http
PUT /listings/:id
Content-Type: multipart/form-data
Authorization: Required (must be owner)

{
  "title": "Updated Title",
  "price": 300,
  "newImages": [File]  // Optional: new images to add
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Listing updated successfully",
  "listing": { /* updated listing object */ }
}
```

#### **Delete Listing**

```http
DELETE /listings/:id
Authorization: Required (must be owner)
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Listing deleted successfully"
}
```

### **Review Endpoints**

#### **Add Review to Listing**

```http
POST /listings/:id/reviews
Content-Type: application/json
Authorization: Required

{
  "rating": 5,
  "comment": "Amazing place! Highly recommended."
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Review added successfully",
  "review": {
    "_id": "65b2c3d4e5f6g7h8i9j0k1l2",
    "rating": 5,
    "comment": "Amazing place! Highly recommended.",
    "author": {
      "username": "janedoe"
    },
    "createdAt": "2025-01-15T10:30:00.000Z"
  }
}
```

#### **Delete Review**

```http
DELETE /listings/:listingId/reviews/:reviewId
Authorization: Required (must be review author)
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Review deleted successfully"
}
```

### **Error Responses**

#### **400 Bad Request**

```json
{
  "success": false,
  "error": "Validation Error",
  "message": "Please provide all required fields",
  "details": [
    {
      "field": "title",
      "message": "Title is required"
    },
    {
      "field": "price",
      "message": "Price must be a positive number"
    }
  ]
}
```

#### **401 Unauthorized**

```json
{
  "success": false,
  "error": "Unauthorized",
  "message": "You must be logged in to perform this action"
}
```

#### **403 Forbidden**

```json
{
  "success": false,
  "error": "Forbidden",
  "message": "You don't have permission to modify this listing"
}
```

#### **404 Not Found**

```json
{
  "success": false,
  "error": "Not Found",
  "message": "Listing not found"
}
```

#### **500 Internal Server Error**

```json
{
  "success": false,
  "error": "Internal Server Error",
  "message": "Something went wrong on our end. Please try again later."
}
```

***

## 🔐 **Authentication Flow**

### **Password Security Implementation**

#### **Hashing Process**

```javascript
// User model with passport-local-mongoose
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// Automatically hashes passwords
userSchema.plugin(passportLocalMongoose);

// Password hashing details:
// - Algorithm: bcrypt
// - Salt rounds: 10 (default)
// - Hash length: 60 characters
// - Rainbow table resistant: Yes
```

#### **Password Requirements**

- ✅ Minimum 8 characters
- ✅ Automatically salted and hashed
- ✅ Never stored in plain text
- ✅ Secure comparison during login

### **Session Management Architecture**

```javascript
// app.js - Session configuration
const sessionOptions = {
  store: MongoStore.create({
    mongoUrl: process.env.DB_URL,
    touchAfter: 24 * 3600, // Lazy session update (24 hours)
    crypto: {
      secret: process.env.SECRET
    }
  }),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, // Prevents XSS attacks
    // secure: true, // Enable in production (HTTPS only)
    sameSite: 'lax' // CSRF protection
  }
};

app.use(session(sessionOptions));
```

#### **Session Storage Structure**

```javascript
// MongoDB sessions collection
{
  "_id": "AZQ4vF-VzGHhv6J0F1Y4KxQW9ZjV0dKE",
  "session": {
    "cookie": {
      "originalMaxAge": 604800000,
      "expires": "2025-01-22T10:30:00.000Z",
      "httpOnly": true,
      "path": "/"
    },
    "passport": {
      "user": "65a1b2c3d4e5f6g7h8i9j0k1"
    },
    "flash": {}
  },
  "expires": "2025-01-22T10:30:00.000Z"
}
```

### **Authentication Middleware**

```javascript
// middleware/auth.js

// Check if user is logged in
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // Save the original URL for redirect after login
    req.session.returnTo = req.originalUrl;
    req.flash('error', 'You must be signed in first!');
    return res.redirect('/login');
  }
  next();
};

// Check if user is the owner of a listing
module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  
  if (!listing.owner.equals(req.user._id)) {
    req.flash('error', 'You do not have permission to do that!');
    return res.redirect(`/listings/${id}`);
  }
  next();
};

// Check if user is the author of a review
module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  const review = await Review.findById(reviewId);
  
  if (!review.author.equals(req.user._id)) {
    req.flash('error', 'You do not have permission to do that!');
    return res.redirect(`/listings/${id}`);
  }
  next();
};
```

### **Usage in Routes**

```javascript
// routes/listings.js
const { isLoggedIn, isOwner } = require('../middleware/auth');

// Protected route - create listing
router.post('/', isLoggedIn, validateListing, createListing);

// Protected route - edit listing (must be owner)
router.put('/:id', isLoggedIn, isOwner, validateListing, updateListing);

// Protected route - delete listing (must be owner)
router.delete('/:id', isLoggedIn, isOwner, deleteListing);
```

***

## 🗄️ **Database Schema**

### **User Model**

```javascript
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  // username and password fields are added by passport-local-mongoose
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Adds username, hash, and salt fields
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
```

**Generated Document Structure:**
```json
{
  "_id": ObjectId("65a1b2c3d4e5f6g7h8i9j0k1"),
  "username": "johndoe",
  "email": "john@example.com",
  "hash": "pbkdf2:sha256:100000$abcd1234$...",
  "salt": "abcdef123456...",
  "createdAt": "2025-01-01T12:00:00.000Z",
  "updatedAt": "2025-01-15T10:30:00.000Z"
}
```

### **Listing Model**

```javascript
const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [5000, 'Description cannot exceed 5000 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
    trim: true
  },
  geometry: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  images: [
    {
      url: {
        type: String,
        required: true
      },
      filename: {
        type: String,
        required: true
      }
    }
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
}, {
  timestamps: true // Adds createdAt and updatedAt
});

// Indexes for better query performance
listingSchema.index({ geometry: '2dsphere' }); // Geospatial queries
listingSchema.index({ title: 'text', description: 'text' }); // Text search

// Virtual for average rating
listingSchema.virtual('avgRating').get(function() {
  if (this.reviews.length === 0) return 0;
  const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / this.reviews.length).toFixed(1);
});

// Middleware: Delete all reviews when listing is deleted
listingSchema.post('findOneAndDelete', async function(doc) {
  if (doc) {
    await Review.deleteMany({ _id: { $in: doc.reviews } });
  }
});

module.exports = mongoose.model('Listing', listingSchema);
```

**Sample Document:**
```json
{
  "_id": ObjectId("65a1b2c3d4e5f6g7h8i9j0k1"),
  "title": "Luxury Beach Villa",
  "description": "Beautiful beachfront property with stunning ocean views",
  "price": 250,
  "location": "123 Beach Road, Malibu, CA 90265",
  "country": "United States",
  "geometry": {
    "type": "Point",
    "coordinates": [-118.7798, 34.0259]
  },
  "images": [
    {
      "url": "https://res.cloudinary.com/demo/image/upload/v1/sample.jpg",
      "filename": "AirbnbClone/abc123",
      "_id": ObjectId("65a1b2c3d4e5f6g7h8i9j0k2")
    }
  ],
  "owner": ObjectId("65a1b2c3d4e5f6g7h8i9j0k3"),
  "reviews": [
    ObjectId("65b2c3d4e5f6g7h8i9j0k1l2"),
    ObjectId("65b2c3d4e5f6g7h8i9j0k1l3")
  ],
  "createdAt": "2025-01-01T12:00:00.000Z",
  "updatedAt": "2025-01-15T14:20:00.000Z"
}
```

### **Review Model**

```javascript
const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5']
  },
  comment: {
    type: String,
    required: [true, 'Comment is required'],
    trim: true,
    maxlength: [1000, 'Comment cannot exceed 1000 characters']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing',
    required: true
  }
}, {
  timestamps: true
});

// Index for efficient queries
reviewSchema.index({ listing: 1, author: 1 });

module.exports = mongoose.model('Review', reviewSchema);
```

**Sample Document:**
```json
{
  "_id": ObjectId("65b2c3d4e5f6g7h8i9j0k1l2"),
  "rating": 5,
  "comment": "Amazing place! Highly recommended. The view was breathtaking.",
  "author": ObjectId("65c3d4e5f6g7h8i9j0k1l2m3"),
  "listing": ObjectId("65a1b2c3d4e5f6g7h8i9j0k1"),
  "createdAt": "2025-01-15T10:30:00.000Z",
  "updatedAt": "2025-01-15T10:30:00.000Z"
}
```

### **Entity Relationship Diagram (ERD)**

```
┌──────────────────────────────────────────────────────────────────────┐
│                         DATABASE SCHEMA                               │
└──────────────────────────────────────────────────────────────────────┘

┌─────────────────┐                    ┌─────────────────────────┐
│      User       │                    │        Listing          │
├─────────────────┤                    ├─────────────────────────┤
│ _id (PK)        │◄───────────────────│ owner (FK)              │
│ username        │ 1                 1│ _id (PK)                │
│ email           │                    │ title                   │
│ hash            │                    │ description             │
│ salt            │                    │ price                   │
│ createdAt       │                    │ location                │
│ updatedAt       │                    │ country                 │
└─────────────────┘                    │ geometry                │
                                       │   - type                │
        │                              │   - coordinates[]       │
        │                              │ images[]                │
        │ 1                            │   - url                 │
        │                              │   - filename            │
        │                              │ reviews[] (FK)          │
        │                              │ createdAt               │
        │                              │ updatedAt               │
        │                              └─────────────────────────┘
        │                                       │
        │                                       │ 1
        │                                       │
        │                                       │ *
        │                              ┌─────────────────────────┐
        │                              │        Review           │
        │                              ├─────────────────────────┤
        └──────────────────────────────┤ author (FK)             │
                                 1    *│ _id (PK)                │
                                       │ rating                  │
                                       │ comment                 │
                                       │ listing (FK)            │
                                       │ createdAt               │
                                       │ updatedAt               │
                                       └─────────────────────────┘

Relationships:
├─ User (1) ──── (Many) Listings (one user can create many listings)
├─ User (1) ──── (Many) Reviews (one user can write many reviews)
└─ Listing (1) ── (Many) Reviews (one listing can have many reviews)
```

### **MongoDB Collections**

```javascript
// collections in the database
{
  "users": [
    { _id, username, email, hash, salt, createdAt, updatedAt }
  ],
  "listings": [
    { _id, title, description, price, location, country, geometry, images, owner, reviews, createdAt, updatedAt }
  ],
  "reviews": [
    { _id, rating, comment, author, listing, createdAt, updatedAt }
  ],
  "sessions": [
    { _id, session, expires }
  ]
}
```

***

## 🚢 **Deployment**

### **Deployment Options**

| Platform | Difficulty | Cost | Best For |
|----------|-----------|------|----------|
| **Render** | Easy | Free tier available | Beginners, testing |
| **Heroku** | Easy | Free tier available | Quick deployment |
| **Railway** | Easy | Free tier available | Modern apps |
| **AWS EC2** | Advanced | Pay-as-you-go | Production apps |
| **DigitalOcean** | Intermediate | $5/month | Full control |
| **Vercel** | Easy | Free tier available | Static sites (not ideal for this) |

### **🔥 Deploying to Render (Recommended)**

#### **Step 1: Prepare Your Code**

Create a `render.yaml` file in the root directory:

```yaml
services:
  # Web Service
  - type: web
    name: airbnb-clone-web
    env: node
    region: oregon
    buildCommand: npm install
    startCommand: node app.js
    healthCheckPath: /health
    envVars:
      - key: NODE_ENV
        value: production
      - key: DB_URL
        sync: false
      - key: CLOUDINARY_CLOUD_NAME
        sync: false
      - key: CLOUDINARY_API_KEY
        sync: false
      - key: CLOUDINARY_API_SECRET
        sync: false
      - key: MAPBOX_TOKEN
        sync: false
      - key: SECRET
        sync: false
      - key: PORT
        value: 10000

  # MongoDB (if not using Atlas)
  - type: pserv
    name: airbnb-clone-mongodb
    env: docker
    dockerfilePath: ./Dockerfile.mongodb
    disk:
      name: mongodb-data
      mountPath: /data/db
      sizeGB: 10
```

#### **Step 2: Create Health Check Endpoint**

Add to `app.js`:

```javascript
// Health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
```

#### **Step 3: Deploy**

1. Push code to GitHub
2. Sign up at [Render](https://render.com/)
3. Click **"New +"** → **"Web Service"**
4. Connect your GitHub repository
5. Configure:
   - **Name**: airbnb-clone
   - **Build Command**: `npm install`
   - **Start Command**: `node app.js`
6. Add environment variables in dashboard
7. Click **"Create Web Service"**
8. Wait for deployment (5-10 minutes)
9. Access your app at: `https://airbnb-clone.onrender.com`

### **🔧 Deploying to Heroku**

#### **Step 1: Install Heroku CLI**

```bash
# macOS
brew tap heroku/brew && brew install heroku

# Windows
# Download from https://devcenter.heroku.com/articles/heroku-cli

# Verify installation
heroku --version
```

#### **Step 2: Login to Heroku**

```bash
heroku login
```

#### **Step 3: Create Procfile**

Create a `Procfile` in root directory:

```
web: node app.js
```

#### **Step 4: Deploy**

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create Heroku app
heroku create airbnb-clone-app

# Set environment variables
heroku config:set DB_URL="your_mongodb_atlas_url"
heroku config:set CLOUDINARY_CLOUD_NAME="your_cloud_name"
heroku config:set CLOUDINARY_API_KEY="your_api_key"
heroku config:set CLOUDINARY_API_SECRET="your_api_secret"
heroku config:set MAPBOX_TOKEN="your_mapbox_token"
heroku config:set SECRET="your_secret_key"
heroku config:set NODE_ENV="production"

# Deploy to Heroku
git push heroku main

# Open your app
heroku open

# View logs
heroku logs --tail
```

### **☁️ MongoDB Atlas Setup (Cloud Database)**

#### **Step 1: Create Account**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free account
3. Create a new project

#### **Step 2: Create Cluster**

1. Click **"Build a Database"**
2. Choose **FREE** tier (M0)
3. Select cloud provider (AWS recommended)
4. Choose region closest to your users
5. Name your cluster (e.g., "AirbnbClone")
6. Click **"Create"**

#### **Step 3: Configure Database Access**

1. Go to **Database Access**
2. Click **"Add New Database User"**
3. Create username and password
4. Give user **"Read and write to any database"** permissions
5. Click **"Add User"**

#### **Step 4: Configure Network Access**

1. Go to **Network Access**
2. Click **"Add IP Address"**
3. For testing: Click **"Allow Access from Anywhere"** (0.0.0.0/0)
4. For production: Add specific IPs
5. Click **"Confirm"**

#### **Step 5: Get Connection String**

1. Go to **Database** → **Connect**
2. Choose **"Connect your application"**
3. Copy connection string:
   ```
   mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/airbnb-clone?retryWrites=true&w=majority
   ```
4. Replace `<password>` with your actual password
5. Update `DB_URL` in `.env`

### **📋 Pre-Deployment Checklist**

- [ ] **Environment Variables**: All sensitive data in `.env`
- [ ] **MongoDB Atlas**: Cloud database setup complete
- [ ] **Cloudinary**: Image upload configured
- [ ] **HTTPS**: Enable secure cookies in production
- [ ] **Error Handling**: Proper error pages
- [ ] **Logging**: Set up logging middleware
- [ ] **CORS**: Configure if needed
- [ ] **Rate Limiting**: Implement API rate limits
- [ ] **Compression**: Enable gzip compression
- [ ] **Security Headers**: Use Helmet.js
- [ ] **Process Manager**: Use PM2 for Node.js
- [ ] **Monitoring**: Set up error tracking (Sentry)

### **🔐 Production Security Checklist**

```javascript
// app.js - Production security setup

if (process.env.NODE_ENV === 'production') {
  // Enable secure cookies
  sessionOptions.cookie.secure = true;
  
  // Trust proxy (for Heroku, Render, etc.)
  app.set('trust proxy', 1);
  
  // Security headers
  const helmet = require('helmet');
  app.use(helmet());
  
  // Rate limiting
  const rateLimit = require('express-rate-limit');
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });
  app.use('/api/', limiter);
  
  // Compression
  const compression = require('compression');
  app.use(compression());
}
```

### **📊 Monitoring & Analytics**

#### **Setup Error Tracking with Sentry**

```bash
npm install @sentry/node
```

```javascript
// app.js
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV
});

// Error handler
app.use(Sentry.Handlers.errorHandler());
```

***

## 🧪 **Testing**

### **Test Structure**

```
tests/
├── unit/                      # Unit tests (individual functions)
│   ├── models/
│   │   ├── listing.test.js
│   │   ├── user.test.js
│   │   └── review.test.js
│   ├── controllers/
│   │   ├── listingController.test.js
│   │   └── userController.test.js
│   └── middleware/
│       ├── auth.test.js
│       └── validation.test.js
├── integration/               # Integration tests (routes + DB)
│   └── routes/
│       ├── listings.test.js
│       ├── users.test.js
│       └── reviews.test.js
└── e2e/                       # End-to-end tests (full user flows)
    └── user-flows/
        ├── signup-login.test.js
        ├── create-listing.test.js
        └── add-review.test.js
```

### **Setup Testing Environment**

```bash
# Install testing dependencies
npm install --save-dev jest supertest mongodb-memory-server
```

**Add to `package.json`:**

```json
{
  "scripts": {
    "test": "jest --coverage",
    "test:watch": "jest --watch",
    "test:unit": "jest tests/unit",
    "test:integration": "jest tests/integration",
    "test:e2e": "jest tests/e2e"
  },
  "jest": {
    "testEnvironment": "node",
    "coveragePathIgnorePatterns": ["/node_modules/"],
    "testMatch": ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"]
  }
}
```

### **Sample Tests**

#### **Unit Test - Listing Model**

```javascript
// tests/unit/models/listing.test.js
const Listing = require('../../../models/listing');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Listing Model', () => {
  test('should create a valid listing', async () => {
    const validListing = new Listing({
      title: 'Test Villa',
      description: 'A beautiful test property',
      price: 100,
      location: 'Test Location',
      country: 'Test Country',
      geometry: {
        type: 'Point',
        coordinates: [-118.7798, 34.0259]
      },
      owner: new mongoose.Types.ObjectId()
    });
    
    const savedListing = await validListing.save();
    
    expect(savedListing._id).toBeDefined();
    expect(savedListing.title).toBe('Test Villa');
    expect(savedListing.price).toBe(100);
  });

  test('should fail without required fields', async () => {
    const invalidListing = new Listing({
      title: 'Test Villa'
      // missing required fields
    });
    
    let error;
    try {
      await invalidListing.save();
    } catch (e) {
      error = e;
    }
    
    expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
  });

  test('should reject negative price', async () => {
    const invalidListing = new Listing({
      title: 'Test Villa',
      description: 'Test',
      price: -100, // negative price
      location: 'Test',
      country: 'Test',
      owner: new mongoose.Types.ObjectId()
    });
    
    let error;
    try {
      await invalidListing.save();
    } catch (e) {
      error = e;
    }
    
    expect(error).toBeDefined();
  });
});
```

#### **Integration Test - Listings Route**

```javascript
// tests/integration/routes/listings.test.js
const request = require('supertest');
const app = require('../../../app');
const Listing = require('../../../models/listing');
const User = require('../../../models/user');

describe('Listings Routes', () => {
  let authCookie;
  let testUser;
  
  beforeEach(async () => {
    // Create test user and login
    testUser = await User.create({
      username: 'testuser',
      email: 'test@example.com'
    });
    await User.register(testUser, 'password123');
    
    const loginRes = await request(app)
      .post('/login')
      .send({ username: 'testuser', password: 'password123' });
    
    authCookie = loginRes.headers['set-cookie'];
  });

  test('GET /listings should return all listings', async () => {
    const res = await request(app).get('/listings');
    
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.listings)).toBe(true);
  });

  test('POST /listings should create new listing when authenticated', async () => {
    const newListing = {
      title: 'Test Villa',
      description: 'A test property',
      price: 250,
      location: 'Test Location',
      country: 'Test Country'
    };
    
    const res = await request(app)
      .post('/listings')
      .set('Cookie', authCookie)
      .send(newListing);
    
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.listing.title).toBe('Test Villa');
  });

  test('POST /listings should fail without authentication', async () => {
    const newListing = {
      title: 'Test Villa',
      price: 250
    };
    
    const res = await request(app)
      .post('/listings')
      .send(newListing);
    
    expect(res.statusCode).toBe(401);
  });
});
```

#### **E2E Test - Complete User Flow**

```javascript
// tests/e2e/user-flows/create-listing.test.js
const request = require('supertest');
const app = require('../../../app');

describe('Complete Listing Creation Flow', () => {
  test('User can signup, login, create listing, and view it', async () => {
    // Step 1: Signup
    const signupRes = await request(app)
      .post('/signup')
      .send({
        username: 'newuser',
        email: 'newuser@example.com',
        password: 'securepass123'
      });
    
    expect(signupRes.statusCode).toBe(201);
    const authCookie = signupRes.headers['set-cookie'];
    
    // Step 2: Create Listing
    const createRes = await request(app)
      .post('/listings')
      .set('Cookie', authCookie)
      .send({
        title: 'My Dream Villa',
        description: 'Beautiful property',
        price: 350,
        location: 'Paradise Bay',
        country: 'Maldives'
      });
    
    expect(createRes.statusCode).toBe(201);
    const listingId = createRes.body.listing._id;
    
    // Step 3: View Listing
    const viewRes = await request(app)
      .get(`/listings/${listingId}`);
    
    expect(viewRes.statusCode).toBe(200);
    expect(viewRes.body.listing.title).toBe('My Dream Villa');
    
    // Step 4: Edit Listing
    const editRes = await request(app)
      .put(`/listings/${listingId}`)
      .set('Cookie', authCookie)
      .send({ price: 400 });
    
    expect(editRes.statusCode).toBe(200);
    expect(editRes.body.listing.price).toBe(400);
  });
});
```

### **Running Tests**

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run only unit tests
npm run test:unit

# Run only integration tests
npm run test:integration

# Run with coverage report
npm test -- --coverage

# Run specific test file
npm test -- tests/unit/models/listing.test.js
```

### **Test Coverage Report**

```bash
# Generate coverage report
npm test -- --coverage --coverageReporters=html

# Open coverage report in browser
open coverage/index.html
```

**Target Coverage:**
- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

***

## ⚡ **Performance Optimization**

### **Database Optimization**

#### **Indexing Strategy**

```javascript
// models/listing.js

// Geospatial index for location-based queries
listingSchema.index({ geometry: '2dsphere' });

// Text search index
listingSchema.index({ title: 'text', description: 'text' });

// Compound index for common query patterns
listingSchema.index({ price: 1, createdAt: -1 });
listingSchema.index({ owner: 1, createdAt: -1 });

// Check indexes
// db.listings.getIndexes()
```

#### **Query Optimization**

```javascript
// ❌ Bad: Load all data without pagination
const listings = await Listing.find().populate('reviews');

// ✅ Good: Pagination + selective population
const listings = await Listing.find()
  .limit(20)
  .skip(page * 20)
  .select('title price images location')
  .populate('owner', 'username')
  .lean(); // Returns plain JS objects (faster)
```

### **Caching Strategy**

#### **Implement Redis Caching**

```bash
npm install redis
```

```javascript
// utils/cache.js
const redis = require('redis');
const client = redis.createClient({
  url: process.env.REDIS_URL
});

client.on('error', (err) => console.log('Redis Client Error', err));

// Cache wrapper function
const cacheMiddleware = (duration) => {
  return async (req, res, next) => {
    const key = req.originalUrl;
    
    try {
      const cachedData = await client.get(key);
      
      if (cachedData) {
        return res.json(JSON.parse(cachedData));
      }
      
      // Store original send function
      res.sendResponse = res.send;
      res.send = (body) => {
        client.setEx(key, duration, JSON.stringify(body));
        res.sendResponse(body);
      };
      
      next();
    } catch (err) {
      next();
    }
  };
};

module.exports = { client, cacheMiddleware };
```

**Usage:**

```javascript
// routes/listings.js
const { cacheMiddleware } = require('../utils/cache');

// Cache listings for 5 minutes
router.get('/listings', cacheMiddleware(300), getAllListings);
```

### **Image Optimization**

#### **Cloudinary Transformations**

```javascript
// utils/cloudinaryConfig.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Optimize images on upload
const optimizeImage = (publicId) => {
  return cloudinary.url(publicId, {
    transformation: [
      { quality: 'auto', fetch_format: 'auto' },
      { width: 1200, crop: 'limit' },
      { effect: 'sharpen:100' }
    ]
  });
};

module.exports = { cloudinary, optimizeImage };
```

### **Frontend Performance**

#### **Lazy Loading Images**

```javascript
// public/js/lazyload.js
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
});
```

#### **Compression Middleware**

```javascript
// app.js
const compression = require('compression');

app.use(compression({
  level: 6, // Compression level (0-9)
  threshold: 1024, // Only compress files > 1KB
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));
```

### **Performance Monitoring**

```javascript
// middleware/performance.js
const monitor = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${duration}ms`);
    
    // Alert if response time > 1 second
    if (duration > 1000) {
      console.warn(`Slow request detected: ${req.url} took ${duration}ms`);
    }
  });
  
  next();
};

module.exports = monitor;
```

***

## 🔒 **Security Best Practices**

### **Implemented Security Measures**

#### **1. Authentication Security**

```javascript
// Password hashing with bcrypt (via passport-local-mongoose)
// - Salt rounds: 10
// - Resistant to rainbow table attacks
// - Passwords never stored in plain text

// Session security
const sessionOptions = {
  cookie: {
    httpOnly: true,      // Prevents XSS attacks
    secure: true,        // HTTPS only (production)
    sameSite: 'lax',     // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  }
};
```

#### **2. Input Validation**

```javascript
// Joi schema validation
const listingSchema = Joi.object({
  title: Joi.string().required().max(100),
  description: Joi.string().required().max(5000),
  price: Joi.number().required().min(0),
  location: Joi.string().required(),
  country: Joi.string().required()
}).required();

// Sanitize user inputs
const sanitizeHtml = require('sanitize-html');

const cleanInput = (input) => {
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {}
  });
};
```

#### **3. CSRF Protection**

```bash
npm install csurf
```

```javascript
// app.js
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);

// Make CSRF token available in views
app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});
```

```html
<!-- views/listings/new.ejs -->
<form method="POST" action="/listings">
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
  <!-- form fields -->
</form>
```

#### **4. Security Headers (Helmet.js)**

```bash
npm install helmet
```

```javascript
// app.js
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net"],
      styleSrc: ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "https:", "res.cloudinary.com"],
      connectSrc: ["'self'", "api.mapbox.com", "*.maptiler.com"],
      fontSrc: ["'self'", "fonts.gstatic.com"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"]
    }
  }
}));
```

#### **5. Rate Limiting**

```bash
npm install express-rate-limit
```

```javascript
// middleware/rateLimiter.js
const rateLimit = require('express-rate-limit');

// General API limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Strict limiter for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // 5 login attempts per 15 minutes
  message: 'Too many login attempts, please try again later.'
});

module.exports = { apiLimiter, authLimiter };
```

```javascript
// routes/users.js
const { authLimiter } = require('../middleware/rateLimiter');

router.post('/login', authLimiter, login);
router.post('/signup', authLimiter, signup);
```

#### **6. MongoDB Injection Prevention**

```javascript
// Using Mongoose automatically prevents most NoSQL injections
// But add extra validation for query parameters

const sanitizeQuery = (query) => {
  // Remove any MongoDB operators from user input
  const sanitized = {};
  for (let key in query) {
    if (typeof query[key] === 'string') {
      sanitized[key] = query[key].replace(/[^\w\s]/gi, '');
    }
  }
  return sanitized;
};
```

#### **7. File Upload Security**

```javascript
// middleware/multer.js
const multer = require('multer');
const { storage } = require('../cloudinaryConfig');

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Only allow images
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

module.exports = upload;
```

### **Security Checklist**

- [x] **Password Security**: Bcrypt hashing with salt
- [x] **Session Management**: Secure, httpOnly cookies
- [x] **Input Validation**: Joi schema validation
- [x] **XSS Protection**: Input sanitization
- [x] **CSRF Protection**: CSRF tokens
- [x] **SQL/NoSQL Injection**: Mongoose + input validation
- [x] **Security Headers**: Helmet.js
- [x] **Rate Limiting**: express-rate-limit
- [x] **File Upload Validation**: Multer filters
- [ ] **HTTPS Enforcement**: Enable in production
- [ ] **Dependency Scanning**: `npm audit`
- [ ] **Environment Variables**: Never commit `.env`
- [ ] **Error Handling**: Don't expose stack traces
- [ ] **Logging**: Secure logging practices
- [ ] **API Keys**: Rotate regularly

***

## 🤝 **Contributing**

We welcome contributions from the community! Whether it's bug fixes, new features, documentation improvements, or suggestions, your help is appreciated.

### **How to Contribute**

#### **1. Fork the Repository**

Click the **"Fork"** button at the top right of the repository page.

#### **2. Clone Your Fork**

```bash
git clone https://github.com/YOUR-USERNAME/AirBnB-Clone.git
cd AirBnB-Clone
```

#### **3. Create a Feature Branch**

```bash
git checkout -b feature/amazing-feature
# or
git checkout -b fix/bug-fix
# or
git checkout -b docs/update-readme
```

**Branch Naming Convention:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Adding tests
- `chore/` - Maintenance tasks

#### **4. Make Your Changes**

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update documentation if needed

#### **5. Test Your Changes**

```bash
# Run tests
npm test

# Run linter
npm run lint

# Check code formatting
npm run format:check
```

#### **6. Commit Your Changes**

```bash
git add .
git commit -m "feat: add user profile page"
```

**Commit Message Convention:**

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**

```bash
git commit -m "feat(listings): add search functionality"
git commit -m "fix(auth): resolve login redirect issue"
git commit -m "docs(readme): update installation instructions"
git commit -m "test(listings): add unit tests for listing model"
```

#### **7. Push to Your Fork**

```bash
git push origin feature/amazing-feature
```

#### **8. Open a Pull Request**

1. Go to the original repository
2. Click **"Pull Requests"** → **"New Pull Request"**
3. Select your fork and branch
4. Fill in the PR template:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
Describe the tests you ran to verify your changes

## Screenshots (if applicable)
Add screenshots to demonstrate UI changes

## Checklist
- [ ] My code follows the project's code style
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing unit tests pass locally
```

### **Code Style Guidelines**

#### **JavaScript/Node.js**

[1](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/90659641/b485dcbc-60a9-4451-b4c6-d5bbdb65983f/Airbnb-Website-Clone-visual-selection.jpg?AWSAccessKeyId=ASIA2F3EMEYEQSCA5CUR&Signature=d%2Bt9VfbywUSY3drwmYwDmy9Ca7Y%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFcaCXVzLWVhc3QtMSJHMEUCIB0BGKKMIaOa7GmBDyuejlnS7V2imoY8WjlbXWxVcfU3AiEA6hXOqzmpNwlR3QXkgIrCl37373YSz8xsP9wJFAkmQ%2BUq8wQIIBABGgw2OTk3NTMzMDk3MDUiDGgr%2BA8e87uT%2FkRC%2FCrQBGM7Dy7c3wxWfD73oc2gUWjWhhQHN0jDxNNZ55%2F6KEH%2B8xch7Fh%2BzSf52HOx4NglyvA5Ecxz94%2F50lmNRMPhgzzJl1mB8BAk%2FIH%2BzfL6OjfXlT5ZKopT8txFft9Euq7lpprHcCXHeBLrMkQYSVMbsqntigraG6T5RORCdnxGjBFbTwQA6PkmNIOjNYI3oVrz6WI92GVGbqHkj5LD9ybcdzXZ63bLn8vDJhqJHKtWrGAxKeKLZTasDowCrF5iwGOLA9SlKeChu05ESHQjRevlQ%2BRKqjCHg6URPUCfcdr2jDc%2FEGXINUbwpjzbgkLRwi2ykvYJea7rgwvk7EKp53SIGx5bXIqHdLhwWsMEh8jmsK6PHnW2MDLzM3eBGCFKk7ZmwTqo0bRFg0TIgxrkrWkXat01LquQRP1aXebbg43i%2BA%2F3LRgAp2FUtUkiom2YyGAumqTG%2BaQzPcQuMX8ROtZCdA0Y7DICJzaTzMWtDv59PxXyCQuxln8MonfqbPQNl2g1Dvufw7n5s2NoxzcduKpgol8Ot0FW%2FTdx0Twz7NbRcggRChvvS2B3HtrHheQMl4ys6z1V%2BJgcNOq3U05ax%2FIA0uJBzB%2F9C%2BujVwkGGBVURy%2F3mYfyZND1hbv3LwG02OwHfPeXhZNRO7R78Rgre3pgwmZg5ky4ROhasxkvLe0F5vGjGloNPDSmB%2BTdtG1xE5rSMdO%2Fmpwix8b6ECJEtcnjSN0maw0MXkv4BmRa4aU3hnPwn9NzD5hQGys%2FI3bG0pqeKEKwhiNJkqRsbsljxrccqfowzY3NyAY6mAE80OyQnIIGBXnlkP7RsjnOkxHvWmRa9AuH6Zidzdt%2Bdg%2FrIoImTtacEKQaYfwZIXVoLLseGG0FHQcXcAaBkSSnwURZMxAyuoGTz2eX1EMuhu1Kcj8UhisoRHpOyJNOOIzfQgvd%2BHilOFyLzFv4WjlwKhPTJdG13m4xV0id2MD9Ywcq7%2FLNGGsXwidcOUs%2B8OQZKNVITUDVmw%3D%3D&Expires=1762872585)
[2](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/90659641/437d3e40-c3ee-48b3-a1ac-af15add1860f/Airbnb-Website-Clone-visual-selection-1.jpg?AWSAccessKeyId=ASIA2F3EMEYEQSCA5CUR&Signature=VzGj9oXK7Y%2B%2FU%2BBmLMVjwFDfv%2Bg%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFcaCXVzLWVhc3QtMSJHMEUCIB0BGKKMIaOa7GmBDyuejlnS7V2imoY8WjlbXWxVcfU3AiEA6hXOqzmpNwlR3QXkgIrCl37373YSz8xsP9wJFAkmQ%2BUq8wQIIBABGgw2OTk3NTMzMDk3MDUiDGgr%2BA8e87uT%2FkRC%2FCrQBGM7Dy7c3wxWfD73oc2gUWjWhhQHN0jDxNNZ55%2F6KEH%2B8xch7Fh%2BzSf52HOx4NglyvA5Ecxz94%2F50lmNRMPhgzzJl1mB8BAk%2FIH%2BzfL6OjfXlT5ZKopT8txFft9Euq7lpprHcCXHeBLrMkQYSVMbsqntigraG6T5RORCdnxGjBFbTwQA6PkmNIOjNYI3oVrz6WI92GVGbqHkj5LD9ybcdzXZ63bLn8vDJhqJHKtWrGAxKeKLZTasDowCrF5iwGOLA9SlKeChu05ESHQjRevlQ%2BRKqjCHg6URPUCfcdr2jDc%2FEGXINUbwpjzbgkLRwi2ykvYJea7rgwvk7EKp53SIGx5bXIqHdLhwWsMEh8jmsK6PHnW2MDLzM3eBGCFKk7ZmwTqo0bRFg0TIgxrkrWkXat01LquQRP1aXebbg43i%2BA%2F3LRgAp2FUtUkiom2YyGAumqTG%2BaQzPcQuMX8ROtZCdA0Y7DICJzaTzMWtDv59PxXyCQuxln8MonfqbPQNl2g1Dvufw7n5s2NoxzcduKpgol8Ot0FW%2FTdx0Twz7NbRcggRChvvS2B3HtrHheQMl4ys6z1V%2BJgcNOq3U05ax%2FIA0uJBzB%2F9C%2BujVwkGGBVURy%2F3mYfyZND1hbv3LwG02OwHfPeXhZNRO7R78Rgre3pgwmZg5ky4ROhasxkvLe0F5vGjGloNPDSmB%2BTdtG1xE5rSMdO%2Fmpwix8b6ECJEtcnjSN0maw0MXkv4BmRa4aU3hnPwn9NzD5hQGys%2FI3bG0pqeKEKwhiNJkqRsbsljxrccqfowzY3NyAY6mAE80OyQnIIGBXnlkP7RsjnOkxHvWmRa9AuH6Zidzdt%2Bdg%2FrIoImTtacEKQaYfwZIXVoLLseGG0FHQcXcAaBkSSnwURZMxAyuoGTz2eX1EMuhu1Kcj8UhisoRHpOyJNOOIzfQgvd%2BHilOFyLzFv4WjlwKhPTJdG13m4xV0id2MD9Ywcq7%2FLNGGsXwidcOUs%2B8OQZKNVITUDVmw%3D%3D&Expires=1762872585)
