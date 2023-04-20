// const data = [
//   {
//     title: "module 1 text",
//     src: "https://template67967.motopreview.com/mt-demo/67900/67967/mt-content/uploads/2018/06/mt-1509-home-graph.png",
//     category: "module 1",
//   },

//   {
//     title: "module 2 text",
//     src: "https://template67967.motopreview.com/mt-demo/67900/67967/mt-content/uploads/2018/06/mt-1509-home-graph.png",
//     category: "module 2",
//   },

//   {
//     title: "module 3 text",
//     src: "https://template67967.motopreview.com/mt-demo/67900/67967/mt-content/uploads/2018/06/mt-1509-home-graph.png",
//     category: "module 3",
//   },
// ];

// let timelineButtons = document.getElementById("timeline-buttons");
// let items = document.getElementById("timeline-text-items");

// let categories = [];
// for (let item of data) {
//   categories.push(item.category);
// }

// categories = [...new Set(categories)];

// let output = `<button onclick="filterItems('module 1')">module 1</button>`;
// for (let category of categories) {
//   output += `<button onclick="filterItems('${category}')">${category}</button>`;
// }

// timelineButtons.innerHTML = output;

// let outputItems = ``;
// for (let item of data) {
//   outputItems += `
//   <div class='timeline-paragraph'>
//       <img src="${item.src}"/>
//       <h1>${item.title}</h1>
//       <p>${item.category}</p>
//       </div>
//   `;
// }

// items.innerHTML = outputItems;

// function filterItems(categ) {
//   let outputFilter = ``;
//   for (let item of data) {
//     if (item.category == categ) {
//       outputFilter += `
//       <div class="timeline-paragraph">
//       <img src="${item.src}"/>
//       <h1>${item.title}</h1>
//       <p>${item.category}</p>
//       </div>
//       `;
//     }
//   }

//   items.innerHTML = outputFilter;
// }

let blogs = [
  {
    title:
      " The company was incorporated on 24th February, and the certificate of commencement of business was obtained on 21stMarch. The company was engaged in the manufacture of Bi-axially oriented polypropylene (BOPP) films.",
    desc: "The company was promoted in joint sector by Max India Ltd., Ranbaxy Laboratories Ltd., Montari Industries Ltd. and Punjab State Industrial Development Corporation Ltd. The Company undertook to set up a project for the manufactuof 2,000 tonnes per annum of BOPP film.",
    img: "https://template67967.motopreview.com/mt-demo/67900/67967/mt-content/uploads/2018/06/mt-1509-home-graph.png",
    category: "module 1",
  },

  {
    title:
      "Following amalgamation, the Company organised its business and designated them under four groups as follows: Max Pharma, Max Electronics, Maxxon BOPP Films, Max Telecom.",
    desc: "The Max-GB Ltd. is a 50:50 joint venture formed with Gist-Brocades International BV of the Netherlands. It manufactures and markets Penicillin based drug intermediates (6-APA and 7-ADCA) and bulk drugs (Ampicillin, Amoxycillin and Cephalexin).",
    img: "https://template67967.motopreview.com/mt-demo/67900/67967/mt-content/uploads/2018/06/mt-1509-home-graph.png",
    category: "module 2",
  },

  {
    title:
      "During January, the Company issued 14,50,000-12% secured convertible debentures of Rs 100 each as follows: (i) 2,90,000 debentures to the resident and non-resident shareholders of the promoter companies (all were taken up). (ii) 72,500 debentures to employees (only 4,950 debentures taken up).",
    desc: "The remaining 10,87,500 debentures, along with 67,550 debentures not taken by employees, were offered to the public. All were taken up. Part-A of Rs 20 of each debenture was to be converted into 2 equity shares of Rs 10 each at par upon allotment of debentures.",
    img: "https://template67967.motopreview.com/mt-demo/67900/67967/mt-content/uploads/2018/06/mt-1509-home-graph.png",
    category: "module 3",
  },
];

let cats = blogs.map((item) => item.category);
let uniqueCatsSet = new Set(cats);
let uniqueCatsArray = [...uniqueCatsSet];

let catsHTML = ``;

uniqueCatsArray.forEach((item) => {
  catsHTML += `<div onclick='filter("${item}")'>` + item + "</div>";
});

document.getElementById("cats").innerHTML = catsHTML;

function showBlogs(arr) {
  let blogsHTML = "";

  arr.forEach((item) => {
    blogsHTML += `<div class="blog-item">
        <img src="${item.img}" alt="">
        <div>
        <p>${item.title}<p>
        <br>
        <p>${item.desc}<p>
        <div>

    </div>`;
  });

  document.getElementById("blogs").innerHTML = blogsHTML;
}

showBlogs([blogs[0]]);

function filter(cat) {
  let filteredArr = blogs.filter((item) => item.category === cat);
  showBlogs(filteredArr);
}
