import { useState } from 'react'
import Brand from '../common/Brand.jsx'
import Icon from '../common/Icon.jsx'
import LanguageToggle from '../common/LanguageToggle.jsx'
import { plans, questions } from '../../data/landingContent.js'

export function StepsSection({ language }) {
  const isEnglish = language === 'en'
  const steps = isEnglish
    ? [['1', 'Create your account', 'Add a few details about your company and choose your industry.'], ['2', 'Set up your workspace', 'Invite your team and add your essential business data.'], ['3', 'Run your business', 'Use reports and everyday tools from one dashboard.']]
    : [['١', 'أنشئ حسابك', 'أدخل بيانات بسيطة عن شركتك واختَر مجال عملك.'], ['٢', 'رتّب مساحة العمل', 'أضف فريقك وبياناتك الأساسية وقت ما تحب.'], ['٣', 'تابع شغلك', 'استخدم التقارير والأدوات اليومية من لوحة واحدة.']]

  return (
    <section className="section steps-section" id="steps">
      <div className="section-heading">
        <span className="eyebrow">{isEnglish ? 'A simple start' : 'بداية من غير تعقيد'}</span>
        <h2>{isEnglish ? <>Start with one step,<br /><span>then grow your way.</span></> : <>ابدأ بخطوة،<br /><span>وكمل بطريقتك.</span></>}</h2>
        <p>{isEnglish ? 'Your new workspace is ready in just a few simple steps.' : 'مساحة عملك الجديدة جاهزة في خطوات بسيطة.'}</p>
      </div>
      <div className="steps-grid">
        {steps.map(([number, title, copy], index) => (
          <article className="step-card" key={number}>
            <div className="step-number">{number}<span /></div>
            <h3>{title}</h3>
            <p>{copy}</p>
            {index < steps.length - 1 && <div className="step-line" />}
          </article>
        ))}
      </div>
    </section>
  )
}

export function PricingSection({ language }) {
  const isEnglish = language === 'en'
  const [billing, setBilling] = useState('monthly')
  const [market, setMarket] = useState('eg')

  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-heading">
        <span className="eyebrow">{isEnglish ? 'Straightforward pricing' : 'أسعار واضحة من البداية'}</span>
        <h2>{isEnglish ? <>Choose what fits,<br /><span>and change anytime.</span></> : <>اختَر اللي يناسبك،<br /><span>وغيّر وقت ما تحتاج.</span></>}</h2>
        <p>{isEnglish ? 'Try Sira for free before choosing the plan that works for you.' : 'ابدأ بتجربة مجانية وتعرّف على النظام قبل اختيار خطتك.'}</p>
      </div>
      <div className="pricing-controls">
        <div aria-label={isEnglish ? 'Billing cycle' : 'دورة الفوترة'} className="segmented-control">
          <button aria-pressed={billing === 'monthly'} className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')} type="button">{isEnglish ? 'Monthly' : 'شهري'}</button>
          <button aria-pressed={billing === 'yearly'} className={billing === 'yearly' ? 'active' : ''} onClick={() => setBilling('yearly')} type="button">{isEnglish ? 'Yearly' : 'سنوي'} <span>{isEnglish ? 'Save 17%' : 'وفر ١٧٪'}</span></button>
        </div>
        <div aria-label={isEnglish ? 'Choose currency' : 'اختيار العملة'} className="currency-control">
          <button aria-pressed={market === 'eg'} className={market === 'eg' ? 'active' : ''} onClick={() => setMarket('eg')} type="button">{isEnglish ? 'Egypt' : 'مصر'} <small>EGP</small></button>
          <button aria-pressed={market === 'sa'} className={market === 'sa' ? 'active' : ''} onClick={() => setMarket('sa')} type="button">{isEnglish ? 'Saudi Arabia' : 'السعودية'} <small>SAR</small></button>
        </div>
      </div>
      <div className="plans-grid">
        {plans.map((plan, planIndex) => {
          const priceKey = market === 'sa'
            ? `sa${billing === 'monthly' ? 'Monthly' : 'Yearly'}`
            : billing
          const localizedPrice = plan[priceKey]

          return (
            <article className={`plan-card${plan.featured ? ' plan-featured' : ''}`} key={plan.name}>
              {plan.featured && <div className="popular-label">{isEnglish ? 'Most popular' : 'الأكثر اختيارًا'}</div>}
              <h3>{isEnglish ? plan.nameEn : plan.name}</h3>
              <p className="plan-description">{isEnglish ? plan.descriptionEn : plan.description}</p>
              <div className="plan-price">
                <strong>{localizedPrice.toLocaleString(isEnglish ? 'en-US' : 'ar-EG')}</strong>
                <span>{market === 'eg' ? (isEnglish ? 'EGP' : 'ج.م') : (isEnglish ? 'SAR' : 'ر.س')} <small>{isEnglish ? '/ month' : '/ شهر'}</small></span>
              </div>
              <p className="plan-trial"><Icon name="check" size={15} /> {isEnglish ? '14-day free trial' : 'تجربة مجانية لمدة 14 يومًا'}</p>
              <div className="plan-limits">
                <span><Icon name="users" size={16} />{isEnglish ? plan.usersEn : plan.users}</span>
                <span><Icon name="cloud" size={16} />{isEnglish ? plan.storageEn : plan.storage}</span>
              </div>
              <a className={`button plan-button${plan.featured ? ' button-primary' : ' button-ghost'}`} href={`/signup?country=${market}&plan=${planIndex}`}>
                {isEnglish ? 'Choose plan' : 'اختَر الخطة'} <Icon name="arrowLeft" size={16} />
              </a>
              <div className="plan-includes">{isEnglish ? 'Included in this plan' : 'تتضمن الخطة'}</div>
              <ul>{(isEnglish ? plan.featuresEn : plan.features).map(feature => <li key={feature}><Icon name="check" size={15} />{feature}</li>)}</ul>
            </article>
          )
        })}
      </div>
      <p className="pricing-footnote"><Icon name="shield" size={15} /> {isEnglish ? 'Prices are indicative. Change your plan as your business needs evolve.' : 'الأسعار إرشادية، ويمكنك تغيير خطتك حسب احتياج شركتك.'}</p>
    </section>
  )
}

