export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5eaa9e37524e1d160f4e5fc9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6b2hccec',
                  apiId: '68337f0c-02ab-49a6-8172-08289371b2c2'
                },
                {
                  buildHookId: '5eaa9e37a6cc76ea138d5a2d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-duewwyu5',
                  apiId: 'b379efe0-d7a8-4bb9-9931-7a9e6e79e098'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alikuka/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-duewwyu5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
