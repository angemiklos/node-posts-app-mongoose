'use strict';

const mongoose = require('mongoose');

// this is our schema to represent a blog post
const postSchema = mongoose.Schema({
  title: {type: String, required: true},
  author: {
    firstName: String,
    lastName: String
  },
  content: {type: String, required: true},
});

// *virtuals* (http://mongoosejs.com/docs/guide.html#virtuals)
// allow us to define properties on our object that manipulate
// properties that are stored in the database. Here we use it
// to generate a human readable string based on the address object
// we're storing in Mongo.
postSchema.virtual('authorString').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});


// this is an *instance method* which will be available on all instances
// of the model. This method will be used to return an object that only
// exposes *some* of the fields we want from the underlying data
postSchema.methods.serialize = function() {

  return {
    id: this._id,
    title: this.title,
    author: this.authorString,
    content: this.content
  };
}

// note that all instance methods and virtual properties on our
// schema must be defined *before* we make the call to `.model`.
const Post = mongoose.model('Post', postSchema);

module.exports = {Post};
