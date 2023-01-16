// SEOMetaTag.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOMetaTag = ({title,keywords, description, imgsrc, url}) => {
  // props로 content 내용을 불러올 예정임
    return (
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imgsrc} />
        <meta property="og:url" content={url} />
 

        <link rel="canonical" href={url} />
      </Helmet>
    );
};

export default SEOMetaTag;