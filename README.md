# Node(Typescript) Backend
A Scallable Backend on Node(Typescript)

## Project Structure

```
node-ts-project/
│
├── src/
│   ├── config/
│   │   └── index.ts               # Environment variables config
│   │
│   ├── controllers/
│   │   ├── userController.ts       # Example controller for user routes
│   │
│   ├── models/                    
│   │   ├── userModel.ts            # Example user model (Mongoose)
│   │   └── productModel.ts         # Example product model (Mongoose)
│   │
│   ├── services/
│   │   ├── userService.ts          # Business logic for user-related operations
│   │
│   ├── routes/
│   │   ├── userRoutes.ts           # User-related routes
│   │   └── productRoutes.ts        # Product-related routes
│   │
│   ├── middlewares/
│   │   └── authMiddleware.ts       # Example authentication middleware
│   │
│   ├── database/
│   │   └── connect.ts              # Database connection setup (MongoDB)
│   │
│   ├── utils/                     
│   │   └── logger.ts               # Logger utility
│   │
│   ├── app.ts                      # Main Express server setup
│   └── index.ts                    # Application entry point
│
├── dist/                           # Compiled JS (after build)
│
├── test/                           # Test folder (unit/integration tests)
│
├── .env                            # Environment variables (e.g., DB connection string)
├── .gitignore                      # Files to ignore in Git
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
├── nodemon.json                    # Nodemon configuration
└── README.md                       # Project documentation

```
