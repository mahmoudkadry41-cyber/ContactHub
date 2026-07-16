// ---------------------------------------------------------------Variables----------------------------------------------------------------
var Name = document.getElementById(`exampleFormControlInput1`);
var PhoneNumber = document.getElementById(`exampleFormControlInput2`);
var EmailAddress = document.getElementById(`exampleFormControlInput3`);
var Address = document.getElementById(`exampleFormControlInput4`);
var Group = document.getElementById(`exampleDataList`);
var Notes = document.getElementById(`exampleFormControlTextarea1`);
var Favorite = document.getElementById(`checkDefault1`);
var Emergency = document.getElementById(`checkDefault2`);
var Picture = document.getElementById(``);
var addBtn = document.getElementById("addBtn");
var contactList = [];
var currentindex;
var Favoritecount;
var Emergencycount;
var gradientsList = [
  "linear-gradient(135deg, #FF6B6B, #FF8E53)",
  "linear-gradient(135deg, #4E65FF, #92EFFD)",
  "linear-gradient(135deg, #7F22FE, #A765FF)",
  "linear-gradient(135deg, #11998e, #38ef7d)",
  "linear-gradient(135deg, #ff9966, #ff5e62)",
  "linear-gradient(135deg, #f857a6, #ff5858)",
  "linear-gradient(135deg, #00c6ff, #0072ff)",
  "linear-gradient(135deg, #eb3349, #f45c43)",
  "linear-gradient(135deg, #2193b0, #6dd5ed)",
  "linear-gradient(135deg, #e65c00, #F9D423)",
  "linear-gradient(135deg, #1e3c72, #2a5298)",
  "linear-gradient(135deg, #8A2387, #E94057)",
  "linear-gradient(135deg, #02aab0, #00cdac)",
  "linear-gradient(135deg, #da22ff, #9733ee)",
  "linear-gradient(135deg, #4facfe, #00f2fe)",
  "linear-gradient(135deg, #ff0844, #ffb199)",
  "linear-gradient(135deg, #f12711, #f5af19)",
  "linear-gradient(135deg, #b92b27, #1565c0)",
  "linear-gradient(135deg, #3a7bd5, #3a6073)",
  "linear-gradient(135deg, #654ea3, #eaafc8)",
  "linear-gradient(135deg, #f12711, #f5af19)",
  "linear-gradient(135deg, #007991, #78ffd6)",
  "linear-gradient(135deg, #0851c7, #a410d4)",
  "linear-gradient(135deg, #f000ff, #7b00ff)",
  "linear-gradient(135deg, #eecda3, #ef629f)",
  "linear-gradient(135deg, #021b79, #0575e6)",
  "linear-gradient(135deg, #134e5e, #71b280)",
  "linear-gradient(135deg, #833ab4, #fd1d1d)",
  "linear-gradient(135deg, #fcb045, #fd1d1d)",
  "linear-gradient(135deg, #00b4db, #0083b0)",
  "linear-gradient(135deg, #16a085, #f4d03f)",
  "linear-gradient(135deg, #8e44ad, #3498db)",
  "linear-gradient(135deg, #f39c12, #d35400)",
  "linear-gradient(135deg, #a1887f, #8d6e63)",
  "linear-gradient(135deg, #373b44, #4286f4)",
  "linear-gradient(135deg, #ff7e5f, #feb47b)",
  "linear-gradient(135deg, #00c6ff, #0072ff)",
  "linear-gradient(135deg, #f5576c, #f093fb)",
  "linear-gradient(135deg, #2af598, #009efd)",
  "linear-gradient(135deg, #ff9a9e, #fecfef)",
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #12c2e9, #c471ed)",
  "linear-gradient(135deg, #f12711, #c471ed)",
  "linear-gradient(135deg, #ff416c, #ff4b2b)",
  "linear-gradient(135deg, #06beb6, #48b1bf)",
  "linear-gradient(135deg, #2c3e50, #bdc3c7)",
  "linear-gradient(135deg, #ea2027, #ee5a24)",
  "linear-gradient(135deg, #0652dd, #1289a7)",
  "linear-gradient(135deg, #9980fa, #d980fa)",
  "linear-gradient(135deg, #833ab4, #fcb045)",
];
// ---------------------------------------------------------------Functions----------------------------------------------------------------

