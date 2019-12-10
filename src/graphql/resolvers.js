// import { Moim, User, Place } from "./schema.graphql";

const resolvers = {
    Query: {
        feed: (parent, args, context) => {
            return context.prisma.moims();
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
        moim: (parent, { id }, context) => {
            return context.prisma.moim({ id });
        },
    },
    Mutation: {
        signupUser: (parent, { authType, authKey, name, gender, birthday, picUrl }, context) => {
            picUrl = picUrl;
            return context.prisma.createUser({
                authType,
                authKey,
                name,
                gender,
                birthday,
                picUrl
            });
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
            });
        },
        // publish: (parent, { id }, context) => {
        //     return context.prisma.updateMoim({
        //     where: { id },
        //     data: { published: true },
        //     })
        // },
        deleteMoim: (parent, { id }, context) => {
            return context.prisma.deleteMoim({ id });
        },
    },
    Moim: {
        place: (parent, _, context) => {
            return context.prisma.moim({ id: parent.id }).place();
        },
        creator: (parent, _, context) => {
            return context.prisma.moim({ id: parent.id }).creator();
        },
    },
    Place: {
        creator: (parent, _, context) => {
            return context.prisma.moim({ id: parent.id }).creator();
        },
    },
    User: {
        createdMoim: (parent, _, context) => {
            return context.prisma.user({ id: parent.id }).createdMoim();
        },
        joinedMoim: (parent, _, context) => {
            return context.prisma.user({ id: parent.id }).joinedMoim();
        },
        blacklist: (parent, _, context) => {
            return context.prisma.user({ id: parent.id }).blacklist();
        }
    },
};

export default resolvers;