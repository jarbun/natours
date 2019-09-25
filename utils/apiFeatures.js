class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    let newQuery = JSON.stringify(queryObj);
    newQuery = JSON.parse(newQuery.replace(/\b(gte|gt|lte|lt)\b/g, match => '$' + match));

    this.query = this.query.find(newQuery);

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      // Replaces 'a,b' with 'a b'
      // a is primary, ties are broken using b
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      // Default sort by latest first
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  limit() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      // Exclude __v by default
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    const page = Number(this.queryString.page) || 1;
    const limit = Number(this.queryString.limit) || 100;
    const skipBy = (page - 1) * limit;

    this.query = this.query.skip(skipBy).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;