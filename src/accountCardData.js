 const accountCardData = {
   tasks: {
      'account-1': { id: 'account-1', content: 'Cheque Account', value: 300 },
      'account-2': { id: 'account-2', content: 'Equity Fund', value: 5000 },
      'account-3': { id: 'account-3', content: 'Savings Account', value: 323},
      'account-4': { id: 'account-4', content: 'Manual Account', value: -990},
      'account-5': { id: 'account-5', content: 'Old Mutual', value: 404},
      'account-6': { id: 'account-6', content: 'Nedbank ', value: 40.000 },
   }, 
   columns: {
      'column-1': {
         id: 'column-1',
         title: 'Account Row 1',
         taskIds: ['account-1', 'account-2', 'account-3'],
      },
      'column-2': {
         id: 'column-2',
         title: 'Account Row 2',
         taskIds: ['account-4', 'account-5', 'account-6'],
      },
   },
   // for future sorting
   columnOrder: ['column-1', 'column-2']
};

export default accountCardData;