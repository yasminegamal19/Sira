export const navItems = [
  { ar: 'الأنشطة', en: 'Industries', href: '#activities' },
  { ar: 'المزايا', en: 'Features', href: '#features' },
  { ar: 'نبض الأعمال', en: 'Business pulse', href: '#pulse' },
  { ar: 'الفاتورة الإلكترونية', en: 'E-invoicing', href: '#e-invoice' },
  { ar: 'المساعد الذكي', en: 'AI assistant', href: '#ai' },
  { ar: 'كيف يعمل', en: 'How it works', href: '#steps' },
  { ar: 'الأسعار', en: 'Pricing', href: '#pricing' },
  { ar: 'الأسئلة الشائعة', en: 'FAQs', href: '#faq' },
]

export const activities = [
  { icon: 'bag', title: 'المتاجر والتجزئة', titleEn: 'Retail & Stores', description: 'مبيعات أسرع، باركود واضح، ومخزون دقيق لكل فرع.', descriptionEn: 'Speed up sales with clear barcodes and accurate inventory across every branch.', tags: ['نقاط بيع', 'فروع', 'مخزون'], tagsEn: ['POS', 'Branches', 'Inventory'] },
  { icon: 'box', title: 'التجارة والتوزيع', titleEn: 'Wholesale & Distribution', description: 'تابع الموردين والمندوبين والتحصيل من مكان واحد.', descriptionEn: 'Manage suppliers, sales reps, and collections from one place.', tags: ['موردون', 'مندوبون', 'تحصيل'], tagsEn: ['Suppliers', 'Sales reps', 'Collections'] },
  { icon: 'receipt', title: 'المطاعم والضيافة', titleEn: 'Restaurants & Hospitality', description: 'نظّم الطلبات والمشتريات وتكلفة المكونات بسهولة.', descriptionEn: 'Organize orders, purchasing, and ingredient costs with ease.', tags: ['طلبات', 'تكلفة', 'مخزون'], tagsEn: ['Orders', 'Costs', 'Inventory'] },
  { icon: 'briefcase', title: 'الشركات الخدمية', titleEn: 'Service Businesses', description: 'اربط المشاريع بعقودها وفواتيرها وساعات العمل.', descriptionEn: 'Connect projects with their contracts, invoices, and timesheets.', tags: ['مشاريع', 'عقود', 'فواتير'], tagsEn: ['Projects', 'Contracts', 'Invoices'] },
  { icon: 'chart', title: 'التصنيع والإنتاج', titleEn: 'Manufacturing', description: 'خطط للإنتاج وتابع التكاليف وحركة المواد الخام.', descriptionEn: 'Plan production and track costs and raw material movements.', tags: ['إنتاج', 'مواد خام', 'تكلفة'], tagsEn: ['Production', 'Materials', 'Costs'] },
  { icon: 'users', title: 'الفرق والموارد البشرية', titleEn: 'Teams & HR', description: 'اجمع بيانات الفريق والحضور والاستحقاقات في ملف واحد.', descriptionEn: 'Keep team records, attendance, and entitlements together.', tags: ['موظفون', 'حضور', 'رواتب'], tagsEn: ['Employees', 'Attendance', 'Payroll'] },
]

export const modules = [
  { icon: 'chart', title: 'الحسابات والمالية', titleEn: 'Accounting & Finance', description: 'صورة واضحة للتدفقات النقدية والمصروفات والأرباح.', descriptionEn: 'See your cash flow, expenses, and profit at a glance.' },
  { icon: 'receipt', title: 'المبيعات والفوترة', titleEn: 'Sales & Invoicing', description: 'عروض أسعار وفواتير ومتابعة للتحصيل.', descriptionEn: 'Create quotes and invoices, then track collections.' },
  { icon: 'box', title: 'المخزون والمشتريات', titleEn: 'Inventory & Purchasing', description: 'حركة الأصناف وأوامر الشراء والتنبيه عند انخفاض الكميات.', descriptionEn: 'Track stock movements, purchase orders, and low-stock alerts.' },
  { icon: 'users', title: 'إدارة العملاء', titleEn: 'Customer Management', description: 'سجل موحد للعملاء والفرص وملاحظات فريقك.', descriptionEn: 'Keep customer records, opportunities, and team notes together.' },
  { icon: 'briefcase', title: 'المشاريع والموظفون', titleEn: 'Projects & People', description: 'تابع تكاليف المشاريع وبيانات أعضاء الفريق.', descriptionEn: 'Track project costs and your team’s information.' },
  { icon: 'spark', title: 'مساعد الأعمال', titleEn: 'Business Assistant', description: 'اسأل عن مؤشراتك اليومية بلغة بسيطة.', descriptionEn: 'Ask about your daily business metrics in plain language.' },
]

