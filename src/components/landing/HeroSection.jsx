import Icon from '../common/Icon.jsx'
import DashboardPreview from './DashboardPreview.jsx'

export default function HeroSection({ language }) {
  const isEnglish = language === 'en'

  return (
    <section className="hero-section">
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="eyebrow hero-eyebrow"><span className="live-dot" /> {isEnglish ? 'Made for the way your business works' : 'مصمّم على مقاس شغلك'}</div>
        <h1>{isEnglish ? <>Run your business<br /><span>with a clearer view.</span></> : <>إدارة شركتك،<br /><span>برؤية أوضح.</span></>}</h1>
        <p className="hero-copy">{isEnglish ? 'Sales, accounting, inventory, and your team—connected in one workspace, so you can spend less time chasing details.' : 'المبيعات والحسابات والمخزون وفريقك — كلهم في مساحة واحدة، عشان تقضي وقت أقل في متابعة التفاصيل.'}</p>
        <div className="hero-actions">
          <a className="button button-primary button-large" href="/signup">{isEnglish ? 'Try free for 14 days' : 'ابدأ تجربتك المجانية لمدة 14 يومًا'} <Icon name="arrowLeft" size={18} /></a>
          <a className="button button-ghost button-large" href="#activities">{isEnglish ? 'Find your workflow' : 'اكتشف الحل المناسب'}</a>
        </div>
        <div className="hero-assurances">
          <span><Icon name="check" size={15} /> {isEnglish ? 'Sales & invoicing' : 'مبيعات وفواتير'}</span>
          <span><Icon name="check" size={15} /> {isEnglish ? 'Accounting & inventory' : 'حسابات ومخزون'}</span>
          <span><Icon name="check" size={15} /> {isEnglish ? 'One connected workspace' : 'مساحة عمل مترابطة'}</span>
        </div>
      </div>
      <div className="preview-wrap"><DashboardPreview language={language} /></div>
      <div className="hero-stats">
        <div><strong>{isEnglish ? '01' : '٠١'}</strong><span>{isEnglish ? 'See sales clearly' : 'تابع مبيعاتك بوضوح'}</span></div>
        <div><strong>{isEnglish ? '02' : '٠٢'}</strong><span>{isEnglish ? 'Know what is in stock' : 'اعرف حركة مخزونك'}</span></div>
        <div><strong>{isEnglish ? '03' : '٠٣'}</strong><span>{isEnglish ? 'Keep your team in sync' : 'خلّي فريقك على نفس الصفحة'}</span></div>
      </div>
    </section>
  )
}
