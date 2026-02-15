
export type Language = 'en' | 'es';

export interface Content {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    bullets: string[];
    cta: string;
  };
  hormonal: {
    title: string;
    subtitle: string;
    points: {
      title: string;
      desc: string;
    }[];
  };
  product: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  benefits: {
    title: string;
    list: {
      icon: string;
      title: string;
      desc: string;
    }[];
  };
  testimonials: {
    title: string;
    items: {
      name: string;
      age: string;
      text: string;
    }[];
  };
  bonus: {
    badge: string;
    title: string;
    desc: string;
    items: string[];
    cta: string;
    limit: string;
  };
  faq: {
    title: string;
    questions: {
      q: string;
      a: string;
    }[];
  };
  guarantee: {
    title: string;
    desc: string;
    badgeText: string;
  };
  footer: {
    rights: string;
    disclaimer: string;
  };
}
