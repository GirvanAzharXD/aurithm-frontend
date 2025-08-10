# Aurithm - AI-Powered 🚀 Demo

<div align="center">
  <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="15" stroke="#4F46E5" stroke-width="8"/>
    <circle cx="50" cy="50" r="30" stroke="#4F46E5" stroke-width="8" stroke-opacity="0.6"/>
    <circle cx="50" cy="50" r="45" stroke="#4F46E5" stroke-width="8" stroke-opacity="0.3"/>
  </svg>
</div>

## 🛠️ Tech Stacklor Analysis

Aurithm is a modern web application that uses artificial intelligence to analyze your personal color palette based on the 12-season color analysis system. Upload your photo and discover which colors make you shine!

## 🌟 Features

- **AI-Powered Analysis**: Uses Google Gemini AI to analyze your skin tone, hair, and eye color
- **12-Season Color System**: Based on professional color analysis methodology
- **Real-time Preview**: Click on recommended colors to see how they look on your photo
- **Modern UI**: Responsive design with dark/light theme support
- **Privacy First**: Your photos are never stored on our servers
- **Export Results**: Save your color analysis as a PNG image

## 🚀 Demo

Visit the live demo: [Aurithm Color Analysis](https://aurithm.vercel.app/)

## 📸 Screenshots

### Homepage
![Homepage](frontend/public/Aurithm.png)

### Color Analysis Result
![Analysis Result](frontend/public/result.png)

## 🛠️ Tech Stack

### Frontend
- **React** - User interface framework
- **CSS3** - Modern styling with CSS variables
- **Axios** - HTTP client for API calls
- **html2canvas** - Export functionality

### Backend
- **Python Flask** - Web server framework
- **Google Gemini AI** - Image analysis and color recommendations
- **PIL (Pillow)** - Image processing
- **Flask-CORS** - Cross-origin resource sharing

## 🏗️ Installation

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+
- Google Gemini API key

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/GirvanAzharXD/aurithm-backend.git
cd aurithm-backend
```

2. Navigate to the backend directory:
```bash
cd backend
```

3. Install Python dependencies:
```bash
pip install flask flask-cors google-generativeai python-dotenv pillow
```

4. Create a `.env` file in the backend directory:
```bash
GOOGLE_API_KEY=your_google_gemini_api_key_here
```

5. Run the backend server:
```bash
python app.py
```

The backend will be available at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

## 🎯 Usage

1. **Upload a Photo**: Click the upload area and select a clear photo of yourself
2. **Wait for Analysis**: The AI will analyze your features (takes 30-60 seconds)
3. **View Results**: See your color season and recommended palette
4. **Preview Colors**: Click on any color to see it overlaid on your photo
5. **Save Results**: Export your analysis as a PNG image

## 🎨 Color Analysis System

Aurithm uses the 12-season color analysis system:

### Spring Seasons
- **Light Spring**: Soft, warm colors with medium saturation
- **Warm Spring**: Rich, golden undertones
- **Clear Spring**: Bright, vibrant colors

### Summer Seasons
- **Light Summer**: Soft, muted cool colors
- **Cool Summer**: Classic cool undertones
- **Soft Summer**: Gentle, blended colors

### Autumn Seasons
- **Deep Autumn**: Rich, dark warm colors
- **Warm Autumn**: Golden, earthy tones
- **Soft Autumn**: Muted warm colors

### Winter Seasons
- **Deep Winter**: Bold, high contrast colors
- **Cool Winter**: Clear, cool undertones
- **Clear Winter**: Bright, vivid colors

## 📁 Project Structure

```
aurithm-backend/
├── backend/
│   ├── app.py             # Flask server
│   ├── .env               # Environment variables
│   └── requirements.txt   # Python dependencies
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── logo192.png
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.js        # Main application
│   │   ├── App.css       # Styling
│   │   └── index.js      # Entry point
│   └── package.json      # Dependencies
└── README.md
```

## 🔧 Configuration

### Environment Variables

Backend (`.env`):
```bash
GOOGLE_API_KEY=your_google_gemini_api_key_here
```

### API Configuration

The frontend is configured to communicate with the backend at `http://localhost:5000`. To change this, update the API endpoint in `frontend/src/App.js`.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## ‍💻 Author

**Mochamad Girvan Azhar**
- GitHub: [@GirvanAzharXD](https://github.com/GirvanAzharXD)
- LinkedIn: [Mochamad Girvan Azhar](https://www.linkedin.com/in/girvanazhar/)
- Email: girvanazharr@gmail.com

## 🙏 Acknowledgments

- Google Gemini AI for providing the image analysis capabilities
- The color analysis community for the 12-season system methodology
- React community for the excellent documentation and tools

## 📞 Support

If you have any questions or need help with the project, please:
1. Check the [Issues](https://github.com/GirvanAzharXD/aurithm-backend/issues) page
2. Contact me through the Contact page in the app
3. Send an email to girvanazharr@gmail.com

## 🔮 Roadmap

- [ ] Add more detailed color explanations
- [ ] Implement user accounts and history
- [ ] Add sharing functionality
- [ ] Mobile app version
- [ ] Professional color analyst verification system

---

Made with ❤️ by [Girvan Azhar](https://github.com/GirvanAzharXD)
