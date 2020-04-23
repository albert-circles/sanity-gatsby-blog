export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea0fcc367c433a04131c699',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-n2djdnve',
                  apiId: '37bf0d15-a658-4c38-abf6-7936d01c1460'
                },
                {
                  buildHookId: '5ea0fcc331a31015fadc9a83',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-31t1vdgp',
                  apiId: '2987dc35-bad4-43c4-a05f-45ffd5f8bab0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/albert-circles/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-31t1vdgp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
