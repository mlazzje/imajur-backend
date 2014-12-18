# API calls

/image/list
Returns list of all images uploaded

/image/get
Return image info as JSON
{
    "id": 1,
    "titre": "I am an Image, yay",
    "extension": jpg,
    "createdAt": "2014-12-17T12:10:12.706Z",
    "updatedAt": "2014-12-17T12:10:12.706Z",
    "userId": null,
    "commentaires": [
        {
            "id": 1,
            "content": "bla",
            "notifie": null,
            "createdAt": "2014-12-17T12:10:17.446Z",
            "updatedAt": "2014-12-17T12:10:17.510Z",
            "userId": null,
            "imageId": 1
        }
    ],
    "votes": [
        {
            "id": 3,
            "point": 1,
            "createdAt": "2014-12-17T12:24:44.075Z",
            "updatedAt": "2014-12-17T12:24:44.180Z",
            "userId": null,
            "imageId": 1
        },
        {
            "id": 4,
            "point": -2000,
            "createdAt": "2014-12-17T12:25:09.477Z",
            "updatedAt": "2014-12-17T12:25:09.579Z",
            "userId": null,
            "imageId": 1
        }
    ]
}

/image/insert
Upload and create image (POST query with form-data)
Requires:
'image' : contains image file
'titre' : title of the image
The image is stored as 'id'.'extension'


/vote/insert
Create a vote (POST query)
Requires
'point' : -1 or 1
'image' : image id to vote on

/vote/byimage/{id}
Returns votes and downvotes as arrays on an image
{
"upvotes": [],
"downvotes": []
}

/commentaire/insert
Create a vote (POST query)
Requires
'content' : string containing the comment (URI escaped!)
'image' : image id to comment on

/vote/byimage/{id}
Returns comments on an image
[
{
"id": 1,
"content": "fdsfdssfd",
"notifie": null,
"createdAt": "2014-12-18T15:02:38.293Z",
"updatedAt": "2014-12-18T15:02:38.467Z",
"userId": null,
"imageId": 1,
"user": null
}
]
