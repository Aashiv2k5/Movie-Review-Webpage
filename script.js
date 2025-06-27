function openPopup() {
   document.getElementById('popup').style.display="block";
   document.getElementById('popup').style.visibility="visible";
   document.getElementById('popup').style.transform="translate(-50%, -50%) scale(1)";
    document.getElementById('popup').style.opacity="1";
   document.getElementById('moviename').value = "";
  document.getElementById('moviedes').value = "";
  }
function closepopup(){
    document.getElementById('popup').style.display='none';
    
  }
function addReview(){
    
    const name=document.getElementById("moviename").value.trim();
    const desc=document.getElementById("moviedes").value.trim();
    if (!name || !desc) {
    alert("Please enter both movie name and description.");
    return;
  }
  const container = document.getElementById("reviewContainer");
    const box=document.createElement("div");
    box.className = "reviewBox";
    box.innerHTML = `<h3>${name}</h3><p>${desc}</p>`;
    container.appendChild(box);
    closepopup();
  }


