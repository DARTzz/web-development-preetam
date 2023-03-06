const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express(); // we get an object with all kinds of functions and stuff

app.use(morgan('dev')); // adding morgan middleware for logging

app.use(express.json()); // setting up middleware that actually adds request.body property with the actual json data.

app.use((req, res, next) => {
  console.log('Accepting request !');
  next();
});

// parsing the json file into string for use :)
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
); // new data changes will only be visible after server restart since we have readfile reading only once at start of server

// for sending data of all the tours available.
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    //  status code for sucessfull data sent is 200

    status: 'sucess',
    results: tours.length,
    data: { tours }, // the tours will be replaced by all the properties in the tours object above.
  });
});

// for sending a particular tour :)
app.get('/api/v1/tours/:id', (req, res) => {
  // here :id is a variable.

  // converting id from string to integer so that it can be compared
  const id = req.params.id * 1;

  // handling the case where the id sent is not present(404)
  if (id > tours.length) {
    res.status(404).json({
      status: ' fail',
      message: 'Invalid ID',
    });
  }

  // finding the element with id passed in the url in the tours array for returning it.
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: 'sucess',
    data: {
      tour,
    },
  });
});

// for adding a new tour
app.post('/api/v1/tours', (req, res) => {
  const newId = tours[tours.length - 1].id + 1; // creating a new id for the incoming new tour data.
  const newTour = Object.assign({ id: newId }, req.body); // combining both objects to get the result that can be stored.

  tours.push(newTour); // adding the new tour in the tour array.

  // using the asynchronous version of writeFile since we are inside of a callback function and we dont want to block the event loop.
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours), // need to stringify the object before storing in string
    (err) => {
      res.status(201).json({
        // 201 is status code for data stored
        status: 'sucess',
        data: {
          tour: newTour,
        },
      });
    }
  );
});

// Updating data already stored using HTTP method PATCH
app.patch('/api/v1/tours/:id', (req, res) => {
  // we recieve json file from client and then upate changes in the json file in the server but for now :

  // handling the case where the id sent is not present(404)
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: ' fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'sucess',
    message: 'updated tour !',
  });
});

app.delete('/api/v1/tours/:id', (req, res) => {
  // the data that is to be deleted is sent by the client and is deleted from the json data stored.

  // handling the case where the id sent is not present(404)
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: ' fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    // delete request when sucessfully executed should give 204 status.
    status: 'success',
    data: null,
  });
});

// working on USERS resoureces in different syntax :)
const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined !!',
  }); // 500 is status code for internal server error.
};
const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined !!',
  }); // 500 is status code for internal server error.
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined !!',
  }); // 500 is status code for internal server error.
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined !!',
  }); // 500 is status code for internal server error.
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined !!',
  }); // 500 is status code for internal server error.
};

app.route('/api/v1/users').get(getAllUsers).post(createUser);
app.route('api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`); // this will be printed in console.
});
