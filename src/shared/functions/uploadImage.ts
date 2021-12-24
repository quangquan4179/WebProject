import { pathToFileURL } from "url";
import { storage } from "../../firebase/firebase";

const uploadImage = function (path: any) {
  const uploadTask = storage.ref(`images/${path.name}`).put(path);
  uploadTask.on("state_changed", () => {
    storage
      .ref("images")
      .child(path.name)
      .getDownloadURL()
      .then((downloadURL) => {
        console.log("File available at", downloadURL);
      });
  });
};
export default uploadImage;
