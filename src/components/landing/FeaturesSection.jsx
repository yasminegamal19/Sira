import Icon from '../common/Icon.jsx'
import { modules } from '../../data/landingContent.js'

export default function FeaturesSection({ language }) {
  const isEnglish = language === 'en'

  return (
    <section className="section features-section" id="features">
      <div className="feature-intro">
        <span className="eyebrow">{isEnglish ? 'From the first step to the latest report' : 'من أول خطوة لآخر تقرير'}</span>
        <h2>{isEnglish ? <>Many tools,<br /><span>working as one.</span></> : <>أدوات كثيرة،<br /><span>لكنها تعمل كفريق واحد.</span></>}</h2>
        <p>{isEnglish ? 'Bring your business operations together in one workspace instead of switching between spreadsheets and disconnected apps.' : 'بدل التنقل بين جداول وبرامج متفرقة، اجمع حركة شركتك في مساحة واحدة يسهل على فريقك استخدامها.'}</p>
        <a className="text-link" href="#pricing">{isEnglish ? 'Explore plans' : 'شاهد الباقات'} <Icon name="arrowLeft" size={16} /></a>
      </div>
      <div className="module-grid">
        {modules.map((module, index) => (
          <article className="module-card" key={module.title}>
            <span className="module-icon"><Icon name={module.icon} size={20} /></span>
            <small>٠{index + 1}</small>
            <h3>{isEnglish ? module.titleEn : module.title}</h3>
            <p>{isEnglish ? module.descriptionEn : module.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
