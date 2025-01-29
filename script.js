async function search_profile(){
    const username = document.getElementById('search').value
    try{
    response = await fetch(`https://api.github.com/users/${username}`)

    if(!response.ok){
        throw new Error("Erro occured while fetching");
        
    }
    data =  await response.json()
    display_data(data)
    }
    catch(err){
        console.log(`${err}`);
        
    }
}

function display_data(data){

    const profile_cont = document.getElementById('profile')
    profile_cont.innerHTML = `<h1>${data.login}</h1> <br>
    <img src="${data.avatar_url} " style="width:100px; height:100px; border-radius:50%;"/><br>
    <a href = ${data.html_url} target="blank">
    <button>Visit the profile</button><br>
    </a><br>
    <p>Follower : ${data.followers}</p><br>
    <p>Following : ${data.following}</p><br>
    <p>Public Reposeitory : ${data.public_repos}</p>` 
}
