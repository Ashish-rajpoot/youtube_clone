import { dataList } from "./data.js";

let data = dataList;

document.getElementById("search").addEventListener("input", callMethod);

function callMethod() {
    const element = document.getElementById("search");
    const searchValue = element.value.toLowerCase();
    data = [];
    if(searchValue!==null || searchValue!==""){
        dataList.filter((ele) => {
            if(ele.description.toLowerCase().includes(searchValue)){
                data.push(ele);
            }
            ;
        });
    }
    
    addData(data);
}

function addData(data) {
    let card = "";
    let cardResult = [];
    
    data.forEach((elelment) => {
        card += `
        <div class="card">
        <a  href="${elelment.officialLink}">
        <div class="template-img">
        <img
        src="${elelment.templateImageUrl}"
        alt="img-template"
        class="img"
        />
        <div class="duration">${elelment.videoDuration}</div>
        </div>
        </a>
        <div class="grid-two">
        <div class="profile-img">
        <a  href="${elelment.channelLink}">
        <img
        src="${elelment.profileImageUrl}"
        alt="img"
        />
        </a>
        </div>
        <div class="content-info">
        <a href="${elelment.officialLink}">
        <div class="video-description">
        ${elelment.description}
        </div>
        </a>
        <a  href="${elelment.channelLink}">
        <div class="channal-name">
        ${elelment.channelName}`;
        
        if (elelment.isVerified) {
            card += `
            <!--<div class="verified">-->
            <img class="verified" src="./icons/icons8-verified-128.png" alt="verified" />
            <!-- </div>-->
            `;
        }
        
        card += ` 
        </div>
        </a>
        <a href="${elelment.officialLink}">
        <div class="detaile-info">
        <div class="views">${elelment.views} views . ${elelment.postedTime} weeks ago</div>
        </div>
        </a>
        </div>
        
        </div>
        </div>
        `;
        cardResult.push(card);
    });
    // console.log(cardResult)
    
    const section = document.getElementById("section");
    if(data.length>0){  
        cardResult.forEach((element) => {
            section.innerHTML = element;
        });
    }else{
        section.innerHTML="No Data Found";
        console.log("no Data found")
    }
}

// addData();

addData(data);