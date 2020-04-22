# note_taker
In this homework assignment I have successfully created an application that allows users to create and save notes, view previously saved notes, and delete previously saved notes. This application uses an express backend and the user can save and retrieve note data from a JSON file.

* The following HTML routes have been created:

  * GET `/notes` - which returns the `notes.html` file.

  * GET `*` - which returns the `index.html` file

* The application has a `db.json` file on the backend that is being used to store and retrieve notes using the `fs` module.

* The following API routes have been created:

  * GET `/api/notes` - which reads the `db.json` file and returns all saved notes as JSON.

  * POST `/api/notes` - which receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.

  * DELETE `/api/notes/:id` - which receives a query parameter containing the id of a note to delete. Each note has been given a unique `id` when it's saved. 

