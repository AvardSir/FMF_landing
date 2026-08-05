import { useState, useEffect } from 'react';

const PricePerBank = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fmflanding.test/wp-json/wp/v2/pages/12')
      .then(res => {
        if (!res.ok) throw new Error('Ошибка сети');
        return res.json();
      })
      .then(page => {
        // page — объект одной страницы
        if (page.meta && page.meta.price_per_bank) {
          setPrice(page.meta.price_per_bank);
        } else {
          setPrice(null);
        }
      })
      .catch(err => {
        console.error('Не удалось загрузить цену:', err);
        setPrice(null);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <span className="joint3-thq-text-elm167">...</span>;
  }

  return (
    <span className="joint3-thq-text-elm167">
      {price ? `${price} ₽` : 'Цена не указана'}
    </span>
  );
};

export default PricePerBank;