export function FaqSection({ language }) {
  const isEnglish = language === 'en'

  return (
    <section className="section faq-section" id="faq">
      <div className="faq-intro">
        <span className="eyebrow">{isEnglish ? 'Quick answers' : 'إجابات سريعة'}</span>
        <h2>{isEnglish ? <>Have a question?<br /><span>We’re here to help.</span></> : <>عندك سؤال؟<br /><span>خلّينا نوضّح.</span></>}</h2>
        <p>{isEnglish ? 'Find out more about how Sira works and which plan is right for you.' : 'لو محتاج تعرف تفاصيل أكثر عن طريقة العمل أو الباقات، ابدأ من هنا.'}</p>
        <a className="text-link" href="mailto:hello@siraerp.cloud">{isEnglish ? 'Contact our team' : 'تواصل مع فريقنا'} <Icon name="arrowLeft" size={16} /></a>
      </div>
      <div className="faq-list">
        {questions.map((item, index) => (
          <details className="faq-item" key={item.question} open={index === 0}>
            <summary>{isEnglish ? item.questionEn : item.question}<span><Icon name="chevron" size={18} /></span></summary>
            <p>{isEnglish ? item.answerEn : item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function CtaSection({ language }) {
  const isEnglish = language === 'en'

  return (
    <section className="cta-section" id="contact">
      <div className="cta-orb orb-one" />
      <div className="cta-orb orb-two" />
      <div className="cta-content">
        <span className="eyebrow"><span className="live-dot" /> {isEnglish ? 'Your next step starts here' : 'خطوتك الجاية تبدأ هنا'}</span>
        <h2>{isEnglish ? <>Make time for the work<br /><span>that grows your business.</span></> : <>خلّي وقتك للشغل اللي<br /><span>يكبّر شركتك.</span></>}</h2>
        <p>{isEnglish ? 'Bring your daily operations together and start your trial with no commitment.' : 'رتّب عملياتك اليومية في مساحة واحدة، وابدأ تجربتك من غير التزام.'}</p>
        <div className="cta-actions">
          <a className="button button-primary button-large" href="/signup">{isEnglish ? 'Try free for 14 days' : 'ابدأ تجربتك المجانية لمدة 14 يومًا'} <Icon name="arrowLeft" size={18} /></a>
          <a className="button button-ghost button-large" href="#faq">{isEnglish ? 'Learn more' : 'اعرف أكثر'}</a>
        </div>
        <span className="cta-note"><Icon name="check" size={15} /> {isEnglish ? 'Easy setup · 14 days free · Any device' : 'إعداد سهل · 14 يومًا مجانًا · من أي جهاز'}</span>
      </div>
    </section>
  )
}

export function SiteFooter({ language, onLanguageToggle }) {
  const isEnglish = language === 'en'

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-about">
          <Brand footer language={language} />
          <p>{isEnglish ? 'A cloud workspace that helps businesses organize daily operations and understand their numbers.' : 'مساحة عمل سحابية تساعد الشركات على ترتيب العمليات اليومية وفهم أرقامها بوضوح.'}</p>
          <a className="footer-contact" href="mailto:hello@siraerp.cloud">hello@siraerp.cloud <Icon name="arrow" size={15} /></a>
        </div>
        <div className="footer-links">
          <h3>{isEnglish ? 'Platform' : 'المنصة'}</h3>
          <a href="#features">{isEnglish ? 'Features' : 'المزايا'}</a>
          <a href="#e-invoice">{isEnglish ? 'E-invoicing' : 'الفوترة'}</a>
          <a href="#ai">{isEnglish ? 'AI assistant' : 'المساعد الذكي'}</a>
          <a href="#pricing">{isEnglish ? 'Pricing' : 'الأسعار'}</a>
        </div>
        <div className="footer-links">
          <h3>{isEnglish ? 'Explore' : 'استكشف'}</h3>
          <a href="#activities">{isEnglish ? 'Industries' : 'الأنشطة'}</a>
          <a href="#steps">{isEnglish ? 'Getting started' : 'كيف تبدأ'}</a>
          <a href="#faq">{isEnglish ? 'FAQ' : 'الأسئلة الشائعة'}</a>
          <a href="#contact">{isEnglish ? 'Contact us' : 'تواصل معنا'}</a>
        </div>
        <div className="footer-news">
          <span className="eyebrow">SIRA BUSINESS CLOUD</span>
          <p>{isEnglish ? 'Clearer operations. Smarter decisions.' : 'إدارة أوضح. قرارات أذكى.'}</p>
          <span className="footer-market"><Icon name="globe" size={15} /> {isEnglish ? 'Egypt · Saudi Arabia' : 'مصر · السعودية'}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{isEnglish ? '© 2026 Sira. All rights reserved.' : '© ٢٠٢٦ سيرا. جميع الحقوق محفوظة.'}</span>
        <div>
          <a href="#top">{isEnglish ? 'Privacy policy' : 'سياسة الخصوصية'}</a>
          <a href="#top">{isEnglish ? 'Terms & conditions' : 'الشروط والأحكام'}</a>
          <LanguageToggle language={language} onToggle={onLanguageToggle} />
        </div>
      </div>
    </footer>
  )
}
