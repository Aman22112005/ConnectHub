// Import Google API Library
const { google } = require('googleapis');

// Set environment variables
const apikey = 'AIzaSyCUFVDW7-6c8fp-xLYwuePVbe_maCALgbA';
const clientid = '902976874622-53k9bl2mtg8hkcclssipr5c9fe0o76kf.apps.googleusercontent.com';
const clientsecret = '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';

// Create Google Meet API client
const auth = new google.auth.GoogleAuth({
  client_id: clientid,
  client_secret: clientsecret,
  redirect_uri: 'http://localhost:8080/redirect'
});

const meet = google.meetings({ version: 'v1', auth });

// Create meeting
meet.meetings.create({
  requestBody: {
    title: 'Test Meeting',
    startTime: '2023-03-01T10:00:00Z',
    endTime: '2023-03-01T11:00:00Z'
  }
}, (err, response) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Meeting created:', response.data);
  }
});

// Confirmation console
console.log('Google API Library installed successfully!');
console.log('Google Meet API client created!');

