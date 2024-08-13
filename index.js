import { findBooks } from "/findBooks.js";
import { filterTasks1, filterTasks2 } from "/filterTasks.js";
import { findExpensiveProduct as pricierProduct } from "./findExpensiveProduct.js";
import { calculateMean } from "./calculateMean.js";
import { createFruitsObject } from "./fruitsObject.js";
import { calculateTransactions } from "./calculateTransactions.js";

// =============================== DATA ===============================
const books = [
    { author: "George Orwell", title: "1984", year: 1949, pages: 328 },
    { author: "J.K. Rowling", title: "Harry Potter and the Philosopher's Stone", year: 1997, pages: 223 },
    { author: "J.R.R. Tolkien", title: "The Hobbit", year: 1937, pages: 310 },
    { author: "Harper Lee", title: "To Kill a Mockingbird", year: 1960, pages: 281 },
    { author: "F. Scott Fitzgerald", title: "The Great Gatsby", year: 1925, pages: 180 },
    { author: "George R.R. Martin", title: "A Game of Thrones", year: 1996, pages: 694 },
    { author: "J.D. Salinger", title: "The Catcher in the Rye", year: 1951, pages: 214 },
    { author: "J.R.R. Tolkien", title: "The Lord of the Rings", year: 1954, pages: 1178 },
    { author: "Dan Brown", title: "The Da Vinci Code", year: 2003, pages: 454 },
    { author: "Suzanne Collins", title: "The Hunger Games", year: 2008, pages: 374 },
    { author: "Stephen King", title: "The Shining", year: 1977, pages: 447 },
    { author: "Margaret Atwood", title: "The Handmaid's Tale", year: 1985, pages: 311 },
    { author: "Khaled Hosseini", title: "The Kite Runner", year: 2003, pages: 371 },
    { author: "Markus Zusak", title: "The Book Thief", year: 2005, pages: 552 },
    { author: "Paulo Coelho", title: "The Alchemist", year: 1988, pages: 208 },
    { author: "Gabriel Garcia Marquez", title: "One Hundred Years of Solitude", year: 1967, pages: 417 },
    { author: "Ernest Hemingway", title: "The Old Man and the Sea", year: 1952, pages: 127 },
    { author: "Ray Bradbury", title: "Fahrenheit 451", year: 1953, pages: 194 },
    { author: "Orson Scott Card", title: "Ender's Game", year: 1985, pages: 324 },
    { author: "J.K. Rowling", title: "Harry Potter and the Deathly Hallows", year: 2007, pages: 607 }
];

const tasks1 = [
    { id: 1, description: "Complete project report", state: "completed" },
    { id: 2, description: "Review code for errors", state: "pending" },
    { id: 3, description: "Update documentation", state: "completed" },
    { id: 4, description: "Attend team meeting", state: "pending" },
    { id: 5, description: "Fix bugs in the application", state: "completed" },
    { id: 6, description: "Deploy new version", state: "pending" },
    { id: 7, description: "Write unit tests", state: "completed" },
    { id: 8, description: "Refactor old code", state: "pending" },
    { id: 9, description: "Optimize database queries", state: "completed" },
    { id: 10, description: "Prepare presentation slides", state: "pending" }
];

const products = [
    { name: "Laptop", price: 999.99 },
    { name: "Smartphone", price: 699.99 },
    { name: "Tablet", price: 399.99 },
    { name: "Headphones", price: 199.99 },
    { name: "Smartwatch", price: 249.99 },
    { name: "Camera", price: 549.99 },
    { name: "Printer", price: 129.99 },
    { name: "Monitor", price: 299.99 },
    { name: "Keyboard", price: 49.99 },
    { name: "Mouse", price: 29.99 },
    { name: "External Hard Drive", price: 89.99 },
    { name: "USB Flash Drive", price: 19.99 },
    { name: "Router", price: 79.99 },
    { name: "Speaker", price: 149.99 },
    { name: "Webcam", price: 59.99 }
];

const tasks2 = [
    { id: 1, description: "Complete project report" },
    { id: 2, description: "Review code for errors" },
    { id: 3, description: "Update documentation" },
    { id: 4, description: "Attend team meeting" },
    { id: 5, description: "Fix bugs in the application" },
    { id: 6, description: "Deploy new version" },
    { id: 7, description: "Write unit tests" },
    { id: 8, description: "Refactor old code" },
    { id: 9, description: "Optimize database queries" },
    { id: 10, description: "Prepare presentation slides" },
    { id: 3, description: "Update documentation" }, 
    { id: 5, description: "Fix bugs in the application" }, 
    { id: 7, description: "Write unit tests" }, 
    { id: 1, description: "Complete project report" }, 
    { id: 2, description: "Review code for errors" }, 
    { id: 4, description: "Attend team meeting" }, 
    { id: 6, description: "Deploy new version" }, 
    { id: 8, description: "Refactor old code" }, 
    { id: 9, description: "Optimize database queries" }, 
    { id: 10, description: "Prepare presentation slides" } 
];

