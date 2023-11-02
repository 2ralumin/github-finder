const github = new Github;
const ui = new UI;

const searchInput = document.querySelector("#searchInput");

//검색
searchInput.addEventListener("keypress", (e) => {
  const userText = e.target.value;

  //console.log(userText);
  if(e.key=="Enter"){
    if(userText !== ''){
  
      github.getUser(userText)
       .then(data => {
         if(data.profile.message === 'Not Found') {
          console.log('Not Found');
         } else {
           // Show profile
           ui.showProfile(data.profile);
           ui.showRepos(data.repos);
         }
       })
     } else {
       ui.clearProfile();
     }
  }
});



