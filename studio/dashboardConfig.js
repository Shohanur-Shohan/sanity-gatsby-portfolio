export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '625ff6b11cb65b0e64ce905f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-znpp8e9z',
                  apiId: '1f6e5854-22d8-4f85-8b6e-3c7b26a8b790'
                },
                {
                  buildHookId: '625ff6b1375e0602d8aff188',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-i4tu8139',
                  apiId: '0d9b92d2-f8c2-4d1b-babf-cd84badbbaab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Shohanur-Shohan/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-i4tu8139.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
