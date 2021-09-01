const twitterObj = [
  {
    name: "abhilash ranvir",
    username: "@abhi ranvir",
    img:
      "https://pbs.twimg.com/profile_images/881903279461941248/-v3IroHp_normal.jpg",
    date: "Aug 25",
  },
  {
    name: "shad",
    username: "@shad",
    img:
      "https://pbs.twimg.com/profile_images/881903279461941248/-v3IroHp_normal.jpg",
    date: "Aug 27",
  },
  {
    name: "priya ",
    username: "@priya",
    img:
      "https://pbs.twimg.com/profile_images/881903279461941248/-v3IroHp_normal.jpg",
    date: "Aug 28",
  },
];

let str = "";
for (let i = 0; i < twitterObj.length; i++) {
  const obj = twitterObj[i];

  const html = `        
<div class="tweet-wrap">
    <div class="tweet-avator">
        <img src=${obj.img} alt="avator" class="avator">
    </div>

    <div class="tweet-header-info">
            <div class="tweet-header">
                <div class="tweet-user-info"> 
                    <span>${obj.name}</span>
                    <span>${obj.username}</span>
                    <span>. ${obj.date}</span>
                </div>
                
                <i class="fas fa-ellipsis-h"></i>

            </div>
            
            
            <div class="tweet">
                <p> I am trying to clone twitter post</p>
            </div>
                
            

            <div class="tweet-icons">
                <i class="far fa-comment"><span class="spacing">12</span></i>
                <i class="fas fa-retweet"><span class="spacing">12</span></i>
                <i class="far fa-heart"><span class="spacing">12</span></i>
                <i class="fas fa-upload"><span class="spacing">12</span></i>
            </div>
        </div>
    </div>
</div>   
`;

  str = str + html;
}
const content = document.createElement("div");
content.innerHTML = str;
document.body.appendChild(content);
