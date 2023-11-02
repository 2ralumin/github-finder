class UI {
  constructor() {
    this.profile = document.querySelector('.user-profile');
  }

  showProfile(user) {
    this.profile.innerHTML =
      `
    <div class="user-profile-row">
        <div class="profile-img-view"><img id="profile-img" src="${user.avatar_url}" alt="프로필 이미지">
        <a href="${user.html_url}" id="view-profile-btn">View Profile</a>
        </div>
  
        <div class="user-profile-column">
          <ul class="user-count">
            <li id="public-repo">Public Repos: ${user.public_repos}</li>
            <li id="public-gists">Public Gists: ${user.profile_gists}</li>
            <li id="followers">Follwers: ${user.followers}</li>
            <li id="following">Following: ${user.following}</li>
          </ul>
  
          <ul class="user-info">
            <li class="user-info-li">Company: ${user.company}</li>
            <li class="user-info-li">Website/Blog: ${user.blog}</li>
            <li class="user-info-li">Location: ${user.location}</li>
            <li class="user-info-li">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>

      <div class="user-repo">
        <h2>Latest Repos</h2>
        <div class="repo-list">
        </div>
      </div>
    `;
  }

  showRepos(repos) {

    let output = '';

    repos.forEach(function (repo) {
      output +=
        `<div class="repo">
      <a href="${repo.html_url}" class="repo-title">${repo.name}</a>
      <ul class="repo-info">
          <li class="stars">Stars: ${repo.stargazers_count}</li>
          <li class="watchers">Watchers: ${repo.watchers_count}</li>
          <li class="forks">Forks: ${repo.forks_count}</li>
      </ul>
    </div>
    `;
    });

    document.querySelector('.repo-list').innerHTML = output;
  }

  clearProfile(){
    this.profile.innerHTML='';
  }
}