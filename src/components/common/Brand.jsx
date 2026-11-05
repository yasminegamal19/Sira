import logo from '../../assets/sira-logo.png'

export default function Brand({ footer = false, homeHref = '#top', language = 'ar' }) {
  return (
    <a
      aria-label={language === 'en' ? 'Sira, home page' : 'سيرا، الصفحة الرئيسية'}
      className={`brand${footer ? ' brand-footer' : ''}`}
      href={homeHref}
    >
      <img alt="Sira ERP" className="brand-logo" src={logo} />
    </a>
  )
}
