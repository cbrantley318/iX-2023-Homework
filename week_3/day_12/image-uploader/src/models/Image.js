export class Image {
  constructor(id, name, url) {
    this.name = name;
    this.id = id;
    this.url = url;
  }

  static toJson(image) {
    return {
      name: image.name,
      downloadUrl: image.url,
    };
  }

  static fromFirebase(doc) {
    const data = doc.data();
    return new Image({
      id: doc.id,
      name: data.name,
      url: data.downloadUrl,
    });
  }
}
