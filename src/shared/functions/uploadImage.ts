import { pathToFileURL } from "url";
import { storage } from "../../firebase/firebase";
import PostStore from "../../stores/PostStore";
const uploadImage =  function (path: any,content: string) {
  return new Promise((resolve, reject) => {
    storage.ref(`images/${path.name}`).put(path).then((res) => {
      storage
        .ref("images")
        .child(path.name)
        .getDownloadURL()
        .then((photoURL) => {
          PostStore.createPost(content,photoURL).then(() =>{resolve('success')}).catch(err => reject(err))

        })
        .catch((err)=>reject(err))
      }).catch(err => reject(err));
    
  })
}
// viet theo kieu promise thoi ai cap
export default uploadImage;
