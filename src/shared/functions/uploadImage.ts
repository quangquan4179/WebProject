import { pathToFileURL } from "url";
import { storage } from "../../firebase/firebase";
import PostStore from "../../stores/PostStore";
const uploadImage = function (path: any,content: string, userId:number) {
  new Promise((resolve, reject) => {
  const uploadTask = storage.ref(`images/${path.name}`).put(path);
  uploadTask.on("state_changed", () => {
    storage
      .ref("images")
      .child(path.name)
      .getDownloadURL()
      .then((photoURL) => {
        PostStore.createPost(content,photoURL,userId)
      })
      .catch((err)=>console.log(err))
  });
}
  )

}
export default uploadImage;
