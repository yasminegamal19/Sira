import { useEffect, useState } from 'react'
import Brand from '../components/common/Brand.jsx'
import Icon from '../components/common/Icon.jsx'
import LanguageToggle from '../components/common/LanguageToggle.jsx'
import '../App.css'
import './SignupPage.css'

const signupSteps = {
  ar: ['الدولة', 'النشاط', 'الباقة', 'الشركة', 'الحساب'],
  en: ['Country', 'Industry', 'Plan', 'Company', 'Account'],
}

const countries = [
  {
    code: 'eg',
    badge: 'EG',
    name: 'مصر',
    nameEn: 'Egypt',
    currency: 'ج.م',
    currencyEn: 'EGP',
    currencyName: 'الجنيه المصري',
    currencyNameEn: 'Egyptian pounds',
    compliance: 'متوافق مع منظومة الفاتورة الإلكترونية ETA',
    complianceEn: 'Compatible with Egypt’s ETA e-invoicing system',
    prices: [499, 999, 1999],
  },
  {
    code: 'sa',
    badge: 'SA',
    name: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    currency: 'ر.س',
    currencyEn: 'SAR',
    currencyName: 'الريال السعودي',
    currencyNameEn: 'Saudi riyals',
    compliance: 'متوافق مع الفوترة الإلكترونية ZATCA (فاتورة)',
    complianceEn: 'Compatible with ZATCA e-invoicing (Fatoora)',
    prices: [99, 199, 399],
  },
]

const activities = [
  {
    id: 'retail',
    name: 'تجزئة ومحلات',
    nameEn: 'Retail & stores',
    description: 'محلات الملابس والإلكترونيات والسوبر ماركت: نقاط بيع سريعة، باركود، مخزون لحظي وفاتورة إلكترونية.',
    descriptionEn: 'Clothing, electronics, and grocery stores: fast point of sale, barcodes, live inventory, and e-invoicing.',
    icon: 'bag',
  },
  {
    id: 'wholesale',
    name: 'جملة وتوزيع',
    nameEn: 'Wholesale & distribution',
    description: 'تجار الجملة وشركات التوزيع: قوائم أسعار متعددة، مندوبين، مخازن وفروع، ومتابعة مديونيات العملاء.',
    descriptionEn: 'Wholesalers and distributors: multiple price lists, sales reps, warehouses, branches, and customer balances.',
    icon: 'box',
  },
  {
    id: 'restaurant',
    name: 'مطاعم وكافيهات',
    nameEn: 'Restaurants & cafés',
    description: 'المطاعم والكافيهات: كاشير سريع، مكونات ووصفات، مخزون الخامات وتقارير المبيعات اليومية.',
    descriptionEn: 'Restaurants and cafés: fast checkout, recipes, ingredient inventory, and daily sales reports.',
    icon: 'receipt',
  },
  {
    id: 'services',
    name: 'شركات خدمات',
    nameEn: 'Service businesses',
    description: 'الوكالات والاستشارات وشركات الصيانة: عقود واشتراكات، مشاريع وساعات عمل، وفواتير دورية.',
    descriptionEn: 'Agencies, consultants, and maintenance firms: contracts, subscriptions, projects, timesheets, and recurring invoices.',
    icon: 'briefcase',
  },
  {
    id: 'manufacturing',
    name: 'مصانع وورش',
    nameEn: 'Manufacturing & workshops',
    description: 'المصانع والورش: قوائم المواد، أوامر التشغيل، التصنيع لدى الغير، الجودة وتكلفة الإنتاج.',
    descriptionEn: 'Factories and workshops: bills of materials, work orders, outsourced manufacturing, quality, and production costs.',
    icon: 'chart',
  },
  {
    id: 'healthcare',
    name: 'عيادات ومراكز طبية',
    nameEn: 'Clinics & medical centers',
    description: 'العيادات والمراكز الطبية: حسابات وفواتير الخدمات، المستلزمات الطبية، وملفات المرضى كعملاء.',
    descriptionEn: 'Clinics and medical centers: service billing, medical supplies, and patient records.',
    icon: 'shield',
  },
  {
    id: 'construction',
    name: 'مقاولات',
    nameEn: 'Construction',
    description: 'شركات المقاولات: تكاليف المشاريع والمستخلصات، المعدات كأصول، العمالة والرواتب ومشتريات المواقع.',
    descriptionEn: 'Contractors: project costs, progress claims, equipment assets, labor, payroll, and site purchasing.',
    icon: 'briefcase',
  },
  {
    id: 'general',
    name: 'نشاط عام',
    nameEn: 'Other business',
    description: 'أي نشاط آخر: ابدأ بالحسابات والمبيعات والمشتريات والمخازن، وأضف ما تحتاجه لاحقًا.',
    descriptionEn: 'For any other business: start with accounting, sales, purchasing, and inventory, then add what you need.',
    icon: 'spark',
  },
]

