import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pateTitle: "home", videos });
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pateTitle: "search", searchingBy, videos });
};

// export const videos = (req, res) =>
//   res.render("videos", { pateTitle: "videos" });

export const getUpload = (req, res) => {
  res.render("upload", { pateTitle: "upload" });
};

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  res.redirect(routes.videoDetail(23445));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pateTitle: "videoDetail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pateTitle: "editVideo" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pateTitle: "deleteVideo" });
