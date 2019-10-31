const resolvers = {
    Query: {
        feed: (parent, args, context) => {
            return context.prisma.posts({ where: { published: true } })
        },
        filterPosts: (parent, { searchString }, context) => {
            return context.prisma.posts({
            where: {
                OR: [
                {
                    title_contains: searchString,
                },
                {
                    content_contains: searchString,
                },
                ],
            },
            })
        },
        post: (parent, { id }, context) => {
            return context.prisma.post({ id })
        },
    },
    Mutation: {
        signupUser: (parent, { email, name }, context) => {
            return context.prisma.createUser({
            email,
            name,
            })
        },
        createDraft: (parent, { title, content, authorEmail }, context) => {
            return context.prisma.createPost({
            title,
            content,
            author: { connect: { email: authorEmail } },
            })
        },
        publish: (parent, { id }, context) => {
            return context.prisma.updatePost({
            where: { id },
            data: { published: true },
            })
        },
        deletePost: (parent, { id }, context) => {
            return context.prisma.deletePost({ id })
        },
        },
        Post: {
        author: ({ id }, args, context) => {
            return context.prisma.post({ id }).author()
        },
        },
        User: {
        posts: ({ id }, args, context) => {
            return context.prisma.user({ id }).posts()
        },
    },
}

export default resolvers