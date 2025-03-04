document.addEventListener("DOMContentLoaded", loadSentences);
        
        function addSentence() {
            let input = document.getElementById("sentenceInput");
            let author = document.getElementById("authorSelect").value;
            let text = input.value.trim();
            if (text === "") return;
            
            let timestamp = new Date().toLocaleString();
            
            let sentenceDiv = document.createElement("div");
            sentenceDiv.className = "sentence";
            sentenceDiv.innerHTML = `<strong>${text}</strong> - <em>${author}</em><br><span class='timestamp'>${timestamp}</span> <button onclick="replyToSentence(this)">Odpovědět</button> <button class='delete-btn' onclick='deleteSentence(this)'>✖</button>`;
            
            document.getElementById("sentenceList").appendChild(sentenceDiv);
            saveSentences();
            input.value = "";
        }
        
        function replyToSentence(button) {
            let replyText = prompt("Zadejte odpověď:");
            if (!replyText) return;
            
            let timestamp = new Date().toLocaleString();
            
            let replyDiv = document.createElement("div");
            replyDiv.className = "reply";
            replyDiv.innerHTML = `<strong>${replyText}</strong><br><span class='timestamp'>${timestamp}</span>`;
            
            button.parentElement.appendChild(replyDiv);
            saveSentences();
        }
        
        function deleteSentence(button) {
            button.parentElement.remove();
            saveSentences();
        }
        
        function saveSentences() {
            let sentences = [];
            document.querySelectorAll(".sentence").forEach(sentenceDiv => {
                let sentenceObj = {
                    text: sentenceDiv.querySelector("strong").innerText,
                    author: sentenceDiv.querySelector("em").innerText,
                    timestamp: sentenceDiv.querySelector(".timestamp").innerText,
                    replies: []
                };
                sentenceDiv.querySelectorAll(".reply").forEach(replyDiv => {
                    sentenceObj.replies.push({ text: replyDiv.querySelector("strong").innerText, author: replyDiv.querySelector("em").innerText, timestamp: replyDiv.querySelector(".timestamp").innerText });
                });
                sentences.push(sentenceObj);
            });
            localStorage.setItem("sentences", JSON.stringify(sentences));
        }
        
        function loadSentences() {
            let sentences = JSON.parse(localStorage.getItem("sentences")) || [];
            let list = document.getElementById("sentenceList");
            sentences.forEach(sentenceObj => {
                let sentenceDiv = document.createElement("div");
                sentenceDiv.className = "sentence";
                sentenceDiv.innerHTML = `<strong>${sentenceObj.text}</strong> - <em>${sentenceObj.author}</em><br><span class='timestamp'>${sentenceObj.timestamp}</span> <button onclick="replyToSentence(this)">Odpovědět</button> <button class='delete-btn' onclick='deleteSentence(this)'>✖</button>`;
                
                sentenceObj.replies.forEach(replyObj => {
                    let replyDiv = document.createElement("div");
                    replyDiv.className = "reply";
                    replyDiv.innerHTML = `<strong>${replyObj.text}</strong> - <em>${replyObj.author}</em><br><span class='timestamp'>${replyObj.timestamp}</span>`;
                    sentenceDiv.appendChild(replyDiv);
                });
                
                list.appendChild(sentenceDiv);
            });
        }
