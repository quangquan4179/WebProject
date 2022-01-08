import { storage } from "../../firebase/firebase";
import AuthStore from "../authStore/AuthStore";

const uploadAvatar = function (path: any, userId:number) {
  new Promise((resolve, reject) => {
  const uploadTask = storage.ref(`images/${path.name}`).put(path);
  uploadTask.on("state_changed", () => {
    storage
      .ref("images")
      .child(path.name)
      .getDownloadURL()
      .then((photoURL) => {
        // PostStore.createPost(photoURL)
        AuthStore.uploadAvatar(photoURL, userId);
      })
      .catch((err)=>console.log(err))
  });
}
  )

}
export default uploadAvatar;