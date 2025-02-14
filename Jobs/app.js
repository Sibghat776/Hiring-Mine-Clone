let card = document.querySelector(".myCard")
async function jobs() {
    let jobCatogry = await fetch("https://hiringmine-railway-production.up.railway.app/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false")
    let jobcatogryJSON = await jobCatogry.json()
    console.log(jobcatogryJSON.data)
    let { data } = jobcatogryJSON
    data.map(function (job) {
        console.log(job)
        card.innerHTML += `<div class="card text-bg-primary m-3" style="max-width: 18rem !important;">
  <div class="card-header">${job?.companyName || "Company Name not Available"}</div>
  <div class="card-body">
    <h5 class="card-title bg-dark p-3">${job?.category?.name}</h5>
    <p class="card-text">${job?.category?.description}</p>
  </div>
</div>`
    })
}
jobs()