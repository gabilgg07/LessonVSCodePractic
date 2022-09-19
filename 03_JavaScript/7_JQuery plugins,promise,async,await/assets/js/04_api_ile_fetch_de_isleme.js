"use strict";

$("#search").submit(searchUser);

async function searchUser(e) {
  e.preventDefault();

  if ($("#search_user").val().trim() === "") {
    return;
  }

  const result = await fetch(
    `https://api.github.com/users/${$("#search_user").val()}`
  );
  const data = await result.json();

  //   console.log(data);

  const createDate = new Date(data.created_at);

  const card = `<div class="card" style="width: 18rem">
<img src="${data.avatar_url}" class="card-img-top" alt="user-${data.login}" />
<div class="card-body">
  <h5 class="card-title">${data.name}</h5>
  <p class="card-text">
  ${createDate.getDate()} ${
    monthsAZ[createDate.getMonth()]
  } ${createDate.getFullYear()} - ${weekDaysAZ[createDate.getDay()]}
  </p>
  <a href="${
    data.html_url
  }" target="_blank" class="btn btn-primary w-100">Go Profil</a>
</div>
</div>`;

  $(".content").html(card);
}

fetch("https://api.github.com/users")
  .then(res => res.json())
  .then(json => {
    json.forEach(us => {
      let user = `<div class="card mb-2" style="width: 18rem">
        <img src="${us.avatar_url}" class="card-img-top" alt="user-${us.login}" />
        <div class="card-body">
          <h5 class="card-title">${us.login}</h5>
          <a href="${us.html_url}" target="_blank" class="btn btn-primary w-100">Go Profil</a>
        </div>
        </div>`;

      $(".content-users").append(user);
    });
  });

const codersUrl = "https://json-fake-api.herokuapp.com/coders";
const countriesUrl = "https://restcountries.com/v3.1/all";
