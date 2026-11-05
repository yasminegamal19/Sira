import { useEffect, useRef, useState } from 'react'
import Brand from '../components/common/Brand.jsx'
import Icon from '../components/common/Icon.jsx'
import LanguageToggle from '../components/common/LanguageToggle.jsx'
import './LoginPage.css'

export default function LoginPage() {
  const [language, setLanguage] = useState(
    () => window.localStorage.getItem('sira-language') === 'en' ? 'en' : 'ar',
  )
  const [loginMessage, setLoginMessage] = useState('')
  const loginFormRef = useRef(null)
  const isEnglish = language === 'en'

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isEnglish ? 'ltr' : 'rtl'
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f4f8fc')
    document.title = isEnglish ? 'Log in | Sira' : 'تسجيل الدخول | سيرا'
    window.localStorage.setItem('sira-language', language)
    window.localStorage.setItem('sira-theme', 'light')
  }, [isEnglish, language])

  function handleLoginSubmit(event) {
    event.preventDefault()
    loginFormRef.current?.reset()
    setLoginMessage(
      isEnglish
        ? 'Sign-in is temporarily unavailable. Your details were not sent or saved.'
        : 'تسجيل الدخول متوقف مؤقتًا. بياناتك لم يتم إرسالها أو حفظها.',
    )
  }

  return (
    <div className="login-page" dir={isEnglish ? 'ltr' : 'rtl'} lang={language}>
      <header className="login-header">
        <Brand homeHref="/" language={language} />
        <div className="login-header-actions">
          <a className="login-home-link" href="/">{isEnglish ? 'Back to Sira' : 'العودة إلى سيرا'}</a>
          <LanguageToggle
            language={language}
            onToggle={() => setLanguage(current => current === 'ar' ? 'en' : 'ar')}
          />
        </div>
      </header>
      <main className="login-main">
        <section className="login-story">
          <div className="login-art" aria-hidden="true">
            <div className="login-art-orbit orbit-a" />
            <div className="login-art-orbit orbit-b" />
            <div className="login-art-core">S</div>
            <div className="login-art-chip chip-sales"><Icon name="chart" size={18} /><span>{isEnglish ? 'Sales' : 'المبيعات'}</span><i /></div>
            <div className="login-art-chip chip-stock"><Icon name="box" size={18} /><span>{isEnglish ? 'Inventory' : 'المخزون'}</span><i /></div>
            <div className="login-art-chip chip-team"><Icon name="users" size={18} /><span>{isEnglish ? 'Your team' : 'فريقك'}</span><i /></div>
          </div>
          <span className="login-eyebrow"><span />{isEnglish ? 'ONE WORKSPACE. A CLEARER DAY.' : 'مساحة واحدة، ويوم أوضح.'}</span>
          <h1>{isEnglish ? <>Welcome back<br /><span>to your business.</span></> : <>أهلًا بعودتك،<br /><span>مساحة شغلك مستنياك.</span></>}</h1>
          <p>{isEnglish ? 'Your work, your team, and the details that keep your day moving—all in one place.' : 'شغلك وفريقك وكل التفاصيل اللي بتخلّي يومك ماشي، مستنيينك في مكان واحد.'}</p>
        </section>
        <section aria-labelledby="login-title" className="login-card">
          <span className="login-card-kicker">{isEnglish ? 'YOUR WORKSPACE IS READY' : 'مساحة عملك جاهزة'}</span>
          <h2 id="login-title">{isEnglish ? 'Log in to Sira' : 'سجّل دخولك إلى سيرا'}</h2>
          <p>{isEnglish ? 'Use your workspace credentials to continue.' : 'استخدم بيانات مساحة العمل للمتابعة.'}</p>
          <div aria-live="polite" className="login-portal-notice" role="status">
            <span className="login-notice-icon"><Icon name="cloud" size={19} /></span>
            <span>
              <strong>{isEnglish ? 'Workspace sign-in is unavailable' : 'بوابة تسجيل الدخول غير متاحة حاليًا'}</strong>
              <small>{isEnglish ? 'This temporary form is a preview only. Sign-in will not work until the service is restored.' : 'النموذج ده مؤقت للعرض فقط. تسجيل الدخول مش هيشتغل لحد ما الخدمة ترجع.'}</small>
            </span>
          </div>
          <form className="login-form" noValidate onSubmit={handleLoginSubmit} ref={loginFormRef}>
            <label className="login-field">
              <span>{isEnglish ? 'Email address' : 'البريد الإلكتروني'}</span>
              <input
                autoComplete="username"
                name="email"
                placeholder={isEnglish ? 'name@company.com' : 'name@company.com'}
                required
                type="email"
              />
            </label>
            <label className="login-field">
              <span>{isEnglish ? 'Password' : 'كلمة المرور'}</span>
              <input
                autoComplete="current-password"
                name="password"
                placeholder={isEnglish ? 'Enter your password' : 'اكتب كلمة المرور'}
                required
                type="password"
              />
            </label>
            <button className="login-portal-button" type="submit">
              {isEnglish ? 'Sign-in temporarily unavailable' : 'تسجيل الدخول غير متاح مؤقتًا'}
              <Icon name="arrowLeft" size={18} />
            </button>
          </form>
          {loginMessage && <div aria-live="polite" className="login-submit-message" role="status">{loginMessage}</div>}
          <div className="login-secure-note"><Icon name="shield" size={17} />{isEnglish ? 'Credentials are not sent or saved by this temporary form.' : 'بياناتك مش بتتبعت أو بتتخزن من النموذج المؤقت ده.'}</div>
          <div className="login-divider"><span>{isEnglish ? 'NEW TO SIRA?' : 'لسه ما بدأتش؟'}</span></div>
          <a className="login-signup-link" href="/signup">
            {isEnglish ? 'Create your workspace · 14 days free' : 'أنشئ مساحة عملك · تجربة مجانية 14 يومًا'}
            <Icon name="arrowLeft" size={16} />
          </a>
        </section>
      </main>
      <footer className="login-footer">
        <span>© 2026 Sira</span>
        <a href="mailto:hello@siraerp.cloud">{isEnglish ? 'Need help? Contact us' : 'محتاج مساعدة؟ تواصل معنا'}</a>
      </footer>
    </div>
  )
}
