This repository represents my solution to the *Userlab js backend* challenge.

The task is to code a simple *API CRUD* using **node/express**.

**Notes**:

- This repository was about my learning journey in node/express. Do not pay attention to old git history commits.
- The previous *API CRUD* implementation is using arrays to handle all methods.
- The current *API CRUD* implementation is connected to **MongoDB** to handle everything.
- I added a field '*isBlock*' to represent an example of how authorization could work, but obviously it is not what I would do in a real case scenario.
- There is an extra '/*generate*' endpoint to create fake data.

**Dependencies**:

- *Faker*: is used to generate fake data.
- *@hapi/boom*: is used for error handling.
- *joi*: is used for schema description and data validation.

**Improvements / TO DO:**

- API Documentation
- Authorization/Authentication functionality
- Tests 

**Thoughts**:

- All the improvements mentioned above (and others) were implemented in my Python (*Django*) [solution repository](https://github.com/2Fac3R/crm/tree/main/backend).
