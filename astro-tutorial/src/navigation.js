export const siteData = {
  name: '🔬 OSSI@Janelia',
  base: '/'
}

export const headerData = {
  links: [
    {
        text: "Home",
        href:"/"
    },
    {
        text: "Projects",
        href: "/projects"
    },
    {
      text: 'Documentation',
      href: '/documentation',
    },
    {
        text: "About",
        href:"/about"
    }
  ]
};

export const footerData = {
  secondaryLinks: [
    { text: 'Privacy Policy & Cookie Notice', href: 'https://www.hhmi.org/privacy-policy' },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/JaneliaSciComp' },
  ],
  footNote:'© 2024 Howard Hughes Medical Institute',
};
