module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        _id:Number,
        title: String,
        isbn: String,
        pageCount: Number,
        publishedDate: Object,
        thumbnailUrl: String,
        shortDescription: String,
        longDescription: String,
        status: String,
        authors: Array,
        categories: Array,
        price:Number
      }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Book = mongoose.model("book", schema);
    return Book;
  };