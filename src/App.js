import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import { createBrowserHistory } from 'history';
import { SpeedInsights } from "@vercel/speed-insights/react"
import AppHeader from './components/Header';
import HeroSection from './components/HeroSection';
import UploadPage from './components/UploadPage';
import AnalysisResult from './components/AnalysisResult';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import SupportPage from './components/SupportPage';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

const loadingMessages = [
    "Analyzing the colors in your photo...",
    "Determining your seasonal color palette...",
    "Almost done, preparing your recommendations..."
];

const history = createBrowserHistory();

function App() {
  const [pageState, setPageState] = useState('hero');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(loadingMessages[0]);
  const [fadeKey, setFadeKey] = useState(0);
  const uploadSectionRef = useRef(null);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    let intervalId = null;
    if (pageState === 'loading') {
      let messageIndex = 0;
      intervalId = setInterval(() => {
        messageIndex = (messageIndex + 1) % loadingMessages.length;
        setCurrentLoadingMessage(loadingMessages[messageIndex]);
      }, 3500);
    }
    return () => clearInterval(intervalId);
  }, [pageState]);

  // Tambahkan efek transisi setiap kali pageState berubah
  useEffect(() => {
    setFadeKey(prev => prev + 1);
  }, [pageState]);

  useEffect(() => {
    // Remove hash from URL if on home page
    if (pageState === 'hero' && window.location.hash) {
      history.replace(window.location.pathname);
    }
    // ...existing code for document.title...
    let title = 'Aurithm';
    switch (pageState) {
      case 'about':
        title = 'Aurithm | About'; break;
      case 'contact':
        title = 'Aurithm | Contact'; break;
      case 'support':
        title = 'Aurithm | Support'; break;
      case 'terms':
        title = 'Aurithm | Terms of Service'; break;
      case 'privacy':
        title = 'Aurithm | Privacy Policy'; break;
      case 'result':
        title = 'Aurithm | Result'; break;
      case 'error':
        title = 'Aurithm | Error'; break;
      default:
        title = 'Aurithm';
    }
    document.title = title;
  }, [pageState]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleImageAnalysis = async (imageFile) => {
    if (!imageFile) return;
    setPageState('loading');
    setError('');
    setImagePreview(URL.createObjectURL(imageFile));
    const formData = new FormData();
    formData.append('image', imageFile);
    try {
      const response = await axios.post('https://aurithm-backend-production.up.railway.app/api/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 180000 
      });
      setAnalysisResult(response.data);
      setPageState('result');
    } catch (err) {
      const errorMessage = err.response ? err.response.data.error : err.message;
      setError(`Gagal menganalisis gambar: ${errorMessage}. Coba lagi.`);
      setPageState('error');
    }
  };
  
  const handleResetToHome = () => {
    setPageState('hero');
    setAnalysisResult(null);
    setImagePreview(null);
    setError('');
  };
  
  const handleNavigateToAbout = () => {
    setPageState('about');
  };
  
  const handleNavigateToContact = () => {
    setPageState('contact');
  };

  const handleNavigateToSupport = () => { 
    setPageState('support'); 
  };

  const handleNavigateToTerms = () => {
    setPageState('terms');
  };

  const handleNavigateToPrivacy = () => {
    setPageState('privacy');
  };
  
  // Fungsi scroll ke upload section
  const handleScrollToUpload = () => {
    if (uploadSectionRef.current) {
      uploadSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (pageState) {
      case 'hero':
        return (
          <div className="fade-page">
            <HeroSection 
              onGetStartedClick={handleScrollToUpload} 
              onLearnMoreClick={handleNavigateToAbout}
            />
            <div ref={uploadSectionRef}>
              <UploadPage onImageAnalysis={handleImageAnalysis} />
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="fade-page">
            <AboutPage onGetStartedClick={handleResetToHome} />
          </div>
        );
      case 'contact':
        return (
          <div className="fade-page">
            <ContactPage onGoHomeClick={handleResetToHome} />
          </div>
        );
      case 'support':
        return (
          <div className="fade-page">
            <SupportPage onGoHomeClick={handleResetToHome} onContactClick={handleNavigateToContact} />
          </div>
        );
      case 'upload':
        return (
          <div className="fade-page">
            <UploadPage onImageAnalysis={handleImageAnalysis} />
          </div>
        );
      case 'loading':
        return (
          <div className="fade-page">
            <div className="loading-page-container">
              <div className="loading-image-wrapper">
                <img src={imagePreview} alt="Analyzing" className="loading-image-preview" />
                <div className="loading-overlay">
                  <div className="loading-spinner"></div>
                  <p className="loading-text">{currentLoadingMessage}</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'result':
        return (
          <div className="fade-page">
            <AnalysisResult 
              data={analysisResult} 
              imagePreview={imagePreview}
              onTryAgain={handleResetToHome}
            />
          </div>
        );
      case 'error':
        return (
          <div className="fade-page">
            <div className="error-container">
              <p className="error-message">{error}</p>
              <button onClick={handleResetToHome} className="action-button try-again">Back</button>
            </div>
          </div>
        );
      case 'terms':
        return (
          <div className="fade-page">
            <TermsOfService onBackHome={handleResetToHome} onPrivacyPolicy={handleNavigateToPrivacy} />
          </div>
        );
      case 'privacy':
        return (
          <div className="fade-page">
            <PrivacyPolicy onBackHome={handleResetToHome} onContactPage={handleNavigateToContact} />
          </div>
        );
      default:
        return <HeroSection onGetStartedClick={handleResetToHome} onLearnMoreClick={handleNavigateToAbout} />;
    }
  };

  return (
    <div className="App">
      <AppHeader 
        appName="Aurithm"
        theme={theme} 
        toggleTheme={toggleTheme} 
        onLogoClick={handleResetToHome}
        onAboutClick={handleNavigateToAbout}
        onContactClick={handleNavigateToContact}
        onSupportClick={handleNavigateToSupport}
      />
      <main>
        <div key={fadeKey} className="fade-page">
          {renderContent()}
        </div>
      </main>
      <Footer onTermsClick={handleNavigateToTerms} onPrivacyClick={handleNavigateToPrivacy} />
      <SpeedInsights />
    </div>
  );
}

export default App;
