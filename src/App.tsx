import { useEffect } from 'react';
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from './modules/i18n';
import { logLanguage } from './services/axiosService';

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');

  const onChange = (event: any) => {
    setLanguage(event.target?.value)
  }

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])
  return (
    <div className="container py-6 flex flex-col gap-6">
      Hello
      {t('welcome')}
      
      <select onChange={onChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>

      <button className='w-40 py-3 rounded-full bg-purple-700 text-white' onClick={logLanguage}>Log Language</button>
    </div>
  )
}

export default App