addBtn.onclick = createContact;

function setrandumcolor(){
    var random = Math.floor(Math.random()*gradientsList.length);
    return gradientsList[random]
}

if (localStorage.getItem("list") !== null) {
  contactList = JSON.parse(localStorage.getItem("list"));
  display();
}

function createContact() {
  var contactInfo = {
    Name: Name.value,
    PhoneNumber: PhoneNumber.value,
    EmailAddress: EmailAddress.value,
    Address: Address.value,
    Group: Group.value,
    Notes: Notes.value,
    Favorite: Favorite.checked,
    Emergency: Emergency.checked,
    Picture: ``,
  };

  if (addBtn.innerText == "Update Contact") {
    contactList.splice(currentindex, 1, contactInfo);
    addBtn.innerText = "+ Add Contact";
  } else {
    contactList.push(contactInfo);
  }

  localStorage.setItem("list", JSON.stringify(contactList));
  clearform();
  display();
}

function setupdateContact(index) {
  currentindex = index;
  Name.value = contactList[index].Name;
  PhoneNumber.value = contactList[index].PhoneNumber;
  EmailAddress.value = contactList[index].EmailAddress;
  Address.value = contactList[index].Address;
  Group.value = contactList[index].Group;
  Notes.value = contactList[index].Notes;
  Favorite.checked = contactList[index].Favorite;
  Emergency.checked = contactList[index].Emergency;

  addBtn.innerText = "Update Contact";
}