const planFeatures = [
  [
    'الحسابات',
    'المبيعات',
    'المشتريات',
    'المخازن',
    'نقاط البيع',
    'الفاتورة الإلكترونية (ETA مصر / ZATCA السعودية)',
  ],
  [
    'الحسابات',
    'المبيعات',
    'المشتريات',
    'المخازن',
    'نقاط البيع',
    'إدارة العملاء CRM',
    'المشاريع',
    'الأصول الثابتة',
    'الفاتورة الإلكترونية (ETA مصر / ZATCA السعودية)',
  ],
  [
    'الحسابات',
    'المبيعات',
    'المشتريات',
    'المخازن',
    'نقاط البيع',
    'إدارة العملاء CRM',
    'المشاريع',
    'التصنيع',
    'الأصول الثابتة',
    'الجودة',
    'الدعم والصيانة',
    'الموارد البشرية',
    'الرواتب',
    'الفاتورة الإلكترونية (ETA مصر / ZATCA السعودية)',
    'المساعد الذكي',
  ],
]

const planNames = ['الأساسية', 'النمو', 'الأعمال']
const planNamesEn = ['Starter', 'Growth', 'Business']
const planUsers = [2, 5, 15]
const planStorage = [2, 5, 20]
const planFeaturesEn = [
  ['Accounting', 'Sales', 'Purchasing', 'Inventory', 'Point of sale', 'E-invoicing (ETA Egypt / ZATCA Saudi Arabia)'],
  ['Accounting', 'Sales', 'Purchasing', 'Inventory', 'Point of sale', 'Customer management (CRM)', 'Projects', 'Fixed assets', 'E-invoicing (ETA Egypt / ZATCA Saudi Arabia)'],
  ['Accounting', 'Sales', 'Purchasing', 'Inventory', 'Point of sale', 'Customer management (CRM)', 'Projects', 'Manufacturing', 'Fixed assets', 'Quality', 'Support & maintenance', 'Human resources', 'Payroll', 'E-invoicing (ETA Egypt / ZATCA Saudi Arabia)', 'AI assistant'],
]

