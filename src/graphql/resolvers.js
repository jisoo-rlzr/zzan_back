const resolvers = {
    Query: {
        feed: (parent, args, context) => {
            return context.prisma.moims()
        },
        // filterPosts: (parent, { searchString }, context) => {
        //     return context.prisma.posts({
        //     where: {
        //         OR: [
        //         {
        //             title_contains: searchString,
        //         },
        //         {
        //             content_contains: searchString,
        //         },
        //         ],
        //     },
        //     })
        // },
        // post: (parent, { id }, context) => {
        //     return context.prisma.post({ id })
        // },
    },
    Mutation: {
        signupUser: (parent, { authType, authKey, name, gender, birthday, picUrl }, context) => {
            picUrl = picUrl ? picUrl : ""
            return context.prisma.createUser({
                authType,
                authKey,
                name,
                gender,
                birthday,
                picUrl
            })
        },
        createMoim: (parent, { placeId, time, creatorId, maxEntry, description, ageMin, ageMax, gender, imageUrl }, context) => {
            return context.prisma.createMoim({
                place: { connect: { id: placeId } },
                description,
                maxEntry,
                time,
                creator: { connect: { id: creatorId } },
                ageMin,
                ageMax,
                gender,
                imageUrl
            })
        },
        // publish: (parent, { id }, context) => {
        //     return context.prisma.updateMoim({
        //     where: { id },
        //     data: { published: true },
        //     })
        // },
        deleteMoim: (parent, { id }, context) => {
            return context.prisma.deleteMoim({ id })
        },
        },
    // Post: {
    //     author: ({ id }, args, context) => {
    //         return context.prisma.post({ id }).author()
    //     },
    // },
    // User: {
    //     posts: ({ id }, args, context) => {
    //         return context.prisma.user({ id }).posts()
    //     },
    // },
}

export default resolvers