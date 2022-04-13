# Guide to Running this App

First of all, the node_modules has been ignored, so you should "npm i" as a first step.

Second, when npm i runs sucessfully (please make sure internet didn't ruin it), you should go ahead and go to the server folder in the src folder and run "node server.js", so the proxy bakend API runs.

Third, go back to src folder and run "yarn start", or "npm start", to run the app, then open a localhost:3000 and the App should be there.

Have fun and do your best trying to break it, I dare you.

# Specifications for the APP

I have made the proxy API, for security reasons so that we can store the retreived token in the ENVIRONMENT variables, to make it hidden.

THe Implicit Grant flow itself is not secure, for example there were no way to hide the App Secret, so I had to put it directly in the Frontend, and the token receipt is hardcoded in the redirect link, which is not secure at all, but I managed it and deleted it from the link while sucessfully storing it for use in the API proxy I made.

I have used bootstrap for the Navbar (it is simple), and used bootstrap to make it faster to make the Grid where the Artists and Albums are shown, although it is worth noting that I can make the grid from scratch if ever needed, I just chose to save time and have the same result.

Everything else about the design is made from scratch following the wireframe exactly. 

I also implemented the search as you go feature, it actually is really easy and I coupled it with the debounce function just to prevent bombarding the api on every key change. (runs only when you stop typing in the search bar)

I have implemented a persisted version of Redux Store, the API receipts are stored there, the ID of the artist, and the Name of the Artist to facilitate the code.

