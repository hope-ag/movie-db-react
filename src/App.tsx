import { useEffect, useState, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/core/Navbar';
import i18n from './modules/i18n';
import { searchMovies } from './services/movies';

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');

  const onChange = (event: any) => {
    setLanguage(event.target?.value);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
    searchMovies('bat', 'movie').then(data => {
      console.log(data)
    })
  }, [language]);

  return (
    <Suspense fallback="Loading...">
      <div>
        <Navbar />
        <div className="container">
          <p>{t('intro.whats-your-name')}</p>
          <select value={language} onChange={onChange}>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
