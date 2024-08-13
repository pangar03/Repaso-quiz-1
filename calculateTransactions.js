export const calculateTransactions = (transactions) => {
    const totalTransactions = {};

    transactions.forEach(transaction => {
        if(!totalTransactions[transaction.category]){
            totalTransactions[transaction.category] = transaction.amount;
        }
        else{
            totalTransactions[transaction.category] += transaction.amount;
        }
    });

    return totalTransactions;
};