export default class NextLaunch {
  video;
  upcoming;
  success;
  image;
  name;
  details;
  article;

  constructor(links, upcoming, success, name, details) {
    this.video = links.youtube_id;
    this.upcoming = upcoming;
    this.success = success;
    // this.image = links.flickr.original[0];
    this.name = name;
    this.details = details;
    this.article = links.article;
  }
}
