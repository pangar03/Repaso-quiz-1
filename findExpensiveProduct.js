export const findExpensiveProduct = (products) => {
    let expensiveProduct = products[0];

    products.forEach(product => {
        if (product.price > expensiveProduct.price) expensiveProduct = product;
    });

    return expensiveProduct;
};