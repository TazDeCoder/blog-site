import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type Props = {
  seo: {
    metaTitle?: string;
    metaDescription?: string;
  };
};

export default function SEO({ seo = {} }: Props) {
  const { strapiGlobal } = useStaticQuery(graphql`
    query GlobalSiteData {
      strapiGlobal {
        siteName
        favicon {
          localFile {
            url
          }
        }
        defaultSeo {
          metaTitle
          metaDescription
          shareImage {
            localFile {
              url
            }
          }
        }
      }
    }
  `);

  const { siteName, defaultSeo, favicon } = strapiGlobal;

  const fullSeo = { ...defaultSeo, ...seo };

  fullSeo.metaTitle = `${fullSeo.metaTitle} | ${siteName}`;

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.metaTitle,
        }
      );
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.metaDescription,
        }
      );
    }
    if (fullSeo.shareImage) {
      const imageUrl = fullSeo.shareImage.localFile.url;
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      );
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      });
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" });

    return tags;
  };

  const metaTags = getMetaTags();

  return (
    <Helmet
      title={fullSeo.metaTitle}
      link={[
        {
          rel: "icon",
          href: favicon.localFile.url,
        },
      ]}
      meta={metaTags}
    />
  );
}

SEO.propTypes = {
  seo: PropTypes.object,
};
