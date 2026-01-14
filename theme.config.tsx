import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <span className="font-bold text-xl">
      <span className="text-blue-600">Contact</span>
      <span className="text-gray-900 dark:text-white">Solution</span>
      <span className="text-gray-500 text-sm ml-2">Docs</span>
    </span>
  ),
  project: {
    link: 'https://github.com/contactsolution/docs',
  },
  docsRepositoryBase: 'https://github.com/contactsolution/docs/tree/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="ContactSolution Documentation - Digital contact cards, analytics, and integrations" />
      <meta name="og:title" content="ContactSolution Documentation" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  color: {
    hue: 217,
    saturation: 91,
  },
  banner: {
    key: 'welcome-docs',
    content: (
      <a href="https://seeme.contactsolution.io" target="_blank" rel="noopener noreferrer">
        🎉 New to ContactSolution? Create your free digital card →
      </a>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    content: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} ContactSolution. All rights reserved.
        </p>
        <div className="mt-2 flex gap-4 text-sm">
          <a href="https://seeme.contactsolution.io" className="text-blue-600 hover:underline">SeeMe</a>
          <a href="https://xrayspecs.contactsolution.io" className="text-blue-600 hover:underline">XraySpecs</a>
          <a href="https://wideangle.contactsolution.io" className="text-blue-600 hover:underline">WideAngle</a>
        </div>
      </div>
    ),
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  editLink: {
    content: 'Edit this page on GitHub →',
  },
};

export default config;
