<h1 align="center">
  <br>

GET_YOUTUBE-SUBSCRIBERS

</h1>

GET_YOUTUBE-SUBSCRIBERS is an api that allows users to get the data in the form of array of subscribers when user hit the endpoint "http://localhost:3000/subscribers". It also provides the facility to acess only the names and subscribedChannel when user hit the endpoint"http://localhost:3000/subscribers/names" or when user hit the endpoint "http://localhost:3000/subscribers/:id" then it got the access to the subscriber of that specific id.

Inspite of all these features it also provides the facility to add the new subscriber when user hit the endpoint "http://localhost:3000/subscriber" , update and delete the subscriber when user hit the endpoint "http://localhost:3000/subscriber/:id".

<h2 align='center'>
<a href='https://generator-flashcard.vercel.app/' target="_blank">Demo</a>
</h2>

<p align="center">  
  <a href="https://opensource.org/licenses/MIT">
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Build Process](#build-process)

## Introduction

GET_YOUTUBE-SUBSCRIBERS is an API that enables users to manage and retrieve subscriber data from a YouTube-like system. By accessing the endpoint http://localhost:3000/subscribers, users can fetch an array of subscriber information. Additionally, the API provides the ability to retrieve specific details such as subscriber names and their subscribed channels through the endpoint http://localhost:3000/subscribers/names. For targeted data, users can request the details of a particular subscriber by their ID via http://localhost:3000/subscribers/:id.

Beyond data retrieval, the API also supports CRUD operations. Users can add new subscribers using http://localhost:3000/subscriber, update existing subscriber details, or delete a subscriber by hitting http://localhost:3000/subscriber/:id. This comprehensive functionality makes the API a robust tool for managing subscriber data efficiently.

## Features

A few of the things you can do with GET_YOUTUBE-SUBSCRIBERS API:

Retrieve All Subscribers: Access the complete list of subscribers by sending a request to http://localhost:3000/subscribers, which returns an array of subscriber data.

Fetch Subscriber Names and Channels: Quickly obtain a simplified list of subscriber names and their subscribed channels by hitting the endpoint http://localhost:3000/subscribers/names.

Get Subscriber by ID: Retrieve detailed information for a specific subscriber using their unique ID through the endpoint http://localhost:3000/subscribers/:id.

Add New Subscriber: Easily add a new subscriber to the database by sending a POST request to http://localhost:3000/subscriber, allowing for seamless integration of new users.

Update Subscriber Information: Modify the details of an existing subscriber by sending a PUT request to http://localhost:3000/subscriber/:id, ensuring that subscriber information remains current.

Delete a Subscriber: Remove a subscriber from the database with a DELETE request to http://localhost:3000/subscriber/:id, providing a straightforward way to manage subscriber records.

## Tech Stack

GET_YOUTUBE-SUBSCRIBERS API is built using the following technologies:

Node.js: A JavaScript runtime environment that allows for building scalable and high-performance server-side applications.

Express.js: A web application framework for Node.js that simplifies the creation of APIs and handling of HTTP requests and responses.

MongoDB: A NoSQL database used to store subscriber data in a flexible and scalable format, allowing for easy data retrieval and management.

Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js that provides a schema-based solution to model application data, making database interactions more intuitive.

RESTful API Design: Following REST principles to create endpoints for different operations (GET, POST, PUT, DELETE) for managing subscriber data.

Nodemon: A development tool that automatically restarts the Node.js application when file changes are detected, streamlining the development process.

Postman (or similar tools): Used for testing API endpoints and ensuring that all functionalities work as intended.

## Build Process

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Mohd-Ehtesham/get_youtube_subscribers.git

# Go into the repository
$ cd get_youtube_subscribers

# Install dependencies
$ npm install

# Run the app
$ npm start
```
