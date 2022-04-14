// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

// const uploadButtonHandler = async (event) => {
//   const response = await fetch(`/api/single`, {
//     method: 'POST',
//     body: JSON.stringify({ avatar }),
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });

//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert('Failed to upload image');
//   }

// };

// const form = document.getElementById("form");

// form.addEventListener("submit", uploadButtonHandler);


// // document
// //   .querySelector('.new-project-form')
// //   .addEventListener('submit', newFormHandler);

// // document
// //   .querySelector('.project-list')
// //   .addEventListener('click', delButtonHandler);

$(document).ready(function() {
  let imagesPreview = function(input, placeToInsertImagePreview) {
    if (input.files) {
      let filesAmount = input.files.length;
      for (i = 0; i < filesAmount; i++) {
        let reader = new FileReader();
        reader.onload = function(event) {
          $($.parseHTML("<img>"))
            .attr("src", event.target.result)
            .appendTo(placeToInsertImagePreview);
        };
        reader.readAsDataURL(input.files[i]);
      }
    }
  };
  $("#input-files").on("change", function() {
    imagesPreview(this, "div.preview-images");
  });
});

var myHeaders = new Headers();
myHeaders.append("X-ListenAPI-Key", "mollit");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://cors-du-jsm.herokuapp.com/https://listen-api-test.listennotes.com/api/v2/search?q=star wars&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&episode_count_min=-74947492&episode_count_max=-74947492&genre_ids=68,82&published_before=1580172454000&published_after=0&only_in=title,description&language=English&region=&ocid=mollit&ncid=mollit&safe_mode=0", requestOptions)
  .then(response => response.text())
  .then(data => console.log(JSON.parse(data).results[1]))
  .then(data => appendData(JSON.parse(data)))
  .catch(error => console.log('error', error));

// const para = document.createElement("p");
// para.innerHTML = '<img src="./images/image7.jpg" alt="Image 3" width="30%" height="15%" style="float: center; border-radius: 50px; padding: 25px;"/>';
// document.getElementById("displayResults").appendChild(para);

function appendData(data) {
  var mainContainer = document.getElementById("displayResults");
  for (var i = 0; i < 10; i++) {
    var div = document.createElement("p");
    para.innerHTML = `<img src="${data.results[1]}" width="30%" height="15%" style="float: center; border-radius: 50px; padding: 25px;"/>`;
    mainContainer.appendChild(div);
  }
}
