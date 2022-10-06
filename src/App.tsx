import type { i18n } from 'i18next';
import { useEffect, Suspense, useState } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { useDarkMode } from 'usehooks-ts'
import Navbar from './components/shared/Navbar/Navbar';
import { getMovies } from '@/services/requests';

function App({ t, i18n }: { t: TFunction, i18n: i18n }) {
  // const savedLng =
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng') || 'en');

  const onChange = (event: any) => {
    setLanguage(event.target?.value);
    i18n.changeLanguage(event.target?.value);
  };

  const { isDarkMode } = useDarkMode()

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [isDarkMode])

  useEffect(() => {
    getMovies('popular').then(data => {
      console.log(data);
    })
  }, []);

  return (
    <Suspense fallback="Loading...">
      <div>
        <Navbar />
        <div className="container">
          <p>{t('intro.whats-your-name')}</p>
          <select className="bg-transparent" value={language} onChange={onChange}>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </Suspense>
  );
}

export default withTranslation()(App);
