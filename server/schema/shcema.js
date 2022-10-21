const graphql = require("graphql");

const { GraphQLObjactType, GraphQLString } = graphql;

const BookType = new GraphQLObjactType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjactType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },

      resolve(parent, args) {
        // code to get data from db/other source
      },
    },
  },
});
