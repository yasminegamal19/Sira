import Icon from '../common/Icon.jsx'
import { activities } from '../../data/landingContent.js'

export default function ActivitiesSection({ language }) {
  const isEnglish = language === 'en'

  return (
    <section className="section activities-section" id="activities">
      <div className="section-heading">
        <span className="eyebrow">{isEnglish ? 'Built around the way you work' : 'مصمّم لطريقة شغلك'}</span>
        <h2>{isEnglish ? <>Every industry works differently.<br /><span>Start with what you need.</span></> : <>كل نشاط له طريقة مختلفة.<br /><span>ابدأ من احتياجك.</span></>}</h2>
        <p>{isEnglish ? 'Choose the industry closest to your business and see how everyday tools keep things organized.' : 'اختَر المجال الأقرب لشركتك وشاهد كيف تساعدك الأدوات اليومية على تنظيم التفاصيل.'}</p>
      </div>
      <div className="activity-grid">
        {activities.map((activity, index) => (
          <article className="activity-card" key={activity.title}>
            <span className="icon-tile"><Icon name={activity.icon} size={22} /></span>
            <span className="card-index">٠{index + 1}</span>
            <h3>{isEnglish ? activity.titleEn : activity.title}</h3>
            <p>{isEnglish ? activity.descriptionEn : activity.description}</p>
            <div className="tag-row">{(isEnglish ? activity.tagsEn : activity.tags).map(tag => <span key={tag}>{tag}</span>)}</div>
            <a aria-label={isEnglish ? `Learn more about ${activity.titleEn}` : `اعرف المزيد عن ${activity.title}`} className="card-arrow" href="#pricing"><Icon name="arrowLeft" size={17} /></a>
          </article>
        ))}
      </div>
    </section>
  )
}
