console.log("This is my CV Screen");

const data = [
    {
        name: "Soumya",
        age: 19,
        city: "Balsore",
        languages: "Java",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/med/men/75.jpg"
    },
    {
        name: "Prakash",
        age: 19,
        city: "Balsore",
        languages: "Java",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/med/men/76.jpg"
    },
    {
        name: "Patra",
        age: 19,
        city: "Balsore",
        languages: "Java",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/med/women/77.jpg"
    },
    {
        name: "Gudli",
        age: 19,
        city: "Balsore",
        languages: "Java",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/med/women/78.jpg"
    },
    {
        name: "Soumya P",
        age: 19,
        city: "Balsore",
        languages: "Java",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/med/men/79.jpg"
    }
]


function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}

const next = document.getElementById('next');
next.addEventListener('click', nextCV);


const candidates = cvIterator(data);
nextCV();

function nextCV() {
    const currCandidates = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(currCandidates!=undefined)
    {

    image.innerHTML = `<img src='${currCandidates.image}'>`;

    profile.innerHTML = `<ul type="none" font-size=23px class="list-gr">
    <li class "list-gr-item"> Name : ${currCandidates.name}</li>
    <li class "list-gr-item">${currCandidates.age} Years Old.</li>
    <li class "list-gr-item">Lives in : ${currCandidates.city}</li>
    <li class "list-gr-item">Primarily works on : ${currCandidates.languages}</li>
    <li class "list-gr-item">Uses ${currCandidates.framework} framework.</li>
    </ul>`;

    }

    else{
        alert("End of candidates applications");
        window.location.reload();
    }

}