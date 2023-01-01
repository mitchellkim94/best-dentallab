import React, { PropsWithChildren } from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

interface SeoProps {
    title?: string;
    description?: string;
    pathname?: string;
}

export const SEO = ({ title, description, pathname, children }: PropsWithChildren<SeoProps>) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, favicon } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    favicon: `${siteUrl}${favicon}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keyword" content={'치과기공소,의정부치과기공소,틀니제작,치과기공물,치기공소,denture,지르코니아,커스텀어버트먼트,custom abutment,맞춤형지대주,어버트먼트,오버덴쳐,overdenture,flexible denture,flipper,partial denture,지르코니아 크라운,valplast'}/>
      <meta name="image" content={seo.image} />
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="베스트치과기공소"/>
      <meta property="og:image" content={seo.image}/>
      <meta property="og:description" content="치과기공 최고의 신뢰, 베스트치과기공소입니다."/>
      <meta property="og:url" content="https://www.best-dentallab.com"/>
      {children}
    </>
  )
}