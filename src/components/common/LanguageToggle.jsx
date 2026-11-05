export default function LanguageToggle({ language, onToggle }) {
  const isEnglish = language === 'en'

  return (
    <button
      aria-label={isEnglish ? 'Switch language to Arabic' : 'Switch language to English'}
      className="language-toggle"
      onClick={onToggle}
      type="button"
    >
      {isEnglish ? 'عربي' : 'English'}
    </button>
  )
}
