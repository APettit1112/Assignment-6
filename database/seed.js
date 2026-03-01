// Import sqlite3
const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database('./database/university.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
    return;
  }

  db.serialize(() => {

    const insert =
      `INSERT INTO courses (courseCode, title, credits, description, semester)
       VALUES (?, ?, ?, ?, ?)`;

    db.run(insert, ['CS101','Intro Programming',3,'Learn Python basics','Fall 2024']);
    db.run(insert, ['BIO120','General Biology',3,'Introduction to biological principles','Fall 2024']);
    db.run(insert, ['MATH150','Calculus I',4,'Basic calculus','Fall 2024']);
    db.run(insert, ['ENG101','Composition I',3,'Academic writing and critical thinking','Spring 2025']);
    db.run(insert, ['ME210','Thermodynamics',3,'Principles of thermodynamics and heat transfer','Spring 2025']);
    db.run(insert, ['CS301','Database Systems',3,'Design and implementation of database systems','Fall 2024']);
    db.run(insert, ['PHYS201','Physics II',4,'Electricity, magnetism, and modern physics','Spring 2025']);
    db.run(insert, ['CS201','Data Structures',4,'Study of fundamental data structures and algorithms','Spring 2025']);

    // SUCCESS MESSAGE AFTER INSERTS
    db.get('SELECT COUNT(*) AS count FROM courses', (err, row) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Successfully added ${row.count} courses to the database!`);
      }

      // Close DB
      db.close();
    });
  });
});