-- 1. Write an SQL statement to select all articles with their author’s email.
SELECT author FROM article_id;

-- 2. Write another SQL statement to select articles from 7th to 12th sorted by id.
SELECT * FROM (
    SELECT * FROM article_id ORDER BY id LIMIT 6 OFFSET 6
) AS subquery ORDER BY id;