const signupCopy = {
  ar: {
    loginPrompt: 'لديك حساب؟',
    login: 'سجّل الدخول',
    trialBadge: 'تجربة مجانية 14 يومًا، بدون بطاقة',
    title: 'جهّز نظام شركتك في دقائق',
    subtitle: 'حسابات ومبيعات ومخازن وفاتورة إلكترونية، بالعربي وعلى السحابة.',
    formLabel: 'إنشاء حساب جديد',
    summary: 'ملخص طلبك',
    countryTitle: 'أين تعمل شركتك؟',
    countryIntro: 'نضبط العملة والضرائب والفاتورة الإلكترونية حسب دولتك.',
    activityTitle: 'ما هو نشاط شركتك؟',
    activityIntro: 'نجهّز لك النظام بقالب مناسب لنشاطك: المجموعات والوحدات ونقاط البيع.',
    planTitle: 'اختر باقتك',
    planIntro: 'ابدأ مجانًا لمدة 14 يومًا على أي باقة، ويمكنك التغيير لاحقًا.',
    recommended: 'مقترحة لنشاطك',
    popular: 'الأكثر طلبًا',
    monthly: 'شهريًا',
    users: 'مستخدمين',
    storageUnit: 'جيجا',
    companyTitle: 'بيانات الشركة',
    companyIntro: 'اختر رابطًا مميزًا لنظامك، ستدخل منه أنت وفريقك.',
    companyName: 'اسم الشركة',
    companyPlaceholder: 'مثال: مؤسسة النور للتجارة',
    systemUrl: 'رابط النظام',
    slugHint: 'حروف إنجليزية صغيرة وأرقام وشرطة بين الكلمات فقط.',
    accountTitle: 'أنشئ حسابك',
    accountIntro: 'ستستخدم هذا البريد وكلمة المرور للدخول إلى نظامك وإلى بوابة العملاء.',
    fullName: 'الاسم بالكامل',
    phone: 'رقم الجوال',
    phoneHint: 'بالصيغة الدولية، مثل +201001234567',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    showPassword: 'إظهار كلمة المرور',
    hidePassword: 'إخفاء كلمة المرور',
    passwordHint: '8 أحرف على الأقل تتضمن حروفًا وأرقامًا.',
    confirmPassword: 'تأكيد كلمة المرور',
    back: 'السابق',
    next: 'التالي',
    createAccount: 'أنشئ نظامي الآن',
    countrySummary: 'الدولة',
    activitySummary: 'النشاط',
    planSummary: 'الباقة',
    urlSummary: 'الرابط',
    dueToday: 'المستحق اليوم',
    trialSummary: 'تجربة مجانية لمدة 14 يومًا، بدون بطاقة.',
    signupNotConnected: 'اكتملت البيانات في النموذج. إنشاء الحساب غير متاح حتى ربط خدمة التسجيل.',
    footer: '© 2026 سيرا · ملكية وتطوير',
  },
  en: {
    loginPrompt: 'Already have an account?',
    login: 'Log in',
    trialBadge: '14-day free trial, no card required',
    title: 'Set up your business in minutes',
    subtitle: 'Accounting, sales, inventory, and e-invoicing—in Arabic and in the cloud.',
    formLabel: 'Create a new account',
    summary: 'Your order summary',
    countryTitle: 'Where does your business operate?',
    countryIntro: 'We’ll set up currency, taxes, and e-invoicing for your country.',
    activityTitle: 'What does your business do?',
    activityIntro: 'We’ll tailor your setup to your industry, including products, units, and point of sale.',
    planTitle: 'Choose your plan',
    planIntro: 'Try any plan free for 14 days. You can change it later.',
    recommended: 'Recommended for your industry',
    popular: 'Most popular',
    monthly: 'monthly',
    users: 'users',
    storageUnit: 'GB',
    companyTitle: 'Company details',
    companyIntro: 'Choose a unique workspace address for you and your team.',
    companyName: 'Company name',
    companyPlaceholder: 'e.g. Al Noor Trading',
    systemUrl: 'Workspace URL',
    slugHint: 'Use lowercase English letters, numbers, and hyphens between words.',
    accountTitle: 'Create your account',
    accountIntro: 'Use this email and password to access your workspace and customer portal.',
    fullName: 'Full name',
    phone: 'Mobile number',
    phoneHint: 'Use international format, e.g. +201001234567',
    email: 'Email address',
    password: 'Password',
    showPassword: 'Show password',
    hidePassword: 'Hide password',
    passwordHint: 'At least 8 characters, including letters and numbers.',
    confirmPassword: 'Confirm password',
    back: 'Back',
    next: 'Next',
    createAccount: 'Create my workspace',
    countrySummary: 'Country',
    activitySummary: 'Industry',
    planSummary: 'Plan',
    urlSummary: 'Workspace URL',
    dueToday: 'Due today',
    trialSummary: '14-day free trial, no card required.',
    signupNotConnected: 'Your details are complete. Account creation will be available once the registration service is connected.',
    footer: '© 2026 Sira · All rights reserved',
  },
}

function getStoredLanguage() {
  return window.localStorage.getItem('sira-language') === 'en' ? 'en' : 'ar'
}

