# Masai Library Backend
It backend for a Bookstore management system that allows customers to browse and purchase books online.
## Routes provided by this api

### `/books` - This route return a list of all available books. 
- Example 
 ```
 [
   {
     "_id": "645600cd15473727b23c226a",
     "title": "To Kill a Mockingbird",
     "author": "Harper Lee",
     "category": "Fiction",
     "price": 12.99,
     "quantity": 25,
     "__v": 0
  },
  {
     "_id": "6456010715473727b23c226d",
     "title": "The Hitchhiker's Guide to the Galaxy",
     "author": "Douglas Adams",
     "category": "Science Fiction",
     "price": 9.99,
     "quantity": 10,
     "__v": 0
  }
]
```
- queries available 
  - category
  - author
- You can filter the data using these queries
- Example: `/books?category=Fiction&author=Harper Lee`

### `/books/:BookId`: This route returns the book mathching the bookId provided in the params
- Example 
  - `books/645600cd15473727b23c226a` route will provide this data
```
{
"_id": "645600cd15473727b23c226a",
"title": "To Kill a Mockingbird",
"author": "Harper Lee",
"category": "Fiction",
"price": 12.99,
"quantity": 25,
"__v": 0
}
```

