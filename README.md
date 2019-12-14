#Petful API

Welcome to the Petful API! This project was completed by Daniel Nichols, Brock Boutwell, and Badri Tulsiram as part of Thinkful's Engineering Immersion Program. 
##What is Petful? 

The Petful API is the backend for a pet adoption application that works based on a first-in, first-out approach.  Pets are allowed to be adopted in the order they arrive at the shelter, and potential adopters are served in the order they sign up for adoption. In this way, Petful makes a difficult decision easy for all pet lovers. How convenient!

##How does it work? 

The Petful API makes use of a queue data structure to track pets and potential adopters. As pets and users are entered into the program, they are added to the end of the queue. When a customer chooses to adopt, their information is sent to the API, which then checks to see that it matches with the values at the front of the queue. If there is a match, the pet and the user are removed from the queue, and (of course) go on to have a happy life together. 

##Technologies Used

This API was built using NodeJS and Express Router.

##Using the API

The API makes use of four endpoints: 

1. /api/users - Used for adding a user to the queue. 

2. /api/cats - The cats endpoint contains two methods, get and delete
GET: Returns an object with all cats currently in the cat queue:

Example Response: 
<pre><code>
{
    "value": {
        "imageURL": "https://www.thesprucepets.com/thmb/EYwC2xOwRMzj72UKfRINhoOjXME=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1152927326-91a042e750cf42abbbded1dc97b2dc6d.jpg",
        "imageDescription": "A fluffy himilayan cat.",
        "name": "Snowball",
        "sex": "Male",
        "age": 5,
        "breed": "Himilayan",
        "story": "Suffers PTSD from life as a therapy cat."
    },
    "next": {
        "value": {
            "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRgyVTSYQv38uwUOSKj_fTAFGUwivw7aQEzsnvKZZVHCJVINP&s",
            "imageDescription": "A tabby cat next to a river",
            "name": "Matt Furry",
            "sex": "Male",
            "age": 4,
            "breed": "Tabby",
            "story": "Found living in a van, down by the river. This cat is prone to outbursts, but has a heart of gold."
        },
        "next": {
            "value": {
                "imageURL": "https://i.pinimg.com/originals/ae/b5/2f/aeb52fbd2c990b1a8d606ef51bfafce1.jpg",
                "imageDescription": "A black cat wondering around the streets", 
                "name": "Selena",
                "sex": "Female",
                "age": 3,
                "breed": "Other/Black",
                "story": "Selena was found wondering around the streets of Gotham. Little is known about her life before the shelter, but she is known to have a love/hate relationship with bats."
            },
            "next": null
        }
    }
}
</pre></code>

DELETE: Used for pet adoption. Checks the request against the first items in the user queue. If successful, dequeues the first cat and first user in the queue, and responds with 204. Otherwise, responds with 401 and 'You must wait your turn!'

3. /api/dogs - Much like the cats endpoint, the dogs endpoint contains two methods:

GET: Responds with an object containing a list of all dogs currently in the dog queue. 

Example response: 
<pre><code>
{
    "value": {
        "imageURL": "http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
        "imageDescription": "A large Rottweiler in a field",
        "name": "Max",
        "sex": "Male",
        "age": 3,
        "breed": "Rottweiler",
        "story": "Was previously owned by a wealthy German count. Don't let his 130lb frame fool you; he is undoubtedly the worst guard dog imaginable."
    },
    "next": {
        "value": {
            "imageURL": "http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
            "imageDescription": "A smiling golden-brown golden retreiver listening to music.",
            "name": "Shadow",
            "sex": "Male",
            "age": 3,
            "breed": "Golden Retriever",
            "story": "Was owned by a suburban family, but got separated. Took an incredible journey with another dog and a cat."
        },
        "next": null,
    }
} </pre></code>

DELETE: Used for pet adoption. Checks the request against the first items in the user queue. If successful, dequeues the first dog and first user in the queue, and responds with 204. Otherwise, responds with 401 and 'You must wait your turn!'
 
4. /api/queue- The queue endpoint will return an array with a list of all the users currently contained within the queue, in order. 
<pre><code>[
Daniel, 
Brock, 
Badri, 
Kelley
]</pre></code>

##Thanks

The developers would like to thank the entire Thinkful team for their guidance throughout the course of this project. We would also like to thank you for your interest in using our work. We hope that you will enjoy using this API as much as we have enjoyed building it. 

The following is information on how to set up your express project. 

# Express Boilerplate!

This is a boilerplate project used for starting new projects!

## How do set up?

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests in watch mode `npm test`

## Deploying

When your new project is ready for deployment, add a new heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
