exports.typeDefs =
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/
/* GraphQL */ `type AggregateMoim {
  count: Int!
}

type AggregatePlace {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Moim {
  id: ID!
  place: Place
  description: String
  maxEntry: Int!
  time: DateTime!
  creator: User
  ageMin: Int!
  ageMax: Int!
  gender: String!
  participants(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  imageUrl: String
}

type MoimConnection {
  pageInfo: PageInfo!
  edges: [MoimEdge]!
  aggregate: AggregateMoim!
}

input MoimCreateInput {
  id: ID
  place: PlaceCreateOneInput
  description: String
  maxEntry: Int
  time: DateTime!
  creator: UserCreateOneWithoutCreatedMoimInput
  ageMin: Int
  ageMax: Int
  gender: String
  participants: UserCreateManyWithoutJoinedMoimInput
  imageUrl: String
}

input MoimCreateManyWithoutCreatorInput {
  create: [MoimCreateWithoutCreatorInput!]
  connect: [MoimWhereUniqueInput!]
}

input MoimCreateManyWithoutParticipantsInput {
  create: [MoimCreateWithoutParticipantsInput!]
  connect: [MoimWhereUniqueInput!]
}

input MoimCreateWithoutCreatorInput {
  id: ID
  place: PlaceCreateOneInput
  description: String
  maxEntry: Int
  time: DateTime!
  ageMin: Int
  ageMax: Int
  gender: String
  participants: UserCreateManyWithoutJoinedMoimInput
  imageUrl: String
}

input MoimCreateWithoutParticipantsInput {
  id: ID
  place: PlaceCreateOneInput
  description: String
  maxEntry: Int
  time: DateTime!
  creator: UserCreateOneWithoutCreatedMoimInput
  ageMin: Int
  ageMax: Int
  gender: String
  imageUrl: String
}

type MoimEdge {
  node: Moim!
  cursor: String!
}

enum MoimOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  maxEntry_ASC
  maxEntry_DESC
  time_ASC
  time_DESC
  ageMin_ASC
  ageMin_DESC
  ageMax_ASC
  ageMax_DESC
  gender_ASC
  gender_DESC
  imageUrl_ASC
  imageUrl_DESC
}

type MoimPreviousValues {
  id: ID!
  description: String
  maxEntry: Int!
  time: DateTime!
  ageMin: Int!
  ageMax: Int!
  gender: String!
  imageUrl: String
}

input MoimScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  maxEntry: Int
  maxEntry_not: Int
  maxEntry_in: [Int!]
  maxEntry_not_in: [Int!]
  maxEntry_lt: Int
  maxEntry_lte: Int
  maxEntry_gt: Int
  maxEntry_gte: Int
  time: DateTime
  time_not: DateTime
  time_in: [DateTime!]
  time_not_in: [DateTime!]
  time_lt: DateTime
  time_lte: DateTime
  time_gt: DateTime
  time_gte: DateTime
  ageMin: Int
  ageMin_not: Int
  ageMin_in: [Int!]
  ageMin_not_in: [Int!]
  ageMin_lt: Int
  ageMin_lte: Int
  ageMin_gt: Int
  ageMin_gte: Int
  ageMax: Int
  ageMax_not: Int
  ageMax_in: [Int!]
  ageMax_not_in: [Int!]
  ageMax_lt: Int
  ageMax_lte: Int
  ageMax_gt: Int
  ageMax_gte: Int
  gender: String
  gender_not: String
  gender_in: [String!]
  gender_not_in: [String!]
  gender_lt: String
  gender_lte: String
  gender_gt: String
  gender_gte: String
  gender_contains: String
  gender_not_contains: String
  gender_starts_with: String
  gender_not_starts_with: String
  gender_ends_with: String
  gender_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  AND: [MoimScalarWhereInput!]
  OR: [MoimScalarWhereInput!]
  NOT: [MoimScalarWhereInput!]
}

type MoimSubscriptionPayload {
  mutation: MutationType!
  node: Moim
  updatedFields: [String!]
  previousValues: MoimPreviousValues
}

input MoimSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MoimWhereInput
  AND: [MoimSubscriptionWhereInput!]
  OR: [MoimSubscriptionWhereInput!]
  NOT: [MoimSubscriptionWhereInput!]
}

input MoimUpdateInput {
  place: PlaceUpdateOneInput
  description: String
  maxEntry: Int
  time: DateTime
  creator: UserUpdateOneWithoutCreatedMoimInput
  ageMin: Int
  ageMax: Int
  gender: String
  participants: UserUpdateManyWithoutJoinedMoimInput
  imageUrl: String
}

input MoimUpdateManyDataInput {
  description: String
  maxEntry: Int
  time: DateTime
  ageMin: Int
  ageMax: Int
  gender: String
  imageUrl: String
}

input MoimUpdateManyMutationInput {
  description: String
  maxEntry: Int
  time: DateTime
  ageMin: Int
  ageMax: Int
  gender: String
  imageUrl: String
}

input MoimUpdateManyWithoutCreatorInput {
  create: [MoimCreateWithoutCreatorInput!]
  delete: [MoimWhereUniqueInput!]
  connect: [MoimWhereUniqueInput!]
  set: [MoimWhereUniqueInput!]
  disconnect: [MoimWhereUniqueInput!]
  update: [MoimUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [MoimUpsertWithWhereUniqueWithoutCreatorInput!]
  deleteMany: [MoimScalarWhereInput!]
  updateMany: [MoimUpdateManyWithWhereNestedInput!]
}

input MoimUpdateManyWithoutParticipantsInput {
  create: [MoimCreateWithoutParticipantsInput!]
  delete: [MoimWhereUniqueInput!]
  connect: [MoimWhereUniqueInput!]
  set: [MoimWhereUniqueInput!]
  disconnect: [MoimWhereUniqueInput!]
  update: [MoimUpdateWithWhereUniqueWithoutParticipantsInput!]
  upsert: [MoimUpsertWithWhereUniqueWithoutParticipantsInput!]
  deleteMany: [MoimScalarWhereInput!]
  updateMany: [MoimUpdateManyWithWhereNestedInput!]
}

input MoimUpdateManyWithWhereNestedInput {
  where: MoimScalarWhereInput!
  data: MoimUpdateManyDataInput!
}

input MoimUpdateWithoutCreatorDataInput {
  place: PlaceUpdateOneInput
  description: String
  maxEntry: Int
  time: DateTime
  ageMin: Int
  ageMax: Int
  gender: String
  participants: UserUpdateManyWithoutJoinedMoimInput
  imageUrl: String
}

input MoimUpdateWithoutParticipantsDataInput {
  place: PlaceUpdateOneInput
  description: String
  maxEntry: Int
  time: DateTime
  creator: UserUpdateOneWithoutCreatedMoimInput
  ageMin: Int
  ageMax: Int
  gender: String
  imageUrl: String
}

input MoimUpdateWithWhereUniqueWithoutCreatorInput {
  where: MoimWhereUniqueInput!
  data: MoimUpdateWithoutCreatorDataInput!
}

input MoimUpdateWithWhereUniqueWithoutParticipantsInput {
  where: MoimWhereUniqueInput!
  data: MoimUpdateWithoutParticipantsDataInput!
}

input MoimUpsertWithWhereUniqueWithoutCreatorInput {
  where: MoimWhereUniqueInput!
  update: MoimUpdateWithoutCreatorDataInput!
  create: MoimCreateWithoutCreatorInput!
}

input MoimUpsertWithWhereUniqueWithoutParticipantsInput {
  where: MoimWhereUniqueInput!
  update: MoimUpdateWithoutParticipantsDataInput!
  create: MoimCreateWithoutParticipantsInput!
}

input MoimWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  place: PlaceWhereInput
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  maxEntry: Int
  maxEntry_not: Int
  maxEntry_in: [Int!]
  maxEntry_not_in: [Int!]
  maxEntry_lt: Int
  maxEntry_lte: Int
  maxEntry_gt: Int
  maxEntry_gte: Int
  time: DateTime
  time_not: DateTime
  time_in: [DateTime!]
  time_not_in: [DateTime!]
  time_lt: DateTime
  time_lte: DateTime
  time_gt: DateTime
  time_gte: DateTime
  creator: UserWhereInput
  ageMin: Int
  ageMin_not: Int
  ageMin_in: [Int!]
  ageMin_not_in: [Int!]
  ageMin_lt: Int
  ageMin_lte: Int
  ageMin_gt: Int
  ageMin_gte: Int
  ageMax: Int
  ageMax_not: Int
  ageMax_in: [Int!]
  ageMax_not_in: [Int!]
  ageMax_lt: Int
  ageMax_lte: Int
  ageMax_gt: Int
  ageMax_gte: Int
  gender: String
  gender_not: String
  gender_in: [String!]
  gender_not_in: [String!]
  gender_lt: String
  gender_lte: String
  gender_gt: String
  gender_gte: String
  gender_contains: String
  gender_not_contains: String
  gender_starts_with: String
  gender_not_starts_with: String
  gender_ends_with: String
  gender_not_ends_with: String
  participants_every: UserWhereInput
  participants_some: UserWhereInput
  participants_none: UserWhereInput
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  AND: [MoimWhereInput!]
  OR: [MoimWhereInput!]
  NOT: [MoimWhereInput!]
}

input MoimWhereUniqueInput {
  id: ID
}

type Mutation {
  createMoim(data: MoimCreateInput!): Moim!
  updateMoim(data: MoimUpdateInput!, where: MoimWhereUniqueInput!): Moim
  updateManyMoims(data: MoimUpdateManyMutationInput!, where: MoimWhereInput): BatchPayload!
  upsertMoim(where: MoimWhereUniqueInput!, create: MoimCreateInput!, update: MoimUpdateInput!): Moim!
  deleteMoim(where: MoimWhereUniqueInput!): Moim
  deleteManyMoims(where: MoimWhereInput): BatchPayload!
  createPlace(data: PlaceCreateInput!): Place!
  updatePlace(data: PlaceUpdateInput!, where: PlaceWhereUniqueInput!): Place
  updateManyPlaces(data: PlaceUpdateManyMutationInput!, where: PlaceWhereInput): BatchPayload!
  upsertPlace(where: PlaceWhereUniqueInput!, create: PlaceCreateInput!, update: PlaceUpdateInput!): Place!
  deletePlace(where: PlaceWhereUniqueInput!): Place
  deleteManyPlaces(where: PlaceWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Place {
  id: ID!
  googleId: String!
  moimCount: Int!
  likes: Int!
  dislikes: Int!
  creator: User
}

type PlaceConnection {
  pageInfo: PageInfo!
  edges: [PlaceEdge]!
  aggregate: AggregatePlace!
}

input PlaceCreateInput {
  id: ID
  googleId: String!
  moimCount: Int
  likes: Int
  dislikes: Int
  creator: UserCreateOneInput
}

input PlaceCreateOneInput {
  create: PlaceCreateInput
  connect: PlaceWhereUniqueInput
}

type PlaceEdge {
  node: Place!
  cursor: String!
}

enum PlaceOrderByInput {
  id_ASC
  id_DESC
  googleId_ASC
  googleId_DESC
  moimCount_ASC
  moimCount_DESC
  likes_ASC
  likes_DESC
  dislikes_ASC
  dislikes_DESC
}

type PlacePreviousValues {
  id: ID!
  googleId: String!
  moimCount: Int!
  likes: Int!
  dislikes: Int!
}

type PlaceSubscriptionPayload {
  mutation: MutationType!
  node: Place
  updatedFields: [String!]
  previousValues: PlacePreviousValues
}

input PlaceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlaceWhereInput
  AND: [PlaceSubscriptionWhereInput!]
  OR: [PlaceSubscriptionWhereInput!]
  NOT: [PlaceSubscriptionWhereInput!]
}

input PlaceUpdateDataInput {
  googleId: String
  moimCount: Int
  likes: Int
  dislikes: Int
  creator: UserUpdateOneInput
}

input PlaceUpdateInput {
  googleId: String
  moimCount: Int
  likes: Int
  dislikes: Int
  creator: UserUpdateOneInput
}

input PlaceUpdateManyMutationInput {
  googleId: String
  moimCount: Int
  likes: Int
  dislikes: Int
}

input PlaceUpdateOneInput {
  create: PlaceCreateInput
  update: PlaceUpdateDataInput
  upsert: PlaceUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: PlaceWhereUniqueInput
}

input PlaceUpsertNestedInput {
  update: PlaceUpdateDataInput!
  create: PlaceCreateInput!
}

input PlaceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  googleId: String
  googleId_not: String
  googleId_in: [String!]
  googleId_not_in: [String!]
  googleId_lt: String
  googleId_lte: String
  googleId_gt: String
  googleId_gte: String
  googleId_contains: String
  googleId_not_contains: String
  googleId_starts_with: String
  googleId_not_starts_with: String
  googleId_ends_with: String
  googleId_not_ends_with: String
  moimCount: Int
  moimCount_not: Int
  moimCount_in: [Int!]
  moimCount_not_in: [Int!]
  moimCount_lt: Int
  moimCount_lte: Int
  moimCount_gt: Int
  moimCount_gte: Int
  likes: Int
  likes_not: Int
  likes_in: [Int!]
  likes_not_in: [Int!]
  likes_lt: Int
  likes_lte: Int
  likes_gt: Int
  likes_gte: Int
  dislikes: Int
  dislikes_not: Int
  dislikes_in: [Int!]
  dislikes_not_in: [Int!]
  dislikes_lt: Int
  dislikes_lte: Int
  dislikes_gt: Int
  dislikes_gte: Int
  creator: UserWhereInput
  AND: [PlaceWhereInput!]
  OR: [PlaceWhereInput!]
  NOT: [PlaceWhereInput!]
}

input PlaceWhereUniqueInput {
  id: ID
  googleId: String
}

type Query {
  moim(where: MoimWhereUniqueInput!): Moim
  moims(where: MoimWhereInput, orderBy: MoimOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Moim]!
  moimsConnection(where: MoimWhereInput, orderBy: MoimOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MoimConnection!
  place(where: PlaceWhereUniqueInput!): Place
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  moim(where: MoimSubscriptionWhereInput): MoimSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  authType: String!
  authKey: String!
  name: String!
  gender: String!
  joinedAt: DateTime!
  birthday: DateTime!
  picUrl: String!
  ageMin: Int!
  ageMax: Int!
  createdMoim(where: MoimWhereInput, orderBy: MoimOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Moim!]
  joinedMoim(where: MoimWhereInput, orderBy: MoimOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Moim!]
  blacklist(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  authType: String!
  authKey: String!
  name: String!
  gender: String!
  birthday: DateTime!
  picUrl: String
  ageMin: Int
  ageMax: Int
  createdMoim: MoimCreateManyWithoutCreatorInput
  joinedMoim: MoimCreateManyWithoutParticipantsInput
  blacklist: UserCreateManyInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutJoinedMoimInput {
  create: [UserCreateWithoutJoinedMoimInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedMoimInput {
  create: UserCreateWithoutCreatedMoimInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCreatedMoimInput {
  id: ID
  authType: String!
  authKey: String!
  name: String!
  gender: String!
  birthday: DateTime!
  picUrl: String
  ageMin: Int
  ageMax: Int
  joinedMoim: MoimCreateManyWithoutParticipantsInput
  blacklist: UserCreateManyInput
}

input UserCreateWithoutJoinedMoimInput {
  id: ID
  authType: String!
  authKey: String!
  name: String!
  gender: String!
  birthday: DateTime!
  picUrl: String
  ageMin: Int
  ageMax: Int
  createdMoim: MoimCreateManyWithoutCreatorInput
  blacklist: UserCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  authType_ASC
  authType_DESC
  authKey_ASC
  authKey_DESC
  name_ASC
  name_DESC
  gender_ASC
  gender_DESC
  joinedAt_ASC
  joinedAt_DESC
  birthday_ASC
  birthday_DESC
  picUrl_ASC
  picUrl_DESC
  ageMin_ASC
  ageMin_DESC
  ageMax_ASC
  ageMax_DESC
}

type UserPreviousValues {
  id: ID!
  authType: String!
  authKey: String!
  name: String!
  gender: String!
  joinedAt: DateTime!
  birthday: DateTime!
  picUrl: String!
  ageMin: Int!
  ageMax: Int!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  authType: String
  authType_not: String
  authType_in: [String!]
  authType_not_in: [String!]
  authType_lt: String
  authType_lte: String
  authType_gt: String
  authType_gte: String
  authType_contains: String
  authType_not_contains: String
  authType_starts_with: String
  authType_not_starts_with: String
  authType_ends_with: String
  authType_not_ends_with: String
  authKey: String
  authKey_not: String
  authKey_in: [String!]
  authKey_not_in: [String!]
  authKey_lt: String
  authKey_lte: String
  authKey_gt: String
  authKey_gte: String
  authKey_contains: String
  authKey_not_contains: String
  authKey_starts_with: String
  authKey_not_starts_with: String
  authKey_ends_with: String
  authKey_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  gender: String
  gender_not: String
  gender_in: [String!]
  gender_not_in: [String!]
  gender_lt: String
  gender_lte: String
  gender_gt: String
  gender_gte: String
  gender_contains: String
  gender_not_contains: String
  gender_starts_with: String
  gender_not_starts_with: String
  gender_ends_with: String
  gender_not_ends_with: String
  joinedAt: DateTime
  joinedAt_not: DateTime
  joinedAt_in: [DateTime!]
  joinedAt_not_in: [DateTime!]
  joinedAt_lt: DateTime
  joinedAt_lte: DateTime
  joinedAt_gt: DateTime
  joinedAt_gte: DateTime
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  picUrl: String
  picUrl_not: String
  picUrl_in: [String!]
  picUrl_not_in: [String!]
  picUrl_lt: String
  picUrl_lte: String
  picUrl_gt: String
  picUrl_gte: String
  picUrl_contains: String
  picUrl_not_contains: String
  picUrl_starts_with: String
  picUrl_not_starts_with: String
  picUrl_ends_with: String
  picUrl_not_ends_with: String
  ageMin: Int
  ageMin_not: Int
  ageMin_in: [Int!]
  ageMin_not_in: [Int!]
  ageMin_lt: Int
  ageMin_lte: Int
  ageMin_gt: Int
  ageMin_gte: Int
  ageMax: Int
  ageMax_not: Int
  ageMax_in: [Int!]
  ageMax_not_in: [Int!]
  ageMax_lt: Int
  ageMax_lte: Int
  ageMax_gt: Int
  ageMax_gte: Int
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  authType: String
  authKey: String
  name: String
  gender: String
  birthday: DateTime
  picUrl: String
  ageMin: Int
  ageMax: Int
  createdMoim: MoimUpdateManyWithoutCreatorInput
  joinedMoim: MoimUpdateManyWithoutParticipantsInput
  blacklist: UserUpdateManyInput
}

input UserUpdateInput {
  authType: String
  authKey: String
  name: String
  gender: String
  birthday: DateTime
  picUrl: String
  ageMin: Int
  ageMax: Int
  createdMoim: MoimUpdateManyWithoutCreatorInput
  joinedMoim: MoimUpdateManyWithoutParticipantsInput
  blacklist: UserUpdateManyInput
}

input UserUpdateManyDataInput {
  authType: String
  authKey: String
  name: String
  gender: String
  birthday: DateTime
  picUrl: String
  ageMin: Int
  ageMax: Int
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  authType: String
  authKey: String
  name: String
  gender: String
  birthday: DateTime
  picUrl: String
  ageMin: Int
  ageMax: Int
}

input UserUpdateManyWithoutJoinedMoimInput {
  create: [UserCreateWithoutJoinedMoimInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutJoinedMoimInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutJoinedMoimInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutCreatedMoimInput {
  create: UserCreateWithoutCreatedMoimInput
  update: UserUpdateWithoutCreatedMoimDataInput
  upsert: UserUpsertWithoutCreatedMoimInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCreatedMoimDataInput {
  authType: String
  authKey: String
  name: String
  gender: String
  birthday: DateTime
  picUrl: String
  ageMin: Int
  ageMax: Int
  joinedMoim: MoimUpdateManyWithoutParticipantsInput
  blacklist: UserUpdateManyInput
}

input UserUpdateWithoutJoinedMoimDataInput {
  authType: String
  authKey: String
  name: String
  gender: String
  birthday: DateTime
  picUrl: String
  ageMin: Int
  ageMax: Int
  createdMoim: MoimUpdateManyWithoutCreatorInput
  blacklist: UserUpdateManyInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutJoinedMoimInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutJoinedMoimDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutCreatedMoimInput {
  update: UserUpdateWithoutCreatedMoimDataInput!
  create: UserCreateWithoutCreatedMoimInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutJoinedMoimInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutJoinedMoimDataInput!
  create: UserCreateWithoutJoinedMoimInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  authType: String
  authType_not: String
  authType_in: [String!]
  authType_not_in: [String!]
  authType_lt: String
  authType_lte: String
  authType_gt: String
  authType_gte: String
  authType_contains: String
  authType_not_contains: String
  authType_starts_with: String
  authType_not_starts_with: String
  authType_ends_with: String
  authType_not_ends_with: String
  authKey: String
  authKey_not: String
  authKey_in: [String!]
  authKey_not_in: [String!]
  authKey_lt: String
  authKey_lte: String
  authKey_gt: String
  authKey_gte: String
  authKey_contains: String
  authKey_not_contains: String
  authKey_starts_with: String
  authKey_not_starts_with: String
  authKey_ends_with: String
  authKey_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  gender: String
  gender_not: String
  gender_in: [String!]
  gender_not_in: [String!]
  gender_lt: String
  gender_lte: String
  gender_gt: String
  gender_gte: String
  gender_contains: String
  gender_not_contains: String
  gender_starts_with: String
  gender_not_starts_with: String
  gender_ends_with: String
  gender_not_ends_with: String
  joinedAt: DateTime
  joinedAt_not: DateTime
  joinedAt_in: [DateTime!]
  joinedAt_not_in: [DateTime!]
  joinedAt_lt: DateTime
  joinedAt_lte: DateTime
  joinedAt_gt: DateTime
  joinedAt_gte: DateTime
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  picUrl: String
  picUrl_not: String
  picUrl_in: [String!]
  picUrl_not_in: [String!]
  picUrl_lt: String
  picUrl_lte: String
  picUrl_gt: String
  picUrl_gte: String
  picUrl_contains: String
  picUrl_not_contains: String
  picUrl_starts_with: String
  picUrl_not_starts_with: String
  picUrl_ends_with: String
  picUrl_not_ends_with: String
  ageMin: Int
  ageMin_not: Int
  ageMin_in: [Int!]
  ageMin_not_in: [Int!]
  ageMin_lt: Int
  ageMin_lte: Int
  ageMin_gt: Int
  ageMin_gte: Int
  ageMax: Int
  ageMax_not: Int
  ageMax_in: [Int!]
  ageMax_not_in: [Int!]
  ageMax_lt: Int
  ageMax_lte: Int
  ageMax_gt: Int
  ageMax_gte: Int
  createdMoim_every: MoimWhereInput
  createdMoim_some: MoimWhereInput
  createdMoim_none: MoimWhereInput
  joinedMoim_every: MoimWhereInput
  joinedMoim_some: MoimWhereInput
  joinedMoim_none: MoimWhereInput
  blacklist_every: UserWhereInput
  blacklist_some: UserWhereInput
  blacklist_none: UserWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  authKey: String
}
`;