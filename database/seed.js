// Import the sqlite3 package
const sqlite3 = require('sqlite3').verbose();

// Connect to the sqlite3 database called university.db
const db = new sqlite3.Database('./database/university.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
    return;
  }

  // Insert courses into the database
  db.serialize(() => {
    db.run(
      `INSERT INTO courses (courseCode, title, credits, description, semester) 
       VALUES (?, ?, ?, ?, ?)`,
      ['CS101', 'Intro Programming', 3, 'Learn Python basics', 'Fall 2024']
    );

    db.run(
      `INSERT INTO courses (courseCode, title, credits, description, semester) 
       VALUES (?, ?, ?, ?, ?)`,
      ['BIO120', 'General Biology', 3, 'Introduction to biological principles', 'Fall 2024']
    );

    db.run(
      `INSERT INTO courses (courseCode, title, credits, description, semester) 
       VALUES (?, ?, ?, ?, ?)`,
      ['MATH150', 'Calculus I', 4, 'Basic calculus', 'Fall 2024']
    );

    db.run(
      `INSERT INTO courses (courseCode, title, credits, description, semester) 
       VALUES (?, ?, ?, ?, ?)`,
      ['ENG101', 'Composition I', 3, 'Academic writing and critical thinking', 'Spring 2025']
    );

    db.run(
      `INSERT INTO courses (courseCode, title, credits, description, semester) 
       VALUES (?, ?, ?, ?, ?)`,
      ['ME210', 'Thermodynamics', 3, 'Principles of thermodynamics and heat transfer', 'Spring 2025']
    );

    db.run(
      `INSERT INTO courses (courseCode, title, credits, description, semester) 
       VALUES (?, ?, ?, ?, ?)`,
      ['CS301', 'Database Systems', 3, 'Design and implementation of database systems', 'Fall 2024']
    );

    db.run(
      `INSERT INTO courses (courseCode, title, credits, description, semester) 
       VALUES (?, ?, ?, ?, ?)`,
      ['PHYS201', 'Physics II', 4, 'Electricity, magnetism, and modern physics', 'Spring 2025']
    );

    db.run(
      `INSERT INTO courses (courseCode, title, credits, description, semester) 
       VALUES (?, ?, ?, ?, ?)`,
      ['CS201', 'Data Structures', 4, 'Study of fundamental data structures and algorithms', 'Spring 2025']
    );
  });

  // Console.log statement indicating successful insertion and close the connection
  db.run('SELECT COUNT(*) as count FROM courses', (err, row) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log(`Successfully added ${row.count} courses to the database!`);
    }

    // Close the database connection
    db.close((err) => {
      if (err) {
        console.error('Error closing database:', err);
      }
    });
  });
});
