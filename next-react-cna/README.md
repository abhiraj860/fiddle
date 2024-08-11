# Seed Script


CREATE TABLE IF NOT EXISTS quizzes (
quiz_id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT,
question_text TEXT NOT NULL,
created_at TIMESTAMPTZ DEFAULT NOW());    

CREATE TABLE IF NOT EXISTS answers (
answer_id SERIAL PRIMARY KEY,
quiz_id INT REFERENCES quizzes(quiz_id) ON DELETE CASCADE,
answer_text TEXT NOT NULL,
is_correct BOOLEAN NOT NULL); 


INSERT INTO quizzes (title, description, question_text)
VALUES 
('Programming Quiz 1', 'Basic programming concepts', 'What is the output of the following code in Python? print(2 + 3 * 4)'),
('Programming Quiz 2', 'Basic programming concepts', 'Which of the following is a loop structure in JavaScript?'),
('Programming Quiz 3', 'Basic programming concepts', 'What is the correct syntax to define a function in Python?');


INSERT INTO answers (quiz_id, answer_text, is_correct)
VALUES 
-- For Quiz 1
(1, '14', TRUE),  -- Correct answer: 2 + (3 * 4) = 14
(1, '20', FALSE),
(1, '10', FALSE),
(1, '12', FALSE),

-- For Quiz 2
(2, 'if-else', FALSE),
(2, 'for', TRUE),  -- Correct answer: 'for' is a loop structure
(2, 'switch', FALSE),
(2, 'break', FALSE),

-- For Quiz 3
(3, 'function myFunc():', FALSE),
(3, 'def myFunc():', TRUE),  -- Correct answer: 'def myFunc():'
(3, 'func myFunc():', FALSE),
(3, 'def: myFunc()', FALSE);
