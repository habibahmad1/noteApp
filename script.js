const buku = document.querySelector(".bukuTulis");
const containerModal = document.querySelector(".container-modal");

for (let i = 1; i < 10; i++) {
  const hr = document.createElement("hr");
  buku.appendChild(hr);
}

document.querySelector(".cancel").addEventListener("click", () => {
  containerModal.style.display = "none";
});

document.querySelector(".add").addEventListener("click", () => {
  containerModal.style.display = "flex";
});

// Add data

// Bersihkan Catatan
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  const isiNote = document.querySelectorAll(".isiNote");
  isiNote.forEach((list) => {
    list.remove();
  });
});

let i = 0;
function tambahData() {
  const inputData = document.querySelector("#nama");
  const nilaiInput = inputData.value.trim();

  if (nilaiInput !== "") {
    const li = document.createElement("li");
    li.className = "isiNote";
    li.textContent = nilaiInput;
    li.style.borderBottom = "1px solid grey";
    if (i % 2 == 0) {
      li.style.backgroundColor = "#bde0fe";
    } else {
      li.style.backgroundColor = "#a2d2ff";
    }
    i++;

    const delBtn = document.createElement("div");
    const hr = document.querySelector("hr");
    delBtn.className = "delete";
    delBtn.textContent = "❌";
    delBtn.onclick = function () {
      li.remove();
    };

    // menambahkan btn ke list
    li.appendChild(delBtn);
    // menambahkan list ke note
    hr.appendChild(li);
    // mengosongkan setelah di tambahkan
    inputData.value = "";
  }
}
