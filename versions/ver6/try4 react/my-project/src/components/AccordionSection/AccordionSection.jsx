import { useState } from 'react';
import BlueSmallChekcbox from './../BlueSmallChekcbox/BlueSmallChekcbox';
import "./AccordionSection.css"

const AccordionSection = () => {
  const [openItems, setOpenItems] = useState({});
  
  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const accordionItems = [
    {
      id: 1,
      title: "Можно ли «Complex SW СУСТАВЫ» принимать с другими препаратами",
      content: "Содержимое для первого аккордеона..."
    },
    {
      id: 2,
      title: "Какие противопоказания?",
      content: "Противопоказанием является индивидуальная непереносимость компонентов препарата."
    },
    {
      id: 3,
      title: "Почему в форме порошка, а не капсул?",
      content: "Содержимое для третьего аккордеона..."
    },
    {
      id: 4,
      title: "Какие показания для приема комплекса",
      content: "Содержимое для четвертого аккордеона..."
    }
  ];

  return (
    <div className="accordion-container">
       <section id='faq'></section>
      {accordionItems.map((item) => (
        <div key={item.id} className="accordion-item">
          <div 
            className="accordion-header"
            onClick={() => toggleItem(item.id)}
          >
            <span className="accordion-title">{item.title}</span>
            
            {/* Показываем иконку или чекбокс в зависимости от состояния */}
            {openItems[item.id] ? (
              <BlueSmallChekcbox />
            ) : (
              <img 
                alt="toggle" 
                src="public/frame386761-hulo.svg" 
                className="accordion-icon"
              />
            )}
          </div>
          
          <div className={`accordion-content ${openItems[item.id] ? 'open' : ''}`}>
            <div className="accordion-content-inner">
              <span className="accordion-text">{item.content}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;