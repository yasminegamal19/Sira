import Icon from '../common/Icon.jsx'

export default function DashboardPreview({ language = 'ar' }) {
  const isEnglish = language === 'en'
  const sidebarItems = isEnglish
    ? [['chart', 'Overview', true], ['receipt', 'Sales'], ['box', 'Inventory'], ['bag', 'Purchases'], ['wallet', 'Accounting'], ['users', 'Team']]
    : [['chart', 'الرئيسية', true], ['receipt', 'المبيعات'], ['box', 'المخزون'], ['bag', 'المشتريات'], ['wallet', 'الحسابات'], ['users', 'الفريق']]
  const weekdays = isEnglish ? ['S', 'M', 'T', 'W', 'T', 'F', 'S'] : ['س', 'ح', 'ن', 'ث', 'ر', 'خ', 'ج']
  const customers = isEnglish
    ? [['Ahmed Trading', 'INV-2048', '1,350'], ['Al Huda Group', 'INV-2047', '8,400'], ['Wadi Company', 'INV-2046', '3,200']]
    : [['أحمد للتجارة', 'INV-2048', '١٬٣٥٠'], ['مؤسسة الهدى', 'INV-2047', '٨٬٤٠٠'], ['شركة الوادي', 'INV-2046', '٣٬٢٠٠']]

  return (
    <div aria-label={isEnglish ? 'Sira dashboard preview' : 'معاينة لوحة تحكم سيرا'} className="dashboard-shell">
      <div className="browser-bar">
        <div className="browser-dots"><i /><i /><i /></div>
        <span className="browser-address"><Icon name="shield" size={13} /> workspace.sira.cloud</span>
        <span className="browser-status"><b /> {isEnglish ? 'Online now' : 'متصل الآن'}</span>
      </div>
      <div className="dashboard">
        <aside className="dashboard-sidebar">
          <div className="workspace-name"><span className="workspace-avatar">{isEnglish ? 'N' : 'ن'}</span><span>{isEnglish ? 'Al Noor Co.' : 'شركة النور'}<small>{isEnglish ? 'Head office' : 'المقر الرئيسي'}</small></span><Icon name="chevron" size={14} /></div>
          <div className="sidebar-label">{isEnglish ? 'Workspace' : 'مساحة العمل'}</div>
          {sidebarItems.map(([icon, label, active]) => (
            <div className={`sidebar-link${active ? ' active' : ''}`} key={label}><Icon name={icon} size={16} />{label}</div>
          ))}
          <div className="sidebar-bottom"><Icon name="spark" size={16} /> {isEnglish ? 'Sira Assistant' : 'مساعد سيرا'} <span>{isEnglish ? 'New' : 'جديد'}</span></div>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-top"><div><span className="dashboard-date">{isEnglish ? 'Sunday, November 2, 2026' : 'الأحد، ٢ نوفمبر ٢٠٢٦'}</span><h3>{isEnglish ? 'Welcome, Ahmed' : 'أهلًا بك يا أحمد'} <span>✦</span></h3></div><div className="user-bubble">{isEnglish ? 'A' : 'أ'}</div></div>
          <div className="dashboard-summary">
            <div className="summary-card"><span>{isEnglish ? 'Total sales' : 'إجمالي المبيعات'}</span><strong>{isEnglish ? '48,250' : '٤٨٬٢٥٠'} <small>{isEnglish ? 'EGP' : 'ج.م'}</small></strong><em>{isEnglish ? '↑ 12% this week' : '↑ ١٢٪ هذا الأسبوع'}</em></div>
            <div className="summary-card"><span>{isEnglish ? 'Invoices due' : 'فواتير قيد التحصيل'}</span><strong>{isEnglish ? '12,800' : '١٢٬٨٠٠'} <small>{isEnglish ? 'EGP' : 'ج.م'}</small></strong><em className="muted-em">{isEnglish ? '4 open invoices' : '٤ فواتير مفتوحة'}</em></div>
            <div className="summary-card"><span>{isEnglish ? 'Active items' : 'أصناف نشطة'}</span><strong>{isEnglish ? '248' : '٢٤٨'} <small>{isEnglish ? 'items' : 'صنف'}</small></strong><em>{isEnglish ? '↑ 8 new items' : '↑ ٨ أصناف جديدة'}</em></div>
          </div>
          <div className="dashboard-lower">
            <div className="chart-card"><div className="panel-title"><span>{isEnglish ? 'Sales overview' : 'ملخص المبيعات'}</span><small>{isEnglish ? 'Last 7 days⌄' : 'آخر ٧ أيام⌄'}</small></div><div className="chart-total">{isEnglish ? '186,400' : '١٨٦٬٤٠٠'} <small>{isEnglish ? 'EGP' : 'ج.م'}</small></div><div className="chart-visual"><div className="chart-y"><span>{isEnglish ? '20k' : '٢٠ ألف'}</span><span>{isEnglish ? '10k' : '١٠ آلاف'}</span><span>0</span></div><div className="chart-bars">{[42, 66, 50, 84, 58, 76, 96].map((height, index) => <div className="bar-column" key={index}><i style={{ height: `${height}%` }} /><small>{weekdays[index]}</small></div>)}</div></div></div>
            <div className="invoice-card"><div className="panel-title"><span>{isEnglish ? 'Recent invoices' : 'أحدث الفواتير'}</span><small>{isEnglish ? 'View all' : 'عرض الكل'}</small></div>{customers.map(([name, number, value]) => <div className="invoice-row" key={number}><span className="invoice-avatar">{name.charAt(0)}</span><span className="invoice-customer">{name}<small>{number}</small></span><strong>{value} {isEnglish ? 'EGP' : 'ج.م'}</strong></div>)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