function validateStep(step, form, language) {
  const isEnglish = language === 'en'
  if (step === 0 && !form.country) return { country: isEnglish ? 'Choose a country to continue.' : 'اختر الدولة للمتابعة.' }
  if (step === 1 && !form.activity) return { activity: isEnglish ? 'Choose your industry to continue.' : 'اختر نشاط شركتك للمتابعة.' }
  if (step === 2 && form.plan === null) return { plan: isEnglish ? 'Choose a plan to continue.' : 'اختر الباقة المناسبة للمتابعة.' }
  if (step === 3) {
    const errors = {}
    if (!form.company.trim()) errors.company = isEnglish ? 'Enter your company name.' : 'أدخل اسم الشركة.'
    if (!/^[a-z0-9](?:[a-z0-9-]{1,28}[a-z0-9])$/.test(form.slug)) {
      errors.slug = isEnglish
        ? 'Use 3–30 lowercase letters, numbers, or hyphens between words.'
        : 'استخدم 3 إلى 30 حرفًا إنجليزيًا صغيرًا أو رقمًا أو شرطة بين الكلمات.'
    }
    return errors
  }
  if (step === 4) {
    const errors = {}
    if (!form.fullName.trim()) errors.fullName = isEnglish ? 'Enter your full name.' : 'أدخل الاسم بالكامل.'
    if (!/^\+?[0-9\s()-]{8,20}$/.test(form.phone.trim())) errors.phone = isEnglish ? 'Enter a valid international phone number.' : 'أدخل رقم جوال بصيغة دولية صحيحة.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = isEnglish ? 'Enter a valid email address.' : 'أدخل بريدًا إلكترونيًا صحيحًا.'
    if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(form.password)) {
      errors.password = isEnglish ? 'Use at least 8 characters, including letters and numbers.' : 'استخدم 8 أحرف على الأقل، مع حروف وأرقام.'
    }
    if (form.password !== form.passwordConfirmation) errors.passwordConfirmation = isEnglish ? 'Passwords do not match.' : 'كلمتا المرور غير متطابقتين.'
    return errors
  }
  return {}
}

function getInitialForm() {
  const searchParams = new URLSearchParams(window.location.search)
  const country = searchParams.get('country')
  const plan = Number(searchParams.get('plan'))
  const validCountry = countries.some(option => option.code === country) ? country : ''
  const validPlan = Number.isInteger(plan) && plan >= 0 && plan < planNames.length ? plan : 0

  return {
    country: validCountry,
    activity: '',
    plan: validPlan,
    company: '',
    slug: '',
    fullName: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }
}

