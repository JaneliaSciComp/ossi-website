const base = import.meta.env.BASE_URL;
const previewPath = import.meta.env.PREVIEW_PATH
  ? import.meta.env.PREVIEW_PATH
  : "";

export const headerData = {
  links: [
    {
      text: "Home",
      href: base,
    },
    {
      text: "Projects",
      href: `${base}${previewPath}/projects`,
    },
    {
      text: "Ecosystems",
      href: `${base}${previewPath}/ecosystems`,
    },
    {
      text: "OSSI",
      href: `${base}${previewPath}/ossi`,
    },
    {
      text: "Blog",
      href: `${base}${previewPath}/blog`,
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    {
      text: "Privacy Policy & Cookie Notice",
      href: "https://www.hhmi.org/privacy-policy",
    },
    {
      text: "This site is open source! Contribute on GitHub.",
      href: "https://github.com/JaneliaSciComp/ossi-website",
    },
  ],
  socialLinks: [
    { ariaLabel: "Email", icon: "tabler:mail", href: "#" },
    { ariaLabel: "X", icon: "tabler:brand-x", href: "#" },
    {
      ariaLabel: "Github",
      icon: "tabler:brand-github",
      href: "https://github.com/JaneliaSciComp",
    },
  ],
  footNote: "© 2024 Howard Hughes Medical Institute",
};