export const plans = [
  { name: 'البداية', nameEn: 'Starter', description: 'للأعمال الصغيرة التي تريد تنظيم شغلها.', descriptionEn: 'For small businesses ready to get organized.', monthly: 390, yearly: 325, saMonthly: 99, saYearly: 82, users: 'مستخدمان', usersEn: '2 users', storage: '5 جيجابايت', storageEn: '5 GB', features: ['المبيعات والمشتريات', 'الحسابات الأساسية', 'إدارة المخزون', 'تقارير الأداء'], featuresEn: ['Sales & purchasing', 'Core accounting', 'Inventory management', 'Performance reports'] },
  { name: 'النمو', nameEn: 'Growth', description: 'لفريق أكبر يحتاج رؤية مترابطة.', descriptionEn: 'For growing teams that need a connected view.', monthly: 890, yearly: 740, saMonthly: 229, saYearly: 190, users: 'حتى 8 مستخدمين', usersEn: 'Up to 8 users', storage: '25 جيجابايت', storageEn: '25 GB', featured: true, features: ['كل مميزات البداية', 'إدارة العملاء والمشاريع', 'صلاحيات متعددة', 'تقارير متقدمة'], featuresEn: ['Everything in Starter', 'Customer & project management', 'Role-based permissions', 'Advanced reports'] },
  { name: 'الأعمال', nameEn: 'Business', description: 'لعمليات متعددة وفِرق متوسعة.', descriptionEn: 'For multi-branch operations and expanding teams.', monthly: 1790, yearly: 1490, saMonthly: 459, saYearly: 382, users: 'حتى 20 مستخدمًا', usersEn: 'Up to 20 users', storage: '100 جيجابايت', storageEn: '100 GB', features: ['كل مميزات النمو', 'إدارة الفروع', 'إعدادات مخصصة', 'مساندة أولوية'], featuresEn: ['Everything in Growth', 'Branch management', 'Custom settings', 'Priority support'] },
]

export const questions = [
  { question: 'هل أحتاج إلى تثبيت برنامج؟', answer: 'لا، تقدر تستخدم المنصة من المتصفح على الكمبيوتر أو الهاتف، من غير إعداد خادم داخل شركتك.', questionEn: 'Do I need to install any software?', answerEn: 'No. Use Sira from a browser on your computer or phone—no on-site server required.' },
  { question: 'هل أستطيع تجربة النظام قبل الاشتراك؟', answer: 'نعم، ابدأ بفترة تجريبية مجانية وتعرّف على الأدوات قبل اختيار الباقة المناسبة.', questionEn: 'Can I try the system before subscribing?', answerEn: 'Yes. Start with a free trial and explore the tools before choosing a plan.' },
  { question: 'هل يمكن إضافة أعضاء للفريق؟', answer: 'تقدر تضيف أعضاء وتحدد صلاحيات كل شخص حسب دوره ومسؤولياته.', questionEn: 'Can I add team members?', answerEn: 'Add team members and set permissions based on each person’s role and responsibilities.' },
  { question: 'هل بياناتي متاحة من أكثر من فرع؟', answer: 'يمكن متابعة بيانات الفروع من مساحة العمل نفسها مع تقارير موحدة.', questionEn: 'Can I manage multiple branches?', answerEn: 'Manage branch data from one workspace and view consolidated reports.' },
  { question: 'هل يدعم النظام الفوترة الإلكترونية؟', answer: 'تتوفر إعدادات الفوترة الإلكترونية حسب متطلبات السوق والجهة الضريبية في بلدك.', questionEn: 'Does Sira support e-invoicing?', answerEn: 'E-invoicing settings are available based on your country’s market and tax authority requirements.' },
]
