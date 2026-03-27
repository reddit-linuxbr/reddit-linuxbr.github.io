import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    markdown: {
      attrs: false,
      lineNumbers: true,
      toc: {
        level: [1,2,3,4,5,6]
      }
    },

    head: [
    [
      'link',
      {
        rel: 'icon',
        media: "{prefers-color-scheme: light}",
        href: "/favicon.ico",
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        media: "{prefers-color-scheme: dark}",
        href: "/favicon-dark.icon"
      },
    ],
  ],
  vite: {
    plugins: [],
  },

  base: '/',
  lang: 'pt-BR',
  ignoreDeadLinks: true,
  cleanUrls: true,
  externalLinkIcon: true,

  title: "🐧 Megathread - Linux BR ",
  description: "Aqui você encontrará um agregado de dicas/tutoriais e tópicos que possam ser úteis para a comunidade Linux.",
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Megathread - Linux BR',
    // https://vitepress.dev/reference/default-theme-config
    //
    outlineTitle: "Nesta página",
    outline: "deep", 
      // {
      // level: [1,2,3,4,5,6]
    //},

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/'},
      { text: 'Explorar', link: '/explorar' },
      { text: 'Sobre', link: '/sobre' },
      { text: 'Contribua', link: '/contribua'}
    ],

    lastUpdated: {
      text: "Atualizado em",
      formatOptions: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
    },

    sidebar: [
      {
        text: 'Artigos',
        collapsed: false,
        items: [
          { text: 'Distros',
            collapsed: true,
            items: [
              { text: 'Debian', link: '/distros/debian' },
              { text: 'Arch', link: '/distros/arch' }, 
              { text: 'Fedora', link: '/distros/redhat-fedora' },
              { text: 'openSUSE', link: '/distros/opensuse'}
            ]
          },
          { text: 'O GNU', link: '/gnu' },
          { text: 'Tipos de Licença', link: '/tipos-licencas' },
          { text: 'Links úteis', link: '/links-uteis'}
        ]
      },
      {
        text: 'Guias',
        collapsed: false,
        items: [
          { text: 'Qual distro escolher?', link: '/guia/qual-distro' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'reddit', link: 'https://reddit.com/r/linuxbrasil' },
      { icon: 'github', link: 'https://github.com/reddit-linuxbr/reddit-linuxbr.github.io' }
    ],
    
    docFooter: {
      prev: false,
      next: false
    },
    
    footer: {
      message: "Feito por e para o r/linuxbrasil",
    },
 
    // mobile config
    returnToTopLabel: "Voltar para o topo",
    sidebarMenuLabel: "Menu",
  
    editLink: {
      pattern: 
        "https://github.com/reddit-linuxbr/reddit-linuxbr.github.io/edit/main/docs/:path",
      text: "Edite essa página no Github"
    }
  },

  sitemap: {
    hostname: "https://reddit-linuxbr.github.io/explorar",
  },

})

