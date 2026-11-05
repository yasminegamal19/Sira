import { useState } from 'react'
import Icon from '../common/Icon.jsx'

export default function ComplianceSection({ language }) {
  const [invoiceMarket, setInvoiceMarket] = useState('eg')
  const isEgypt = invoiceMarket === 'eg'
  const isEnglish = language === 'en'

  return (
    <section className="compliance-section" id="e-invoice">
      <div className="compliance-inner">
        <div className="compliance-copy">
          <span className="eyebrow"><span className="live-dot" /> {isEnglish ? 'Invoicing & compliance' : 'الفوترة والامتثال'}</span>
          <h2>{isEnglish ? <>Invoices in order,<br /><span>without the hassle.</span></> : <>فواتير مرتّبة،<br /><span>ومتابعة بلا تعقيد.</span></>}</h2>
          <p>{isEnglish ? 'Create documents in one place and track their status clearly. Choose a market to preview the right invoicing experience.' : 'أنشئ مستنداتك من مكان واحد وتابع حالتها بوضوح. اختر السوق للاطلاع على تجربة الفوترة المناسبة.'}</p>
          <div aria-label={isEnglish ? 'Choose a market' : 'اختيار السوق'} className="market-tabs" role="tablist">
            <button aria-selected={isEgypt} className={isEgypt ? 'selected' : ''} onClick={() => setInvoiceMarket('eg')} role="tab" type="button">{isEnglish ? 'Egypt' : 'مصر'} <small>EG</small></button>
            <button aria-selected={!isEgypt} className={!isEgypt ? 'selected' : ''} onClick={() => setInvoiceMarket('sa')} role="tab" type="button">{isEnglish ? 'Saudi Arabia' : 'السعودية'} <small>SA</small></button>
          </div>
          <ul className="check-list">
            <li><Icon name="check" size={17} /> {isEnglish ? 'Track document status from one dashboard' : 'متابعة حالة المستندات من لوحة واحدة'}</li>
            <li><Icon name="check" size={17} /> {isEnglish ? 'Customer and tax details in one form' : 'بيانات العميل والضريبة في نموذج موحد'}</li>
            <li><Icon name="check" size={17} /> {isEnglish ? 'A clear history of edits and submissions' : 'سجل واضح للتعديلات والإرسال'}</li>
          </ul>
        </div>
        <div className="tax-preview">
          <div className="tax-top"><span className="tax-symbol">{isEgypt ? 'EG' : 'SA'}</span><span>{isEnglish ? `E-invoice · ${isEgypt ? 'Egypt' : 'Saudi Arabia'}` : isEgypt ? 'فاتورة إلكترونية · مصر' : 'فاتورة إلكترونية · السعودية'}<small>{isEnglish ? 'Document preview' : 'معاينة مستند'}</small></span><span className="tax-status"><i /> {isEnglish ? 'Ready' : 'جاهزة'}</span></div>
          <div className="tax-number">{isEnglish ? 'Document number' : 'رقم المستند'} <b>INV-2026-0842</b></div>
          <div className="tax-company"><span>{isEnglish ? 'To' : 'إلى'}</span><strong>{isEnglish ? 'Afaq Trading' : 'مؤسسة آفاق للتجارة'}</strong><small>{isEnglish ? (isEgypt ? 'Cairo, Egypt' : 'Riyadh, Saudi Arabia') : (isEgypt ? 'القاهرة، مصر' : 'الرياض، السعودية')} · {isEnglish ? 'Customer' : 'عميل'} 2048</small></div>
          <div className="tax-line tax-head"><span>{isEnglish ? 'Description' : 'الوصف'}</span><span>{isEnglish ? 'Qty' : 'الكمية'}</span><span>{isEnglish ? 'Total' : 'الإجمالي'}</span></div>
          <div className="tax-line"><span>{isEnglish ? 'Operations & management services' : 'خدمات تشغيل وإدارة'}</span><span>1</span><strong>{isEnglish ? '3,500' : '٣٬٥٠٠'}</strong></div>
          <div className="tax-line"><span>{isEnglish ? 'Office supplies' : 'مستلزمات مكتبية'}</span><span>2</span><strong>{isEnglish ? '800' : '٨٠٠'}</strong></div>
          <div className="tax-total"><span>{isEnglish ? 'Amount due' : 'الإجمالي المستحق'}</span><strong>{isEnglish ? '4,300' : '٤٬٣٠٠'} <small>{isEgypt ? (isEnglish ? 'EGP' : 'ج.م') : (isEnglish ? 'SAR' : 'ر.س')}</small></strong></div>
          <div className="tax-timeline"><span className="done"><i /> {isEnglish ? 'Created' : 'إنشاء'}</span><b /><span className="done"><i /> {isEnglish ? 'Reviewed' : 'مراجعة'}</span><b /><span className="done"><i /> {isEnglish ? 'Ready to send' : 'جاهزة للإرسال'}</span></div>
          <div className="tax-note"><Icon name="shield" size={16} /> {isEnglish ? 'Review before approving and sending' : 'راجع المستند قبل اعتماده وإرساله'}</div>
        </div>
      </div>
    </section>
  )
}
