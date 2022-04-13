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
