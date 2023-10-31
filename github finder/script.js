const searchInput = document.querySelector("#searchInput");
const viewProfileBtn = document.querySelector("#view-profile-btn");

const profileImg = document.querySelector("#profile-img");
const publicRepoInput = document.querySelector("#public-repo-input");
const publicGistsInput = document.querySelector("#public-gists-input");
const followersInput = document.querySelector("#followers-input");
const followingInput = document.querySelector("#following-input");

const companyInput = document.querySelector("#company-input");
const websiteBlogInput = document.querySelector("#website-blog-input");
const locationInput = document.querySelector("#location-input");
const memberSinceInput = document.querySelector("#member-since-input");

const repoList = document.querySelector(".repo-list");

let userGithub = "";

//검색
searchInput.addEventListener("keypress", (e) => {
  if(e.key == "Enter"){
    searchUserData(searchInput.value);
  }
})

const searchUserData = async (userName) => {

  //console.log(userName);
  try{
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    //console.log(data);
    if(data.login !== undefined){
        importProfile(data);
        importUserRepository(userName);
    }
  }catch(error){
    console.log(error);
  }
};

//프로필 불러오기
const importProfile = (userData) => {
  userGithub = userData.html_url;
  profileImg.src = userData.avatar_url;
  publicRepoInput.innerHTML = userData.public_repos;
  publicGistsInput.innerHTML = userData.public_gists;
  followersInput.innerHTML = userData.followers;
  followingInput.innerHTML = userData.following;

  companyInput.innerHTML = userData.company;
  websiteBlogInput.innerHTML = userData.blog;
  locationInput.innerHTML = userData.location;
  memberSinceInput.innerHTML = userData.created_at;

}

//버튼 누르면 깃허브로 이동
viewProfileBtn.addEventListener("click", ()=>{
  window.location.href = userGithub;
})


//레포지토리 정보 받아오기
const importUserRepository = async (userName) => {
  try{
    const response = await fetch(`https://api.github.com/users/${userName}/repos`);
		const repositories = await response.json();

    for(const item of repositories){
      createRepository(item);
    }

  }catch(error){
    console.log(error);
  }
}

//redo 생성 함수

function createRepository(item){

  const repoEl = document.createElement('div');
  repoEl.classList.add('repo');

  repoEl.innerHTML =
  `
  <div class="repo-title">${item.name}</div>
  <ul class="repo-info">
      <li class="stars">Stars: <span class="stars-count">${item.stargazers_count}</span></li>
      <li class="watchers">Watchers: <span class="watchers-count">${item.watchers_count}</span></li>
      <li class="forks">Forks: <span class="forks-count">${item.forks_count}</span></li>
  </ul>
`

repoList.append(repoEl);

}