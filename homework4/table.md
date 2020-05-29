## User Table

| userIndex (PK) | name | id | password |


## Article Table

| ArticleIndex (PK) | author (FK) | title | content | Tag | createdAt | 


## Comment Table

| CommentIndex (PK) | ArticleIndex (FK) | author (FK) | content | createdAt |


## Likes Table

| userIndex (FK) | ArticleIndex (FK) |
