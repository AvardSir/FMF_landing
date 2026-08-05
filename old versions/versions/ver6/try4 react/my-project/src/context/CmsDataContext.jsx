import { createContext, useContext, useState, useEffect } from 'react';

const CmsDataContext = createContext(null);

export const CmsDataProvider = ({ children, pageId = 12 }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = `https://fmflanding.test/wp-json/wp/v2/pages/${pageId}`;
    fetch(API_URL)
      .then(res => res.json())
      .then(page => {
        if (page.meta?.acf_fields) {
          setData(page.meta.acf_fields);
        } else {
          setError('Поля ACF не найдены');
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [pageId]);

  return (
    <CmsDataContext.Provider value={{ data, loading, error }}>
      {children}
    </CmsDataContext.Provider>
  );
};

export const useCmsData = () => useContext(CmsDataContext);