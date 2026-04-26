import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}

export const useSEO = ({ title, description, path, keywords }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = "nl";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setOg("og:title", title);
    setOg("og:description", description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + path);

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [title, description, path, keywords]);
};
