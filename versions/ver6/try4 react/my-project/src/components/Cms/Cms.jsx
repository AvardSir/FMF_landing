// import { useCmsData } from '../context/CmsDataContext';

import { useCmsData } from "../../context/CmsDataContext";

// import { useCmsData } from "../../context/CmsDataContext";


// Простой текст (заголовки, параграфы)

export const CmsText = ({ field, tag: Tag = 'span', className, defaultValue = '' }) => {
    console.log('field::: ', field);
    // useCmsData
  const { data, loading, error } = useCmsData();
  console.log('data::: ', data);

  if (loading) return <Tag className={className}>...</Tag>;
  if (error || !data) return <Tag className={className}>{defaultValue}</Tag>;

  const value = data[field] || defaultValue;
  return <Tag className={className}>{value}</Tag>;
};

// Rich текст (HTML из WYSIWYG редактора)
export const CmsRichText = ({ field, className, defaultValue = '' }) => {
  const { data, loading, error } = useCmsData();

  if (loading) return <div className={className}>...</div>;
  if (error || !data) return <div className={className}>{defaultValue}</div>;

  const html = data[field] || defaultValue;
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};

// Изображение (URL уже обработан в PHP, приходит как строка)
export const CmsImage = ({ field, alt = '', className, defaultSrc = '' }) => {
  const { data, loading, error } = useCmsData();

  if (loading) return <div className={className}>Загрузка...</div>;
  if (error || !data) {
    return defaultSrc ? <img src={defaultSrc} alt={alt} className={className} /> : null;
  }

  const src = data[field] || defaultSrc;
  if (!src) return null;
  return <img src={src} alt={alt} className={className} />;
};

// Ссылка (ACF Link: { title, url, target })
export const CmsLink = ({ field, className, children, defaultValue = {} }) => {
  const { data, loading, error } = useCmsData();

  if (loading) return <a className={className} href="#">...</a>;
  if (error || !data) {
    const { title = 'Ссылка', url = '#' } = defaultValue;
    return <a className={className} href={url}>{children || title}</a>;
  }

  const linkData = data[field];
  if (!linkData || !linkData.url) {
    const { title = 'Ссылка', url = '#' } = defaultValue;
    return <a className={className} href={url}>{children || title}</a>;
  }

  return (
    <a className={className} href={linkData.url} target={linkData.target || '_self'} rel={linkData.target === '_blank' ? 'noopener noreferrer' : undefined}>
      {children || linkData.title}
    </a>
  );
};

// Список (Repeater) – children это функция (item, index) => элемент
export const CmsRepeater = ({ field, children, emptyMessage = 'Нет данных' }) => {
  const { data, loading, error } = useCmsData();

  if (loading) return <div>Загрузка...</div>;
  if (error || !data) return <div>{emptyMessage}</div>;

  const items = data[field];
  if (!items || !items.length) return <div>{emptyMessage}</div>;

  return <>{items.map((item, index) => children(item, index))}</>;
};