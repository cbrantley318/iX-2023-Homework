import { collection, query, getDocs, addDoc } from 'firebase/firestore';

import { db } from '../firebase/firebase';
import { Image } from '../models/Image';

class ImagesService {
    constructor() {
      this.collection = 'images';
    }
  
    async createImage(image) {
      const collectionRef = collection(db, this.collection);
      console.log(image);
      const docRef = await addDoc(collectionRef, Image.toJson(image));
  
      image.id = docRef.id;
      return image;
    }
  
    async fetchImages() {
      const collectionRef = collection(db, this.collection);
  
      const querySnapshot = await getDocs(query(collectionRef));
  
      const images = [];
      querySnapshot.forEach((doc) => {
        images.push(Image.fromFirebase(doc));
      });
      console.log(images);
  
      return images;
    }
  }
  
  const service = new ImagesService();
  export default service;