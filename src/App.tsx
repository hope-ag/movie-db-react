import { useEffect } from 'react';
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from './modules/i18n';
// import { searchMovies } from './services/movies';

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');

  const onChange = (event: any) => {
    setLanguage(event.target?.value)
  }

  useEffect(() => {
    i18n.changeLanguage(language)
    // searchMovies('Batman', 'movie').then(data => {
    //   console.log(data)
    // })
  }, [language])

  return (
    <div className="container py-6 flex flex-col gap-6">
      Hello
      {t('welcome')}
      
      <select onChange={onChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  )
}

export default App
