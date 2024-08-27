import moment from "moment";

const fileFormat = (url = "") => {
  const fileExt = url.split(".").pop();
  if (fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg")
    return "video";
  if (fileExt === "mp3" || fileExt === "wav") return "audio";
  else if (
    fileExt === "jpg" ||
    fileExt === "jpeg" ||
    fileExt === "png" ||
    fileExt === "gif"
  )
    return "image";
  return "file";
};
const transformImage = (url = "", width = 100) => {
  // url ke saath width bhi adjust kar skte hai
  const newUrl = url.replace("upload/", `upload/dpr_auto/w_${width}/`);
  return newUrl;
};
const getLast7Days = () => {
  const currentDate = moment();
  const last7Days = [];
  for (let i = 0; i < 7; i++) {
    const dayDate = currentDate.clone().subtract(i, "days");
    const dayName = dayDate.format("dddd");
    last7Days.unshift(dayName);
  }
  return last7Days;
};

const getOrSaveFromStorage = ({ key, value, get }) => {
  if (get) {
    console.log(`Getting ${key} from localStorage:`, localStorage.getItem(key)); // Debugging
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : null;
  } else {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`Saved ${key} to localStorage`, value); // Debugging
  }
};

export { fileFormat, transformImage, getLast7Days, getOrSaveFromStorage };
