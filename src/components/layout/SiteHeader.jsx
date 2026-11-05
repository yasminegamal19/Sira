import Brand from '../common/Brand.jsx'
import Icon from '../common/Icon.jsx'
import LanguageToggle from '../common/LanguageToggle.jsx'
import { navItems } from '../../data/landingContent.js'

export default function SiteHeader({ menuOpen, onMenuToggle, onMenuClose, language, onLanguageToggle }) {
  const isEnglish = language === 'en'

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand language={language} />
        <nav aria-label={isEnglish ? 'Main navigation' : 'القائمة الرئيسية'} className={`main-nav${menuOpen ? ' nav-open' : ''}`}>
          {navItems.map(item => <a href={item.href} key={item.href} onClick={onMenuClose}>{item[language]}</a>)}
        </nav>
        <div className="header-actions">
          <LanguageToggle language={language} onToggle={onLanguageToggle} />
          <a
            aria-label={isEnglish ? 'Log in' : 'تسجيل الدخول'}
            className="button button-small button-ghost header-login"
            href="/login"
          >
            {isEnglish ? 'Log in' : (
              <>
                <span className="header-login-full">تسجيل الدخول</span>
                <span className="header-login-short">دخول</span>
              </>
            )}
          </a>
          <a className="button button-small button-primary" href="/signup">{isEnglish ? 'Try free · 14 days' : 'جرّب مجانًا 14 يومًا'} <Icon name="arrowLeft" size={16} /></a>
          <button aria-expanded={menuOpen} aria-label={menuOpen ? (isEnglish ? 'Close menu' : 'إغلاق القائمة') : (isEnglish ? 'Open menu' : 'فتح القائمة')} className="menu-toggle" onClick={onMenuToggle} type="button"><Icon name={menuOpen ? 'x' : 'menu'} size={21} /></button>
        </div>
      </div>
    </header>
  )
}
