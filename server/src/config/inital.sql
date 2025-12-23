CREATE TABLE students (
    sid INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    course VARCHAR(50) NOT NULL
);



CREATE TABLE teachers (
    tid INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    department VARCHAR(50) NOT NULL
);


CREATE TABLE attendance (
    aid INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    date DATE NOT NULL,
    status ENUM('present', 'absent') NOT NULL,
    marked_by INT NOT NULL,

    FOREIGN KEY (student_id) REFERENCES students(sid),
    FOREIGN KEY (marked_by) REFERENCES teachers(tid),

    UNIQUE (student_id, date)
);