function display() {
  var box = ``;
  var favbox = ``;
  var emirgbox = ``;
  var Favoritecount = 0;
  var Emergencycount = 0;
  document.getElementById("favoritcard").innerHTML = "";
  document.getElementById("emirgcard").innerHTML = "";
  for (var i = 0; i < contactList.length; i++) {
            var firstLetter = contactList[i].Name
              ? contactList[i].Name.charAt(0).toUpperCase()
              : "";
    if (contactList[i].Favorite === true) {
      favbox += `
<div class="rounded-3 d-flex justify-content-start align-items-start gap-2 p-3 w-100">
                                    <div class="rightsidecard d-flex justify-content-start align-items-center mb-2 ">
                                        <div class="favorateicon rounded-2 d-flex justify-content-center align-items-center">
                                            <span class="fw-bold text-white fs-4" style="user-select: none;">${firstLetter}</span>
                                        </div>
                                    </div>
                                    <div class="leftsidecard d-flex justify-content-between align-items-center flex gap-2 w-100">
                                        <div>
                                            <h5>${contactList[i].Name}</h5>
                                            <div class="d-flex justify-content-start align-items-center gap-2">
                                                <span>${contactList[i].PhoneNumber}</span>
                                            </div>
                                        </div>
<a href="tel:${contactList[i].PhoneNumber}" class="text-decoration-none">
    <div class="callicon rounded-2 d-flex justify-content-center align-items-center" style="cursor: pointer;">
        <i class="fa-solid fa-phone" style="color: #009966;"></i>
    </div>
</a>
                                    </div>
                                </div>
    `;
      document.getElementById("favoritcard").innerHTML = favbox;
    }
    if (contactList[i].Emergency === true) {
      emirgbox += `
<div class="rounded-3 d-flex justify-content-start align-items-start gap-2 p-3 w-100">
                                    <div class="rightsidecard d-flex justify-content-start align-items-center mb-2 ">
                                        <div
                                            class="favorateicon rounded-2 d-flex justify-content-center align-items-center">
                                            <span class="fw-bold text-white fs-4" style="user-select: none;">${firstLetter}</span>
                                        </div>
                                    </div>
                                    <div
                                        class="leftsidecard d-flex justify-content-between align-items-center flex gap-2 w-100">
                                        <div>
                                            <h5>${contactList[i].Name}</h5>
                                            <div class="d-flex justify-content-start align-items-center gap-2">
                                                <span>${contactList[i].PhoneNumber}</span>
                                            </div>
                                        </div>
<a href="tel:${contactList[i].PhoneNumber}" class="text-decoration-none">
    <div class="callicon rounded-2 d-flex justify-content-center align-items-center" style="cursor: pointer;">
        <i class="fa-solid fa-phone" style="color: #009966;"></i>
    </div>
</a>
                                    </div>
                                </div>
    `;
      document.getElementById("emirgcard").innerHTML = emirgbox;
    }

    box += `
    <div class="col-12 col-lg-6 mb-3 mb-sm-0" >
<div class="card">
                                <div class="card-body d-flex justify-content-between align-items-start flex-column p-0">
                                    <div class="rounded-3 d-flex justify-content-start align-items-start gap-2 p-2">
                                        <div
                                            class="rightsidecard d-flex justify-content-start align-items-center mb-2 ">
                                            <div
                                                class="contacticon rounded-2 d-flex justify-content-center align-items-center position-relative" style="background-image: ${setrandumcolor()}">
                                                    <span class="fw-bold text-white fs-4" style="user-select: none;">${firstLetter}</span>
                                                ${
                                                  contactList[i].Favorite
                                                    ? `<div class="favtag d-flex justify-content-center align-items-center">
                                                    <i class="fa-solid fa-star fa-xs" style="color: rgb(255, 255, 255);"></i>
                                                </div>`
                                                    : ``
                                                }
                                                ${
                                                  contactList[i].Emergency
                                                    ? ` <div class="emrgtag d-flex justify-content-center align-items-center">
                                                    <i class="fa-solid fa-heart-pulse fa-2xs" style="color: rgb(255, 255, 255);"></i>
                                                </div>`
                                                    : ``
                                                }
                                            </div>
                                        </div>
                                        <div
                                            class="leftsidecard d-flex justify-content-center align-items-center flex-column gap-2">
                                            <h5>${contactList[i].Name}</h5>
                                            <div class="d-flex justify-content-center align-items-center gap-2">
                                                <div
                                                    class="smalicon phoneicon d-flex justify-content-center align-items-center rounded-2">
                                                    <i class="fa-solid fa-phone fa-2xs" style="color: #155dfc;"></i>

                                                </div>
                                                <span>${contactList[i].PhoneNumber}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="email p-2">
                                        <div class="d-flex justify-content-start align-items-center gap-2">
                                            <div
                                                class="smalicon phoneicon d-flex justify-content-center align-items-center rounded-2">
                                                <i class="fa-solid fa-envelope fa-2xs" style="color: #7F22FE;"></i>
                                            </div>
                                            <span>${contactList[i].EmailAddress}</span>
                                        </div>

                                    </div>
                                    <div class="address p-2">

                                        <div class="d-flex justify-content-start align-items-center gap-2 mt-2 mb-2">
                                            <div
                                                class="smalicon phoneicon d-flex justify-content-center align-items-center rounded-2">
                                                <i class="fa-solid fa-location-dot fa-2xs" style="color: #009966;"></i>
                                            </div>
                                            <span>${contactList[i].Address}</span>
                                        </div>
                                    </div>
                                    ${
                                      contactList[i].Emergency === true
                                        ? `                                    <span class="badge text-bg-danger ms-3 pt-0 pb-0 mb-2 "><i class="fa-solid fa-heart-pulse fa-2xs" style="color: rgb(255, 255, 255);"></i>  Emergency</span>
`
                                        : ``
                                    }
                                    <div
                                        class="botcard w-100 bg-light d-flex justify-content-between align-items-center">
                                        <div class="w-50">
                                            <div
                                                class="botrtsd  ps-2 d-flex justify-content-start align-items-center gap-2">
<a href="tel:${contactList[i].PhoneNumber}" class="text-decoration-none">
    <div class="callicon rounded-2 d-flex justify-content-center align-items-center" style="cursor: pointer;">
        <i class="fa-solid fa-phone" style="color: #009966;"></i>
    </div>
</a>
<a href="mailto:${contactList[i].EmailAddress}" class="text-decoration-none">
    <div class="emailicon rounded-2 d-flex justify-content-center align-items-center" style="cursor: pointer;">
        <i class="fa-solid fa-envelope" style="color: #7F22FE;"></i>
    </div>
</a>
                                            </div>
                                        </div>
                                        <div class="w-50">
                                            <div
                                                class="botrtsd  ps-2 d-flex justify-content-end align-items-center gap-2 pe-2">
                                                <div
                                                    class="favicon rounded-2 d-flex justify-content-center align-items-center"  onclick="toggleFavorite(${i})">
                                                    <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
                                                </div>
                                                <div
                                                    class="hearticon rounded-2 d-flex justify-content-center align-items-center"  onclick="toggleEmergency(${i})">
                                                    <i class="fa-regular fa-heart"
                                                        style="color: rgba(59, 59, 58, 0.274);"></i>
                                                </div>
                                                <div
                                                     class="penicon rounded-2 d-flex justify-content-center align-items-center" onclick="setupdateContact(${i})" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">
                                                    <i class="fa-solid fa-pen" style="color: #6A7282;"></i>
                                                </div>
                                                <div
                                                    class="recycleicon rounded-2 d-flex justify-content-center align-items-center" onclick="deletecontact(${i})">
                                                    <i class="fa-solid fa-trash" style="color: #6A7282;"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
`;
    if (contactList[i].Favorite == true) {
      Favoritecount++;
    }
    if (contactList[i].Emergency == true) {
      Emergencycount++;
    }
    document.getElementById("totalcontacts").innerText = contactList.length;
    document.getElementById("favoritscount").innerText = Favoritecount;
    document.getElementById("emerncycount").innerText = Emergencycount;
  }
  document.getElementById("contactlist").innerHTML = box;
}

