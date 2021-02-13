// global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// users
const USERS = "/users";
const USERDETAIL = "/:id";
const EDITPROFILE = "/edit-profile";
const CHANGEPASSWORD = "/change-password";

// videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEODETAIL = "/:id";
const EDITVIDEO = "/:id/edit";
const DELETEVIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USERDETAIL;
    }
  },
  editProfile: EDITPROFILE,
  changePassword: CHANGEPASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return VIDEODETAIL;
    }
  },
  editVideo: EDITVIDEO,
  deleteVideo: DELETEVIDEO,
};

export default routes;
