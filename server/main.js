import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

app.listen(process.env.PORT || 8080, process.env.IP);
