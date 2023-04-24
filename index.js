const url = "https://api.github.com/users";
const searchinput = document.getElementById("searchinput")
const searchbtn = document.getElementById("searchbtn")
const profilecontainer = document.getElementById("profilecontainer")
const loading = document.getElementById("loading")
const generateprofile = (profile) => {
    return `<div class="profile-box animate__animated animate__flipInX">
        <div class="top-section">
            <div class="left">
                <div class="avatar">
                    <img src="${profile.avatar_url}" alt="avatar">
                </div>
                <div class="self">
                    <h1>${profile.name}</h1>
                    <h1>@${profile.login}</h1>
                </div>
            </div>
            <a href="${profile.html_url}">
            <button class="primary-btn">Check Profile</button></a>
        </div>
        <div class="about">
            <h2>About</h2>
            <p>${profile.bio}</p>
        </div>
        <div class="status">
            <div class="status-icon">
                <h3>Followers</h3>
                <p>${profile.followers}</p>
            </div>
            <div class="status-icon">
                <h3>Following</h3>
                <p>${profile.following}</p>
            </div>
            <div class="status-icon">
                <h3>Repos</h3>
                <p>${profile.public_repos}</p>
            </div>
        </div>
        </div>`;
};
const fetch_profile = async () => {
    const username = searchinput.value;
    // loading.innerHTML = "Loading....."
    // loading.style.color = "green"
    // loading.style.fontSize = "2rem"
    // loading.style.textAlign = "center"

    try {
        const res = await fetch(`${url}/${username}`)
        const data = await res.json()
        if (data.login) {
            loading.innerHTML = ""
            profilecontainer.innerHTML = generateprofile(data);
        }
        else {
            loading.innerHTML = data.message
            loading.style.color = "red"
            profilecontainer.innerText = ""
        }
        console.log(data);
    }
    catch (error) {
        console.log({ error });
        loading.innertext = ""
    }
};

searchbtn.addEventListener("click", fetch_profile);