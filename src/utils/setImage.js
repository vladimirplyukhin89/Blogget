export const setImage = (thumbnail, notphoto) => {
  let img;
  if (thumbnail.length && thumbnail !== "self") {
    img = thumbnail;
  } else {
    img = notphoto;
  }
  return img;
};
