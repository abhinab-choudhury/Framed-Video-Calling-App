# Setting Up Framed: Your Video Calling Experience

### Prerequisites

* Node.js and yarn installed on your system.
* An Agora developer account (<https://www.agora.io/en/>)
* An Appwrite developer account (<https://cloud.appwrite.io/>)


see our [Code of Conduct](CODE-OF-CONDUCT.md) for more information on expected behavior within the project

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/framed.git
cd framed
```

### 2. Install dependencies

```bash
yarn
```

### 3. Setup Appwrite

- Create a project in [Appwrite Console](https://appwrite.io/docs/quick-start).
- Enable authentication providers (Google OAuth).
- Create a web platform and add your localhost URL (e.g., `http://localhost:5173`).
- Copy the project ID and endpoint into your `.env` file.

### 4. Setup Agora

- Create an account at [Agora.io](https://www.agora.io/).
- Create a project and get the App ID.
- Store it in your `.env` file as well.

### 5. Environment Variables

Create a `.env` file in the root:

```env
VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_AGORA_APP_ID=your_agora_app_id
```

### 6. Run the project

```bash
yarn run dev
```

App will be live at [http://localhost:5173](http://localhost:5173)
