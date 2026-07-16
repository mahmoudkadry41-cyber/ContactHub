
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
var currentindex
var Favoritecount;
var Emergencycount;

// ---------------------------------------------------------------Functions----------------------------------------------------------------



addBtn.onclick = createContact;

if(localStorage.getItem('list') !==null){
    contactList =JSON.parse(localStorage.getItem('list'))
    display()
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

    if ((addBtn.innerText == "Update Contact")) {
        contactList.splice(currentindex,1,contactInfo)
        addBtn.innerText = "+ Add Contact";
    } else {
      contactList.push(contactInfo);
    }

  localStorage.setItem('list',JSON.stringify(contactList))
  clearform()
  display();
}

function setupdateContact(index) {
    currentindex = index
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
  for ( var i = 0; i < contactList.length; i++) {

if (contactList[i].Favorite === true) {
  favbox += `
<div class="rounded-3 d-flex justify-content-start align-items-start gap-2 p-3 w-100">
                                    <div class="rightsidecard d-flex justify-content-start align-items-center mb-2 ">
                                        <div class="favorateicon rounded-2 d-flex justify-content-center align-items-center">
                                            <i class="fa-solid fa-users" style="color: rgb(255, 255, 255);"></i>
                                        </div>
                                    </div>
                                    <div class="leftsidecard d-flex justify-content-between align-items-center flex gap-2 w-100">
                                        <div>
                                            <h5>${contactList[i].Name}</h5>
                                            <div class="d-flex justify-content-start align-items-center gap-2">
                                                <span>${contactList[i].PhoneNumber}</span>
                                            </div>
                                        </div>
                                        <div class="callicon rounded-2 d-flex justify-content-center align-items-center">
                                            <i class="fa-solid fa-phone" style="color: #009966;"></i>
                                        </div>
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
                                            <i class="fa-solid fa-users" style="color: rgb(255, 255, 255);"></i>
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
                                        <div
                                            class="callicon rounded-2 d-flex justify-content-center align-items-center">
                                            <i class="fa-solid fa-phone" style="color: #009966;"></i>
                                        </div>
                                    </div>
                                </div>
    `;
  document.getElementById("emirgcard").innerHTML = emirgbox;
}

    box += `
    <div class="col-sm-6 mb-3 mb-sm-0" >
<div class="card">
                                <div class="card-body d-flex justify-content-between align-items-start flex-column p-0">
                                    <div class="rounded-3 d-flex justify-content-start align-items-start gap-2 p-2">
                                        <div
                                            class="rightsidecard d-flex justify-content-start align-items-center mb-2 ">
                                            <div
                                                class="contacticon rounded-2 d-flex justify-content-center align-items-center">
                                                <i class="fa-solid fa-users" style="color: rgb(255, 255, 255);"></i>
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
                                    <div
                                        class="botcard w-100 bg-light d-flex justify-content-between align-items-center">
                                        <div class="w-50">
                                            <div
                                                class="botrtsd  ps-2 d-flex justify-content-start align-items-center gap-2">
                                                <div
                                                    class="callicon rounded-2 d-flex justify-content-center align-items-center">
                                                    <i class="fa-solid fa-phone" style="color: #009966;"></i>
                                                </div>
                                                <div
                                                    class="emailicon rounded-2 d-flex justify-content-center align-items-center">
                                                    <i class="fa-solid fa-envelope" style="color: #7F22FE;"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-50">
                                            <div
                                                class="botrtsd  ps-2 d-flex justify-content-end align-items-center gap-2 pe-2">
                                                <div
                                                    class="favicon rounded-2 d-flex justify-content-center align-items-center">
                                                    <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
                                                </div>
                                                <div
                                                    class="hearticon rounded-2 d-flex justify-content-center align-items-center">
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
};
if (contactList[i].Emergency == true) {
  Emergencycount++;
};
document.getElementById("totalcontacts").innerText = contactList.length;
document.getElementById("favoritscount").innerText = Favoritecount;
document.getElementById("emerncycount").innerText = Emergencycount;
  }
  document.getElementById("contactlist").innerHTML = box;


}




function deletecontact (index){
contactList.splice(index,1)
localStorage.setItem("list", JSON.stringify(contactList));
display()
}

function clearform(){
    Name.value =''
    PhoneNumber.value =''
    EmailAddress.value =''
    Address.value =''
    Group.value =''
    Notes.value =''
    Favorite.checked =''
    Emergency.checked =''
    
}

var searchInput = document.getElementById(`search`);
searchInput.oninput = contactSearch
function contactSearch(){
  var box = ``;
  for (var i = 0; i < contactList.length; i++) {


    if (
      contactList[i].Name.toLowerCase().includes(
        searchInput.value.toLowerCase(),
      )
    ) {
      box += `
    <div class="col-sm-6 mb-3 mb-sm-0" >
<div class="card">
                                <div class="card-body d-flex justify-content-between align-items-start flex-column p-0">
                                    <div class="rounded-3 d-flex justify-content-start align-items-start gap-2 p-2">
                                        <div
                                            class="rightsidecard d-flex justify-content-start align-items-center mb-2 ">
                                            <div
                                                class="contacticon rounded-2 d-flex justify-content-center align-items-center">
                                                <i class="fa-solid fa-users" style="color: rgb(255, 255, 255);"></i>
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
                                    <div
                                        class="botcard w-100 bg-light d-flex justify-content-between align-items-center">
                                        <div class="w-50">
                                            <div
                                                class="botrtsd  ps-2 d-flex justify-content-start align-items-center gap-2">
                                                <div
                                                    class="callicon rounded-2 d-flex justify-content-center align-items-center">
                                                    <i class="fa-solid fa-phone" style="color: #009966;"></i>
                                                </div>
                                                <div
                                                    class="emailicon rounded-2 d-flex justify-content-center align-items-center">
                                                    <i class="fa-solid fa-envelope" style="color: #7F22FE;"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-50">
                                            <div
                                                class="botrtsd  ps-2 d-flex justify-content-end align-items-center gap-2 pe-2">
                                                <div
                                                    class="favicon rounded-2 d-flex justify-content-center align-items-center">
                                                    <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
                                                </div>
                                                <div
                                                    class="hearticon rounded-2 d-flex justify-content-center align-items-center">
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

PhoneNumber.oninput = PhoneNumberValidation
function PhoneNumberValidation(){
var regex = /^\+201[0125][0-9]{8}$/;
if(regex.test(PhoneNumber.value) == true){
  PhoneNumber.classList.add("is-valid");
  PhoneNumber.classList.remove("is-invalid");
}else{
    PhoneNumber.classList.add("is-invalid");
    PhoneNumber.classList.remove("is-valid");
}
}


