# Fullstack Review

## GOAL

As of right now there are only 3 pokemon displayed on the static mockup.html and none of the buttons are functioning. Implement the following functionality:

## If you get stuck...

- Did you install all of your dependencies (npm install/package.json)?
- Did you import/require your data correctly?
- Did you export your data correctly?
- Is your Webpack still running?
- If you're not getting a response in Postman, did you send a response back from your controller?

### Step 1

- Build out server to serve the front end.
- Create a script for starting the server and for webpack. Run both.
- Refactor your client to dynamically render from your React files.
- You will know if you have done this correctly if you see bulbasaur, ivysaur, venasaur.

### Step 2

- Using the database of your choice, build out the back-end (establish connection, seed from pokemon.json)
- Ensure that your back end is completely set-up. Check your database folder and your server folder.

### Step 3

- Create a GET route to display all the pokemon in 'pokemon.json' on the page
- Filter the displayed pokemon to match the type selected in the dropdown menu
- Re-display all the pokemon on the page when 'Show All' is clicked

### Step 4

- On click of the pokemon's name, enable editing through an input field. On 'submit', your component should re-render so the updated name is displayed (hint: UPDATE)
- Create a delete button to delete a pokemon. On click of the delete button, the pokemon should be removed from the page (hint: DELETE)
- Lastly, implement the 'Insert' button so you can add a pokemon to the list (name, type, image) (hint: INSERT INTO)
