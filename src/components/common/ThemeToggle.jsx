import Icon from './Icon.jsx'

export default function ThemeToggle({ language = 'ar', theme, onToggle }) {
  const isDark = theme === 'dark'
  const isEnglish = language === 'en'

  return (
    <button
      aria-label={
        isEnglish
          ? (isDark ? 'Switch to light mode' : 'Switch to dark mode')
          : (isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن')
      }
      aria-pressed={isDark}
      className="theme-toggle"
      onClick={onToggle}
      type="button"
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={17} />
      <span>{isEnglish ? (isDark ? 'Light' : 'Dark') : (isDark ? 'فاتح' : 'داكن')}</span>
    </button>
  )
}
