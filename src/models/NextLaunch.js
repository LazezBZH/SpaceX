export default class NextLaunch {
  video;
  upcoming;
  success;
  image;
  name;
  details;
  article;

  constructor(data) {
    this.video = data.links.youtube_id;
    this.upcoming = data.upcoming;
    this.success = data.success;
    this.image = data.links.flickr.original[0];
    this.name = data.name;
    this.details = data.details;
    this.article = data.links.article;
  }
}