function deletecontact(index) {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed)
{
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
  contactList.splice(index, 1);
  localStorage.setItem("list", JSON.stringify(contactList));
  display();
}
      else if (result.dismiss === Swal.DismissReason.cancel)
        /* Read more about handling dismissals below */
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
        });
    });
}

function clearform() {
  Name.value = "";
  PhoneNumber.value = "";
  EmailAddress.value = "";
  Address.value = "";
  Group.value = "";
  Notes.value = "";
  Favorite.checked = "";
  Emergency.checked = "";
}

var searchInput = document.getElementById(`search`);
searchInput.oninput = contactSearch;
function contactSearch() {

  var box = ``;
  for (var i = 0; i < contactList.length; i++) {
    if (
      contactList[i].Name.toLowerCase().includes(
        searchInput.value.toLowerCase(),
      ) ||
      contactList[i].PhoneNumber.toLowerCase().includes(
        searchInput.value.toLowerCase(),
      ) ||
      contactList[i].EmailAddress.toLowerCase().includes(
        searchInput.value.toLowerCase(),
      )
    ) {
        var firstLetter = contactList[i].Name
          ? contactList[i].Name.charAt(0).toUpperCase()
          : "";
      box += `
    <div class="col-12 col-lg-6 mb-3 mb-sm-0" >
<div class="card">
                                <div class="card-body d-flex justify-content-between align-items-start flex-column p-0">
                                    <div class="rounded-3 d-flex justify-content-start align-items-start gap-2 p-2">
                                        <div
                                            class="rightsidecard d-flex justify-content-start align-items-center mb-2 ">
                                            <div
                                                class="contacticon rounded-2 d-flex justify-content-center align-items-center position-relative"  style="background-image: ${setrandumcolor()}">
                                                    <span class="fw-bold text-white fs-4" style="user-select: none;">${firstLetter}</span>
                                                 ${
                                                   contactList[i].Favorite
                                                     ? `<div class="favtag d-flex justify-content-center align-items-center">
                                                    <i class="fa-solid fa-star fa-xs" style="color: rgb(255, 255, 255);"></i>
                                                </div>`
                                                     : ``
                                                 }
                                                ${
                                                  contactList[i].Emergency
                                                    ? ` <div class="emrgtag d-flex justify-content-center align-items-center">
                                                    <i class="fa-solid fa-heart-pulse fa-2xs" style="color: rgb(255, 255, 255);"></i>
                                                </div>`
                                                    : ``
                                                }
                                            </div>
                                        </div>
                                        <div
                                            class="leftsidecard d-flex justify-content-center align-items-center flex-column gap-2">
                                            <h5>${contactList[i].Name}</h5>
                                            <div class="d-flex justify-content-center align-items-center gap-2">
                                                <div
                                                    class="smalicon phoneicon d-flex justify-content-center align-items-center rounded-2">
                                                    <i class="fa-solid fa-phone fa-2xs" style="color: #155dfc;"></i>

                                                </div>
                                                <span>${contactList[i].PhoneNumber}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="email p-2">
                                        <div class="d-flex justify-content-start align-items-center gap-2">
                                            <div
                                                class="smalicon phoneicon d-flex justify-content-center align-items-center rounded-2">
                                                <i class="fa-solid fa-envelope fa-2xs" style="color: #7F22FE;"></i>
                                            </div>
                                            <span>${contactList[i].EmailAddress}</span>
                                        </div>

                                    </div>
                                    <div class="address p-2">

                                        <div class="d-flex justify-content-start align-items-center gap-2 mt-2 mb-2">
                                            <div
                                                class="smalicon phoneicon d-flex justify-content-center align-items-center rounded-2">
                                                <i class="fa-solid fa-location-dot fa-2xs" style="color: #009966;"></i>
                                            </div>
                                            <span>${contactList[i].Address}</span>
                                        </div>
                                    </div>
                                                                        ${
                                                                          contactList[
                                                                            i
                                                                          ]
                                                                            .Emergency ===
                                                                          true
                                                                            ? `                                    <span class="badge text-bg-danger ms-3 pt-0 pb-0 mb-2 "><i class="fa-solid fa-heart-pulse fa-2xs" style="color: rgb(255, 255, 255);"></i>  Emergency</span>
`
                                                                            : ``
                                                                        }
                                    <div
                                        class="botcard w-100 bg-light d-flex justify-content-between align-items-center">
                                        <div class="w-50">
                                            <div
                                                class="botrtsd  ps-2 d-flex justify-content-start align-items-center gap-2">
<a href="tel:${contactList[i].PhoneNumber}" class="text-decoration-none">
    <div class="callicon rounded-2 d-flex justify-content-center align-items-center" style="cursor: pointer;">
        <i class="fa-solid fa-phone" style="color: #009966;"></i>
    </div>
</a>
<a href="mailto:${contactList[i].EmailAddress}" class="text-decoration-none">
    <div class="emailicon rounded-2 d-flex justify-content-center align-items-center" style="cursor: pointer;">
        <i class="fa-solid fa-envelope" style="color: #7F22FE;"></i>
    </div>
</a>
                                            </div>
                                        </div>
                                        <div class="w-50">
                                            <div
                                                class="botrtsd  ps-2 d-flex justify-content-end align-items-center gap-2 pe-2">
                                                <div
                                                    class="favicon rounded-2 d-flex justify-content-center align-items-center" onclick="toggleFavorite(${i})">
                                                    <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
                                                </div>
                                                <div
                                                    class="hearticon rounded-2 d-flex justify-content-center align-items-center" onclick="toggleEmergency(${i})">
                                                    <i class="fa-regular fa-heart"
                                                        style="color: rgba(59, 59, 58, 0.274);"></i>
                                                </div>
                                                <div
                                                     class="penicon rounded-2 d-flex justify-content-center align-items-center" onclick="setupdateContact(${i})" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">
                                                    <i class="fa-solid fa-pen" style="color: #6A7282;"></i>
                                                </div>
                                                <div
                                                    class="recycleicon rounded-2 d-flex justify-content-center align-items-center" onclick="deletecontact(${i})">
                                                    <i class="fa-solid fa-trash" style="color: #6A7282;"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
`;
    }
  }
  document.getElementById("contactlist").innerHTML = box;
}

PhoneNumber.oninput = PhoneNumberValidation;
function PhoneNumberValidation() {
  var regex = /^\+201[0125][0-9]{8}$/;
  if (regex.test(PhoneNumber.value) == true) {
    PhoneNumber.classList.add("is-valid");
    PhoneNumber.classList.remove("is-invalid");
  } else {
    PhoneNumber.classList.add("is-invalid");
    PhoneNumber.classList.remove("is-valid");
  }
}

function toggleFavorite(index) {
  contactList[index].Favorite = !contactList[index].Favorite;
  localStorage.setItem("list", JSON.stringify(contactList));
  display();
}
function toggleEmergency(index) {
  contactList[index].Emergency = !contactList[index].Emergency;
  localStorage.setItem("list", JSON.stringify(contactList));
  display();
}
