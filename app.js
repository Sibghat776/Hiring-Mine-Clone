// async function catogries() {
//     let catogries = await fetch("https://backend-prod.app.hiringmine.com/api/categories/all")
//     let catogriesJSON = await catogries.json()
//     console.log(catogriesJSON)
//     catogriesJSON.data.map((catogry) => {
//         console.log(catogry)
//     })
// }
let topProfiles = document.querySelector(".topProfiles")
let userName = document.querySelector("#userName")
let pasion = document.querySelector("#pasion")
let profilePic = document.querySelector("#profilePic")
async function catogries() {
    try {
        let catogries = await fetch("https://hiringmine-railway-production.up.railway.app/api/users/home?sortBy=mostViewed")
        let catogriesJSON = await catogries.json()
        console.log(catogriesJSON)
        let { data } = catogriesJSON
        console.log(data)
        data.map(function (profile) {
            console.log(profile)
            let { userName, jobTitle, profilePic } = profile
            let spaceIndex = jobTitle.indexOf(" ")
            let modifiedJobTitle = spaceIndex !== -1 ? jobTitle.slice(0, spaceIndex) : jobTitle;
            topProfiles.innerHTML += `
        <div class="profile">
            <div class="pImg"><img src="${profilePic}" alt=""></div>
            <div class="names">
                <h2 class="userName">${userName.split("").slice(0, 1).join("").toUpperCase() + userName.slice(1)}</h2>
                <p class="Pasion">${modifiedJobTitle}</p>
                <p class="profilePic">View Profile -></p>
            </div>
            <div class="pLogo"><img src="./Assests/logo.png" alt=""></div>
        </div>`
        })
    } catch (error) {
        alert("Bhai Jan YE error Agaya ha ==> " + error)
    }
}
catogries()