export default function SignupPage() {
  const [language, setLanguage] = useState(getStoredLanguage)
  const [step, setStep] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitMessage, setSubmitMessage] = useState('')
  const [form, setForm] = useState(getInitialForm)
  const isEnglish = language === 'en'
  const copy = signupCopy[language]

  useEffect(() => {
    document.title = isEnglish ? 'Start your free trial | Sira' : 'ابدأ تجربتك المجانية | سيرا'
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      '#f4f8fc',
    )
    window.localStorage.setItem('sira-theme', 'light')
    window.localStorage.setItem('sira-language', language)
    document.documentElement.lang = language
    document.documentElement.dir = isEnglish ? 'ltr' : 'rtl'
  }, [language, isEnglish])

  const selectedCountry = countries.find(country => country.code === form.country)
  const selectedPlan = form.plan === null ? null : form.plan
  const selectedPrice = selectedCountry && selectedPlan !== null
    ? selectedCountry.prices[selectedPlan]
    : 0

  function updateForm(field, value) {
    setForm(current => ({ ...current, [field]: value }))
    setErrors(current => ({ ...current, [field]: undefined }))
    setSubmitMessage('')
  }

  function goToStep(nextStep) {
    if (nextStep < step) {
      setStep(nextStep)
      setErrors({})
      setSubmitMessage('')
      return
    }

    const stepErrors = validateStep(step, form, language)
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }

    setErrors({})
    setStep(nextStep)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const stepErrors = validateStep(4, form, language)
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }

    setErrors({})
    setSubmitMessage(copy.signupNotConnected)
  }

  function toggleLanguage() {
    setLanguage(current => current === 'ar' ? 'en' : 'ar')
  }

  return (
    <div className="signup-page" data-theme="light" dir={isEnglish ? 'ltr' : 'rtl'} lang={language}>
      <header className="signup-header">
        <div className="signup-header-inner">
          <Brand homeHref="/" language={language} />
          <div className="signup-header-actions">
            <LanguageToggle language={language} onToggle={toggleLanguage} />
            <span>{copy.loginPrompt}</span>
            <a href="/login">{copy.login}</a>
          </div>
        </div>
      </header>

      <main>
        <section className="signup-hero">
          <div className="signup-hero-inner">
            <div className="signup-trial-badge"><Icon name="spark" size={16} /> {copy.trialBadge}</div>
            <h1>{copy.title}</h1>
            <p>{copy.subtitle}</p>
          </div>
        </section>

        <section aria-label={copy.formLabel} className="signup-layout">
          <form className="signup-wizard" noValidate onSubmit={handleSubmit}>
            <ol aria-label={isEnglish ? 'Sign-up steps' : 'خطوات التسجيل'} className="signup-stepper">
              {signupSteps[language].map((label, index) => (
                <li className={index === step ? 'current' : index < step ? 'complete' : ''} key={label}>
                  <button
                    aria-current={index === step ? 'step' : undefined}
                    disabled={index >= step}
                    onClick={() => goToStep(index)}
                    type="button"
                  >
                    <span className="step-indicator">{index < step ? <Icon name="check" size={16} /> : index + 1}</span>
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ol>

            <div aria-live="polite" className="signup-step-content">
              {step === 0 && (
                <section className="signup-panel">
                  <h2>{copy.countryTitle}</h2>
                  <p className="signup-panel-intro">{copy.countryIntro}</p>
                  <div className="country-options">
                    {countries.map(country => (
                      <button
                        aria-pressed={form.country === country.code}
                        className={`signup-choice country-choice${form.country === country.code ? ' selected' : ''}`}
                        key={country.code}
                        onClick={() => updateForm('country', country.code)}
                        type="button"
                      >
                        <span className="signup-choice-icon">{country.badge}</span>
                        <span className="choice-copy">
                          <strong>{isEnglish ? country.nameEn : country.name}</strong>
                          <small>{isEnglish ? `Prices in ${country.currencyNameEn}` : `الأسعار بـ${country.currencyName}`}</small>
                          <small>{isEnglish ? country.complianceEn : country.compliance}</small>
                        </span>
                        {form.country === country.code && <Icon className="choice-check" name="check" size={18} />}
                      </button>
                    ))}
                  </div>
                  {errors.country && <p className="field-error" role="alert">{errors.country}</p>}
                </section>
              )}

              {step === 1 && (
                <section className="signup-panel">
                  <h2>{copy.activityTitle}</h2>
                  <p className="signup-panel-intro">{copy.activityIntro}</p>
                  <div className="activity-options">
                    {activities.map(activity => (
                      <button
                        aria-pressed={form.activity === activity.id}
                        className={`signup-choice activity-choice${form.activity === activity.id ? ' selected' : ''}`}
                        key={activity.id}
                        onClick={() => updateForm('activity', activity.id)}
                        type="button"
                      >
                        <span className="signup-choice-icon"><Icon name={activity.icon} size={19} /></span>
                        <span className="choice-copy">
                          <strong>{isEnglish ? activity.nameEn : activity.name}</strong>
                          <small>{isEnglish ? activity.descriptionEn : activity.description}</small>
                        </span>
                        {form.activity === activity.id && <Icon className="choice-check" name="check" size={18} />}
                      </button>
                    ))}
                  </div>
                  {errors.activity && <p className="field-error" role="alert">{errors.activity}</p>}
                </section>
              )}

              {step === 2 && (
                <section className="signup-panel">
                  <h2>{copy.planTitle}</h2>
                  <p className="signup-panel-intro">{copy.planIntro}</p>
                  <div className="signup-plans">
                    {(isEnglish ? planNamesEn : planNames).map((name, index) => (
                      <button
                        aria-pressed={selectedPlan === index}
                        className={`signup-plan${selectedPlan === index ? ' selected' : ''}${index === 1 ? ' popular' : ''}`}
                        key={name}
                        onClick={() => updateForm('plan', index)}
                        type="button"
                      >
                        {index === 0 && <span className="plan-tag">{copy.recommended}</span>}
                        {index === 1 && <span className="plan-tag">{copy.popular}</span>}
                        <strong className="signup-plan-name">{name}</strong>
                        <span className="signup-plan-price">{selectedCountry ? selectedCountry.prices[index].toLocaleString(isEnglish ? 'en-US' : 'ar-EG') : '—'} <small>{selectedCountry ? (isEnglish ? selectedCountry.currencyEn : selectedCountry.currency) : ''} / {copy.monthly}</small></span>
                        <span className="signup-plan-limit">{isEnglish ? `Up to ${planUsers[index]} users · ${planStorage[index]} GB` : `حتى ${planUsers[index]} مستخدمين · ${planStorage[index]} جيجا`}</span>
                        <ul>
                          {(isEnglish ? planFeaturesEn[index] : planFeatures[index]).map(feature => (
                            <li key={feature}><Icon name="check" size={14} />{feature}</li>
                          ))}
                        </ul>
                      </button>
                    ))}
                  </div>
                  {errors.plan && <p className="field-error" role="alert">{errors.plan}</p>}
                </section>
              )}

              {step === 3 && (
                <section className="signup-panel">
                  <h2>{copy.companyTitle}</h2>
                  <p className="signup-panel-intro">{copy.companyIntro}</p>
                  <div className="signup-fields">
                    <label className="signup-field" htmlFor="signup-company">
                      <span>{copy.companyName}</span>
                      <input
                        id="signup-company"
                        autoComplete="organization"
                        aria-invalid={Boolean(errors.company)}
                        onChange={event => updateForm('company', event.target.value)}
                        placeholder={copy.companyPlaceholder}
                        value={form.company}
                      />
                      {errors.company && <small className="field-error">{errors.company}</small>}
                    </label>
                    <label className="signup-field">
                      <span>{copy.systemUrl}</span>
                      <span className="slug-input">
                        <input
                          aria-label={copy.systemUrl}
                          aria-invalid={Boolean(errors.slug)}
                          autoComplete="url"
                          dir="ltr"
                          maxLength={30}
                          onChange={event => updateForm('slug', event.target.value.toLowerCase())}
                          placeholder="yourcompany"
                          value={form.slug}
                        />
                        <span>.siraerp.cloud</span>
                      </span>
                      <small className={errors.slug ? 'field-error' : ''}>
                        {errors.slug || copy.slugHint}
                      </small>
                    </label>
                  </div>
                </section>
              )}

              {step === 4 && (
                <section className="signup-panel">
                  <h2>{copy.accountTitle}</h2>
                  <p className="signup-panel-intro">{copy.accountIntro}</p>
                  <div className="signup-fields account-fields">
                    <label className="signup-field" htmlFor="signup-full-name">
                      <span>{copy.fullName}</span>
                      <input
                        id="signup-full-name"
                        autoComplete="name"
                        aria-invalid={Boolean(errors.fullName)}
                        onChange={event => updateForm('fullName', event.target.value)}
                        value={form.fullName}
                      />
                      {errors.fullName && <small className="field-error">{errors.fullName}</small>}
                    </label>
                    <label className="signup-field" htmlFor="signup-phone">
                      <span>{copy.phone}</span>
                      <input
                        id="signup-phone"
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.phone)}
                        dir="ltr"
                        inputMode="tel"
                        onChange={event => updateForm('phone', event.target.value)}
                        placeholder={form.country === 'sa' ? '+9665XXXXXXXX' : '+201XXXXXXXXX'}
                        value={form.phone}
                      />
                      <small className={errors.phone ? 'field-error' : ''}>{errors.phone || copy.phoneHint}</small>
                    </label>
                    <label className="signup-field" htmlFor="signup-email">
                      <span>{copy.email}</span>
                      <input
                        id="signup-email"
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                        dir="ltr"
                        inputMode="email"
                        onChange={event => updateForm('email', event.target.value)}
                        type="email"
                        value={form.email}
                      />
                      {errors.email && <small className="field-error">{errors.email}</small>}
                    </label>
                    <label className="signup-field">
                      <span>{copy.password}</span>
                      <span className="password-input">
                        <input
                          aria-label={copy.password}
                          autoComplete="new-password"
                          aria-invalid={Boolean(errors.password)}
                          dir="ltr"
                          onChange={event => updateForm('password', event.target.value)}
                          type={showPassword ? 'text' : 'password'}
                          value={form.password}
                        />
                        <button
                          aria-label={showPassword ? copy.hidePassword : copy.showPassword}
                          onClick={() => setShowPassword(visible => !visible)}
                          type="button"
                        >
                          <Icon name={showPassword ? 'x' : 'spark'} size={17} />
                        </button>
                      </span>
                      <small className={errors.password ? 'field-error' : ''}>{errors.password || copy.passwordHint}</small>
                    </label>
                    <label className="signup-field" htmlFor="signup-password-confirmation">
                      <span>{copy.confirmPassword}</span>
                      <input
                        id="signup-password-confirmation"
                        autoComplete="new-password"
                        aria-invalid={Boolean(errors.passwordConfirmation)}
                        dir="ltr"
                        onChange={event => updateForm('passwordConfirmation', event.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        value={form.passwordConfirmation}
                      />
                      {errors.passwordConfirmation && <small className="field-error">{errors.passwordConfirmation}</small>}
                    </label>
                  </div>
                  {submitMessage && <p className="signup-submit-message" role="status">{submitMessage}</p>}
                </section>
              )}
            </div>

            <div className="signup-navigation">
              {step > 0 ? (
                <button className="signup-back" onClick={() => goToStep(step - 1)} type="button">
                  <Icon name="arrowLeft" size={17} /> {copy.back}
                </button>
              ) : <span />}
              {step < signupSteps.ar.length - 1 ? (
                <button className="signup-next" onClick={() => goToStep(step + 1)} type="button">
                  {copy.next} <Icon name="arrowLeft" size={17} />
                </button>
              ) : (
                <button className="signup-next" type="submit">{copy.createAccount} <Icon name="arrowLeft" size={17} /></button>
              )}
            </div>
          </form>

          <aside aria-label={copy.summary} className="signup-summary">
            <h2>{copy.summary}</h2>
            <dl>
              <div><dt>{copy.countrySummary}</dt><dd>{selectedCountry ? (isEnglish ? selectedCountry.nameEn : selectedCountry.name) : '—'}</dd></div>
              <div><dt>{copy.activitySummary}</dt><dd>{activities.find(activity => activity.id === form.activity)?.[isEnglish ? 'nameEn' : 'name'] ?? '—'}</dd></div>
              <div><dt>{copy.planSummary}</dt><dd>{selectedPlan === null ? '—' : (isEnglish ? planNamesEn : planNames)[selectedPlan]}</dd></div>
              <div><dt>{copy.urlSummary}</dt><dd dir="ltr">{form.slug ? `${form.slug}.siraerp.cloud` : '—'}</dd></div>
            </dl>
            <div className="signup-summary-price">
              <span>{copy.dueToday}</span>
              <strong>0 <small>{selectedCountry ? (isEnglish ? selectedCountry.currencyEn : selectedCountry.currency) : ''}</small></strong>
            </div>
            <p className="signup-summary-trial">
              {selectedPrice
                ? (isEnglish
                    ? `After 14 days: ${selectedPrice.toLocaleString('en-US')} ${selectedCountry.currencyEn} per month when activated`
                    : `بعد 14 يومًا: ${selectedPrice.toLocaleString('ar-EG')} ${selectedCountry.currency} شهريًا عند التفعيل`)
                : copy.trialSummary}
            </p>
          </aside>
        </section>
      </main>

      <footer className="signup-footer">{copy.footer}</footer>
    </div>
  )
}
