# OrozcoCR-jr-fs-challenge-FE
The main idea of this application is to provide the user with an interactive and easy-to-use interface, where they can navigate through a navbar between the functionalities of viewing the list of URLs or adding new URLs.

## Logic description: 
In the "Home" page, a GET request is made to the JSON file where the information of all valid URLs entered by the user is stored.
On the other hand, in the "AddUrl" page, when the user submits the form to add a new URL, the create function is called with the entered URL as an argument. The create function makes a POST request to the server with the provided URL and handles the response accordingly

## Important details in the code:
The application runs on port 3001 because the API is being hosted on port 3000.
In the package.json, a proxy is added, allowing us to make requests to /short_urls.json instead of the full localhost link.

## Instructions for use
Do a npm install 

If you have a docker compose error "A server is already running (pid:1, file: app/tmp/pids/server.pid). You must have your docker up, then in a new terminal do docker exec -it [name of the container] /bin/bash, and delete server.pid, doing rm /app/tmp/pids/server.pid in your terminal

