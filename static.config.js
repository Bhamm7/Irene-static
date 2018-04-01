import axios from 'axios'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import Butter from 'buttercms'

const butter = Butter('763fdfaf8d9f5f8179931fad07f2cc98bf3cd155')

//

butter.post.list({ page: 1, page_size: 10 }).then(function(postResponse) {

    // console.log(postResponse.data.data)
})

export default {
    getSiteData: () => ({
        title: 'React Static',
    }),
    getRoutes: async() => {
        const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // const { data: posts } = await butter.post.list({ page: 1, page_size: 10 })
        // console.log(posts.data.data.title)


        return [{
                path: '/',
                component: 'src/containers/Home',
            },
            {
                path: '/about',
                component: 'src/containers/About',
            },
            {
                path: '/social',
                component: 'src/containers/Social',
            },
            {
                path: '/gallery',
                component: 'src/containers/Gallery',
            },
            {
                path: '/workshops',
                component: 'src/containers/Workshops',
            },
            {
                path: '/store',
                component: 'src/containers/Store',
            },
            {
                path: '/contact',
                component: 'src/containers/Contact',
            },
            {
                path: '/blog',
                component: 'src/containers/Blog',
                getData: () => ({
                    posts,
                }),
                children: posts.map(post => ({
                    path: `/post/${post.id}`,
                    component: 'src/containers/Post',
                    getData: () => ({
                        post,
                    }),
                })),
            },
            {
                is404: true,
                component: 'src/containers/404',
            },
        ]
    },
    webpack: (config, { defaultLoaders, stage }) => {
        config.module.rules = [{
            oneOf: [{
                    test: /\.s(a|c)ss$/,
                    use: stage === 'dev' ? [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] : ExtractTextPlugin.extract({
                        use: [{
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    minimize: true,
                                    sourceMap: false,
                                },
                            },
                            {
                                loader: 'sass-loader',
                                options: { includePaths: ['src/'] },
                            },
                        ],
                    }),
                },
                defaultLoaders.cssLoader,
                defaultLoaders.jsLoader,
                defaultLoaders.fileLoader,
            ],
        }, ]
        return config
    },
}