const arr = [
  {
    name: "abhilash",
    place: "bangalore, ",
    likes: "10 likes",
    postTime: "5 hours ago",
    profileImg: "images/user.jpg",
    mainImg: "images/bg.jpg",
    profileImg: "images/logo.jpg",
  },
  {
    name: "pooja",
    place: "bangalore, ",
    likes: "10 likes",
    postTime: "5 hours ago",
    profileImg: "images/user.jpg",
    mainImg: "images/bg.jpg",
    profileImg: "images/logo.jpg",
  },
  {
    name: "shad",
    place: "bangalore, ",
    likes: "10 likes",
    postTime: "5 hours ago",
    profileImg: "images/user.jpg",
    mainImg: "images/bg.jpg",
    profileImg: "images/logo.jpg",
  },
];
let str = "";
for (let i = 0; i < arr.length; i++) {
  const obj = arr[i];

  const html = `
    <div class="card">
      <div class="top">
        <div class="user-details">
          <div class="profile-img">
            <img src="${obj.profileImg}" alt="logo" class="cover" />
          </div>
          <span class="name"> ${obj.name} </span>
          <span class="place">${obj.place}</span>
        </div>
        <i class="fas fa-ellipsis-v" class="dot"></i>
      </div>
      <!-- main image section -->
      <div class="main-img">
        <img src="${obj.mainImg}" class="cover" />
      </div>
      <!-- buttons -->
      <div class="btn">
        <div class="left">
          <i id="heart" class="far fa-heart"></i>
          <i class="far fa-comment"></i>
          <i class="far fa-paper-plane"></i>
        </div>
        <div class="right">
          <i class="far fa-bookmark"></i>
        </div>
      </div>
      <span id="likes" class="likes">${obj.likes}</span>
      <span class="message">
        <b>abhilash ranvir</b> trying to clone insagram post
      </span>
      <span class="comments">view all comments</span>
      <div class="add-comments">
        <div class="user-img">
          <img src="${obj.profileImg}" class="cover" />
        </div>
        <input type="text" class="text" placeholder="add a comment" />
      </div>
      <span class="post-time">${obj.postTime}</span>
    </div>
  `;

  str = str + html;
}

const content = document.createElement("div");
content.innerHTML = str;
document.body.appendChild(content);
