const { Client } = require("pg");
require("dotenv").config();

const connectionString = process.env.DATABASE_URL;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
text VARCHAR ( 255 ),
username VARCHAR ( 255 ),
added TIMESTAMP DEFAULT NOW()
);

INSERT INTO messages (text, username, added)
VALUES ('Hello World!', 'Charles', '2025-07-14 08:34:10'), 
('Hi there', 'Bryan', '2025-07-12 12:17:45'),
('Whatsup', 'Jenny', '2025-07-16 15:28:24');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();