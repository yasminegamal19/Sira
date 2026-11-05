import Icon from '../common/Icon.jsx'

export default function AssistantSection({ language }) {
  const isEnglish = language === 'en'

  return (
    <section className="section assistant-section" id="ai">
      <div className="assistant-visual">
        <div className="assistant-card">
          <div className="assistant-card-head"><span className="assistant-avatar"><Icon name="spark" size={20} /></span><span>{isEnglish ? 'Sira Assistant' : 'مساعد سيرا'}<small>{isEnglish ? 'Example preview' : 'معاينة توضيحية'}</small></span><i /></div>
          <div className="chat-date">{isEnglish ? 'Today · 10:42 AM' : 'اليوم · ١٠:٤٢ ص'}</div>
          <div className="chat-message user-message">{isEnglish ? 'Show me this week’s sales summary' : 'ورّيني ملخص المبيعات هذا الأسبوع'}</div>
          <div className="chat-message bot-message"><span className="mini-spark"><Icon name="spark" size={15} /></span><p>{isEnglish ? <>Your sales reached <b>EGP 48,250</b> this week, up 12% from last week.</> : <>مبيعاتك وصلت إلى <b>٤٨٬٢٥٠ ج.م</b> هذا الأسبوع، بزيادة ١٢٪ عن الأسبوع السابق.</>}</p><div className="chat-mini-chart"><i /><i /><i /><i /><i /><i /><i /></div><small>{isEnglish ? 'Sunday — Saturday' : 'الأحد — السبت'}</small></div>
          <div className="chat-input">{isEnglish ? 'Ask a question…' : 'اكتب سؤالك هنا…'} <span><Icon name="arrowLeft" size={16} /></span></div>
        </div>
        <div className="floating-note"><span className="note-icon"><Icon name="check" size={16} /></span><span>{isEnglish ? 'Instant answers' : 'إجابة فورية'}<small>{isEnglish ? 'From your live data' : 'من بياناتك الحالية'}</small></span></div>
      </div>
      <div className="assistant-copy">
        <span className="eyebrow">{isEnglish ? 'Your AI business assistant' : 'مساعد أعمالك الذكي'}</span>
        <h2>{isEnglish ? <>Ask naturally.<br /><span>Get answers faster.</span></> : <>اسأل بطريقتك.<br /><span>وخد المعلومة أسرع.</span></>}</h2>
        <p>{isEnglish ? 'Turn everyday questions into clear answers about sales, inventory, and customers. Review the data yourself before taking action.' : 'حوّل أسئلتك اليومية إلى إجابات واضحة عن المبيعات والمخزون والعملاء. المساعد يعرض البيانات لتراجعها بنفسك.'}</p>
        <div className="assistant-points">
          <div><Icon name="spark" size={19} /><span><b>{isEnglish ? 'Plain language' : 'لغة بسيطة'}</b><small>{isEnglish ? 'Ask the way you speak—no complicated menus.' : 'اسأل كما تتحدث، من غير قوائم معقدة.'}</small></span></div>
          <div><Icon name="shield" size={19} /><span><b>{isEnglish ? 'You stay in control' : 'أنت صاحب القرار'}</b><small>{isEnglish ? 'Review results before taking action.' : 'راجع النتائج قبل تنفيذ أي إجراء.'}</small></span></div>
        </div>
      </div>
    </section>
  )
}
