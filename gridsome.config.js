// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'yaowang',
  siteDescription: '大前端',
  plugins: [{
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag','contact'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: 'wangzi',
        //   password: 'yW@0415?'
        // }
      }
    },
  ],
  templates: {
    StrapiPost: [{
      path: "/post/:id",
      component: "./src/templates/post.vue"
    }],
    StrapiTag: [{
      path: "/tag/:id",
      component: "./src/templates/tag.vue"
    }]
  },
}