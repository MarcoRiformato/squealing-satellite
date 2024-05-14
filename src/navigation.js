import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/homes/personal' },
    { text: 'News', href: '/blog/' },
    { text: 'Priorità', href: '/priorita' },
    { text: 'Programma', href: '/programma-lista' },
    { text: 'Contatti', href: '/contatti' },
  ]
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/pietro_gentili_/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/pietro.gentili.35' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Sviluppato da <a class="text-blue-600 underline dark:text-muted" target="_blank" href="https://www.linkedin.com/in/marco-riformato/">Marco Riformato</a> · Tutti i diritti sono riservati.
  `,
};
