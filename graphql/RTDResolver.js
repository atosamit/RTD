const resolvers = {
  Query: {
    getPremiumAdjustment: (parent, args, context, info) => {
      const { id } = args;
      // Placeholder data
      const sampleData = {
        id: id,
        Comment: "This is a sample comment",
        Total_Borrower_Fees: 100.0,
        CU_Retail_Rate: 1.5,
        Protected_Loan_Amount: 15000.0,
        Pay_Rate: 3.0,
        Premium_Due: 500.0,
        Total_Amount: 16000.0
      };
      return sampleData;
    }
  },
  Mutation: {
    editPremiumAdjustment: (parent, args, context, info) => {
      const { input } = args;
      // Simulating an edit by returning the input data
      return input;
    }
  }
};

export default resolvers;