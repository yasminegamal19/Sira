import { useState } from 'react'
import Icon from '../common/Icon.jsx'

const pulseViews = {
  ar: [
    {
      id: 'sales',
      label: 'المبيعات',
      title: 'كل عملية بيع، في مكانها.',
      metric: 'المبيعات اليوم',
      value: 'واضحة لحظة بلحظة',
      note: 'الفواتير والتحصيلات في صورة واحدة',
      bars: [32, 54, 43, 74, 58, 88, 68],
    },
    {
      id: 'inventory',
      label: 'المخزون',
      title: 'المخزون تحت عينك.',
      metric: 'حركة الأصناف',
      value: 'محدّثة باستمرار',
      note: 'اعرف المتاح قبل ما تحتاجه',
      bars: [72, 42, 63, 48, 82, 57, 91],
    },
    {
      id: 'team',
      label: 'الفريق',
      title: 'فريقك على نفس الصفحة.',
      metric: 'مساحة الفريق',
      value: 'كل مهمة لها صاحب',
      note: 'متابعة واضحة من غير رسائل متفرقة',
      bars: [43, 67, 51, 79, 62, 92, 75],
    },
  ],
  en: [
    {
      id: 'sales',
      label: 'Sales',
      title: 'Every sale, in its place.',
      metric: 'Today’s sales',
      value: 'Clear as it happens',
      note: 'Invoices and collections, together',
      bars: [32, 54, 43, 74, 58, 88, 68],
    },
    {
      id: 'inventory',
      label: 'Inventory',
      title: 'Keep stock in sight.',
      metric: 'Stock movement',
      value: 'Always up to date',
      note: 'Know what is available before you need it',
      bars: [72, 42, 63, 48, 82, 57, 91],
    },
    {
      id: 'team',
      label: 'Your team',
      title: 'Keep everyone on the same page.',
      metric: 'Team workspace',
      value: 'Every task has an owner',
      note: 'Clear follow-up without scattered messages',
      bars: [43, 67, 51, 79, 62, 92, 75],
    },
  ],
}

export default function BusinessPulseSection({ language }) {
  const isEnglish = language === 'en'
  const views = pulseViews[language]
  const [activeViewId, setActiveViewId] = useState('sales')
  const activeView = views.find(view => view.id === activeViewId)

  return (
    <section aria-labelledby="pulse-title" className="section pulse-section" id="pulse">
      <div className="pulse-intro">
        <span className="eyebrow">{isEnglish ? 'One connected picture' : 'الصورة كاملة، مش أجزاء'}</span>
        <h2 id="pulse-title">
          {isEnglish ? <>Your business has a pulse.<br /><span>Now you can see it.</span></> : <>كل شغلك له نبض،<br /><span>خليك شايف الصورة.</span></>}
        </h2>
        <p>{isEnglish ? 'Move between the parts of your day. Sales, stock, and people all stay connected in one workspace.' : 'تنقّل بين تفاصيل يومك. المبيعات والمخزون وفريقك — كلهم مرتبطين في مساحة واحدة.'}</p>
        <div aria-label={isEnglish ? 'Explore business views' : 'استكشف جوانب عملك'} className="pulse-tabs">
          {views.map(view => (
            <button
              aria-pressed={activeView.id === view.id}
              className={activeView.id === view.id ? 'active' : ''}
              key={view.id}
              onClick={() => setActiveViewId(view.id)}
              type="button"
            >
              {view.label}
              <Icon name="arrowLeft" size={15} />
            </button>
          ))}
        </div>
      </div>
      <div aria-live="polite" className="pulse-board">
        <div className="pulse-board-header">
          <div className="pulse-brand"><span className="pulse-brand-mark">S</span><span>Sira <small>{isEnglish ? 'BUSINESS PULSE' : 'نبض الأعمال'}</small></span></div>
          <span className="pulse-live"><i />{isEnglish ? 'ALL IN SYNC' : 'كل شيء متصل'}</span>
        </div>
        <div className="pulse-board-body">
          <div className="pulse-chart">
            <div className="pulse-chart-heading">
              <span>{activeView.metric}</span>
              <strong>{activeView.title}</strong>
            </div>
            <div aria-hidden="true" className="pulse-bars">
              {activeView.bars.map((height, index) => (
                <i key={`${activeView.id}-${index}`} style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="pulse-chart-footer"><span>{isEnglish ? 'Your work, as it moves' : 'تفاصيل يومك، وهي بتتحرك'}</span><Icon name="arrowLeft" size={15} /></div>
          </div>
          <div className="pulse-side">
            <div className="pulse-orbit"><span className="pulse-orbit-center">S</span><i /><i /><i /></div>
            <span className="pulse-kicker">{isEnglish ? 'YOUR WORKSPACE' : 'مساحة شغلك'}</span>
            <strong>{activeView.value}</strong>
            <span className="pulse-note">{activeView.note}</span>
          </div>
        </div>
        <div className="pulse-board-footer">
          <span><i />{isEnglish ? 'Sales' : 'المبيعات'}</span>
          <span><i />{isEnglish ? 'Inventory' : 'المخزون'}</span>
          <span><i />{isEnglish ? 'Team' : 'الفريق'}</span>
          <small>{isEnglish ? 'One workspace · Every moving part' : 'مساحة واحدة · كل التفاصيل'}</small>
        </div>
      </div>
    </section>
  )
}
