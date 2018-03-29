// Add Event Listener to Button
document.getElementById('button').addEventListener('click', loadUsers);

// Load Github Users
function loadUsers(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users', true);
  
  xhr.onload = function(){
    if(this.status === 200){
      let users = JSON.parse(this.responseText);
      let user = '';
      users.forEach(function(item){
        user += `
        <div class="user">
        <img src="${item.avatar_url}" width="70" height="70">
        <ul class="list">
          <li>ID: ${item.id}</li>
          <li>User Name: ${item.login}</li> 
        </ul> 
        </div>
          `       
      })
   
      document.getElementById('output').innerHTML = user;
     let members = document.querySelectorAll('.user');
      members.forEach(function(member){
        member.style.cssText = "display: flex; background: #f4f4f4; padding: 10px; margin-bottom: 10px;"
      })
      let lists = document.querySelectorAll('.list');
      
      lists.forEach(function(list){
        list.style.cssText = "list-style: none; "})

    }
  }
  xhr.send();

}