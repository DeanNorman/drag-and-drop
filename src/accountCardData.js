 const accountCardData = {
   tasks: {
      'account-1': { id: 'account-1', content: 'Cheque Account'},
      'account-2': { id: 'account-2', content: 'Equity Fund'},
      'account-3': { id: 'account-3', content: 'Savings Account'},
      'account-4': { id: 'account-4', content: 'Manual Account'},
   },
   columns: {
      'column-1': {
         id: 'column-1',
         title: 'Unsorted Accounts',
         taskIds: ['account-1', 'account-2', 'account-3', 'account-4'],
      },
   },
   // for future sorting
   columnOrder: ['column-1']
};

export default accountCardData;