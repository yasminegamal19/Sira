import { useEffect, useState } from 'react'
import ActivitiesSection from '../components/landing/ActivitiesSection.jsx'
import AssistantSection from '../components/landing/AssistantSection.jsx'
import BusinessPulseSection from '../components/landing/BusinessPulseSection.jsx'
import ComplianceSection from '../components/landing/ComplianceSection.jsx'
import FeaturesSection from '../components/landing/FeaturesSection.jsx'
import HeroSection from '../components/landing/HeroSection.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import {
  CtaSection,
  FaqSection,
  PricingSection,
  SiteFooter,
  StepsSection,
} from '../components/landing/SupportingSections.jsx'
import '../App.css'
import './LandingPage.css'

const languageStorageKey = 'sira-language'

function getInitialLanguage() {
  return window.localStorage.getItem(languageStorageKey) === 'en' ? 'en' : 'ar'
}

export default function LandingPage() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('sira-theme', 'light')
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      '#f4f8fc',
    )
  }, [])

  useEffect(() => {
    const isEnglish = language === 'en'
    window.localStorage.setItem(languageStorageKey, language)
    document.documentElement.lang = language
    document.documentElement.dir = isEnglish ? 'ltr' : 'rtl'
    document.title = isEnglish
      ? 'Sira | Cloud workspace for business'
      : 'سيرا | مساحة عمل سحابية لإدارة الشركات'
  }, [language])

  return (
    <div className="site" data-theme="light" dir={language === 'en' ? 'ltr' : 'rtl'} id="top" lang={language}>
      <SiteHeader
        language={language}
        onLanguageToggle={() => setLanguage(current => current === 'ar' ? 'en' : 'ar')}
        menuOpen={menuOpen}
        onMenuClose={() => setMenuOpen(false)}
        onMenuToggle={() => setMenuOpen(open => !open)}
      />
      <main>
        <HeroSection language={language} />
        <ActivitiesSection language={language} />
        <FeaturesSection language={language} />
        <BusinessPulseSection language={language} />
        <ComplianceSection language={language} />
        <AssistantSection language={language} />
        <StepsSection language={language} />
        <PricingSection language={language} />
        <FaqSection language={language} />
        <CtaSection language={language} />
      </main>
      <SiteFooter language={language} onLanguageToggle={() => setLanguage(current => current === 'ar' ? 'en' : 'ar')} />
    </div>
  )
}