const grades = [
    { name: "Alice", grade: 4 },
    { name: "Bob", grade: 3 },
    { name: "Charlie", grade: 5 },
    { name: "David", grade: 2 },
    { name: "Eve", grade: 4 },
    { name: "Frank", grade: 3 },
    { name: "Grace", grade: 5 },
    { name: "Hank", grade: 1 },
    { name: "Ivy", grade: 2 },
    { name: "Jack", grade: 4 },
    { name: "Kathy", grade: 3 },
    { name: "Leo", grade: 5 },
    { name: "Mona", grade: 2 },
    { name: "Nina", grade: 4 },
    { name: "Oscar", grade: 3 },
    { name: "Paul", grade: 5 },
    { name: "Quincy", grade: 1 },
    { name: "Rita", grade: 2 },
    { name: "Sam", grade: 4 },
    { name: "Tina", grade: 3 },
    { name: "Uma", grade: 5 },
    { name: "Vince", grade: 2 },
    { name: "Wendy", grade: 4 },
    { name: "Xander", grade: 3 },
    { name: "Yara", grade: 5 }
];

const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Apple", 
    "Mango",
    "Banana", 
    "Grapes",
    "Orange",
    "Cherry", 
    "Pineapple",
    "Apple", 
    "Strawberry",
    "Banana", 
    "Blueberry",
    "Cherry", 
    "Mango", 
    "Peach",
    "Grapes", 
    "Orange", 
    "Pineapple", 
    "Strawberry", 
    "Blueberry", 
    "Peach", 
    "Apple", 
    "Banana" 
];

const transactions = [
    { category: "Groceries", amount: 50 },
    { category: "Utilities", amount: 100 },
    { category: "Entertainment", amount: 75 },
    { category: "Groceries", amount: 60 }, 
    { category: "Rent", amount: 1200 },
    { category: "Utilities", amount: 90 }, 
    { category: "Transportation", amount: 40 },
    { category: "Entertainment", amount: 85 }, 
    { category: "Groceries", amount: 55 }, 
    { category: "Healthcare", amount: 200 },
    { category: "Utilities", amount: 110 }, 
    { category: "Rent", amount: 1250 }, 
    { category: "Transportation", amount: 45 }, 
    { category: "Entertainment", amount: 95 }, 
    { category: "Groceries", amount: 70 }, 
    { category: "Healthcare", amount: 150 }, 
    { category: "Utilities", amount: 105 }, 
    { category: "Rent", amount: 1300 }, 
    { category: "Transportation", amount: 50 }, 
    { category: "Entertainment", amount: 100 } 
];
// =============================== DATA ===============================

const render = () => {
    // ============== EXERCISE 1 ==================
    // Create a new array that contains only the books published after year 2000 and has more than 300 pages.
    const booksAfter2000 = findBooks(books, 2000, 300);
    console.log('=================== FIRST EXERCISE ===================');
    console.log(booksAfter2000);

    // ============== EXERCISE 2 ==================
    // Create a new array with tasks that are completed and have an odd ID
    const filteredTasks = filterTasks1(tasks1);
    console.log('=================== SECOND EXERCISE ===================');
    console.log(filteredTasks);

    // ============== EXERCISE 3 ==================
    // Search for the product with the highest price
    const expensiveProduct = pricierProduct(products);
    console.log('=================== THIRD EXERCISE ===================');
    console.log(expensiveProduct);

    // ============== EXERCISE 4 ==================
    // Filter repeated tasks
    const uniqueTasks = filterTasks2(tasks2);
    console.log('=================== FOURTH EXERCISE ===================');
    console.log(uniqueTasks);

    // ============== EXERCISE 5 ==================
    // Calculate the mean of the grades from students
    const studentsMean = calculateMean(grades);
    console.log('=================== FIFTH EXERCISE ===================');
    console.log(studentsMean);

    // ============== EXERCISE 6 ==================
    // Calculate how many times each fruit appears in the array
    const fruitsObject = createFruitsObject(fruits);
    console.log('=================== SIXTH EXERCISE ===================');
    console.log(fruitsObject);

    // ============== EXERCISE 7 ==================
    // Calculate total transactions amount by category
    const totalTransactions = calculateTransactions(transactions);
    console.log('=================== SEVENTH EXERCISE ===================');
    console.log(totalTransactions);
};

document.addEventListener('DOMContentLoaded', render);