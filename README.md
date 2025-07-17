[Live Version](https://main-daryn-fabius-ceec6c7f.koyeb.app)

# Mini Messageboard

This is a simple message board web application built with Express and EJS. It allows users to view messages on the homepage, submit new messages through a form, and view individual message details on their own page. Originally, messages were stored in an in-memory array, but the project was extended to use a PostgreSQL database for persistent storage. The application has been deployed and is accessible online via Koyeb.  

## 🚀 Features

- View a list of all messages on the homepage
- Submit new messages via a form
- View individual message details on a separate page
- Persistent storage of messages using a PostgreSQL database

## 🛠️ Tech Stack

- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Templating**: [EJS](https://ejs.co/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (via [pg](https://node-postgres.com/))
- **Styling**: Basic CSS

## 📂 How It Works

1. The homepage (`/`) displays all messages stored in the database, showing the **user**, **message text**, and the **date** the message was added.
2. A "New Message" button takes users to a form (`/new`) where they can submit their name and message.
3. On form submission, the message is saved to the PostgreSQL database and users are redirected to the homepage to see their message.
4. Each message on the homepage includes a link to a details page (`/messages/:id`) where users can view the full message details.

## 🧑‍💻 Running the Project

### Prerequisites
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/) running locally or in the cloud

To run the project locally, clone the repository and install the dependencies using npm install. Create a .env file in the project root and add your PostgreSQL connection string and the desired port. Start the server with npm start and open your browser at http://localhost:3000.  


## 🌐 Future Improvements

Add user authentication (e.g., with Passport.js)
Edit and delete messages
