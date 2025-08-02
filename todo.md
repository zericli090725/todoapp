Learn how to use nodemon

Login flow:
1. Client submits 2 strings, username and password in the body.
2. Server stores the 2 strings from body with variables.
3. Server queries username from user collection (mongoose findOne()).
- if user is not in database, return 404 error, user doesn't exist;
- if user exists, continue.
4. Decrypt the password.
5. Server compares the 2 passwords.
6. Server returns jwt token. include user ID in jwt token.
7. Client will store the jwt token, query the user, save the user, redirect.

Account creation flow: 
1. Client submits 2 strings, username and password in the body.
2. Server stores the 2 strings from body.
3. Server uses bcrypt to encrypt the password. salting the password.
4. Server creates a user in mongoose.

Note:
User collection needs a couple of things: 
- username or email needs to be unique
- index username, do a bit of reading on database indexes, and in mongoose docs how to index

