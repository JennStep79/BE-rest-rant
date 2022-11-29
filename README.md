# Project REST-Rant

REST-Rant is an app where users can review restaurants.

|Method|           Path         |   Purpose  |  
|:----:|:----------------------:|:----------:|
|GET|            /           |Home page|
|GET|         /places        |Places index page|
|POST|         /places        |Create new place|
|GET|       /places/new      |Form page for creating a new place|
|GET|       /places/:id      |Details about a particular place|
|PUT|       /places/:id      |Update a particular place|
|GET|    /places/:id/edit    |Form page for editing an existing place|
|DELETE|       /places/:id      |Delete a particular place|
|POST|    /places/:id/rant    |Create a rant (comment) about a particular place      |
|DELETE|/places/:id/rant/:rantId|Delete a rant (comment) about a particular place     |
|GET|            *           |404 page (matches any route not defined above)      |


|Place Name| City | State | Cuisine | Image URL |
|:--------------:|:--------------:|:---:|:------------:|:-----------------------------|
|Freddy's|Henderson|NV|American|https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/freddy-s-opens-first-international-location.jpg?itok=ZbzPAbj-|
|Sushi-wa|Henderson|NV|Japanese|https://media-cdn.tripadvisor.com/media/photo-s/07/09/db/44/worth-the-short-drive.jpg|