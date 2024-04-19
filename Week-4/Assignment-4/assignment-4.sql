-- 1. Write an SQL statement to select all articles with their author’s email.
SELECT author FROM article;

-- 2. Write another SQL statement to select articles from 7th to 12th sorted by id.
SELECT * FROM article
WHERE id BETWEEN 7 AND 12
ORDER BY id;