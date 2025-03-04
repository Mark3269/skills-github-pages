<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vkládání vět a odpovědí</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; color: white; background-color: #000000; }
        .container { max-width: 600px; margin: auto; background: rgb(62, 62, 62); padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        h2, h3 { text-align: center; }
        input, select { width: calc(100% - 22px); padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px; }
        button { padding: 10px 15px; border: none; background: #28a745; color: white; cursor: pointer; border-radius: 5px; }
        button:hover { background: #218838; }
        .sentence { margin: 10px 0; padding: 10px; border: 1px solid #ccc; border-radius: 5px; background: #696969; position: relative; }
        .reply { margin-left: 20px; padding: 5px; border-left: 2px solid #888; background: #696969; padding: 5px; border-radius: 5px; }
        .timestamp { font-size: 0.8em; color: #000000; margin-top: 5px; }
        .delete-btn { position: absolute; top: 5px; right: 5px; background: red; color: white; border: none; border-radius: 5px; padding: 5px; cursor: pointer; }
        .delete-btn:hover { background: darkred; }
        .input-container {display: flex; align-items: center; gap: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Co tě dnes nasralo?</h2>
        <input type="text" id="sentenceInput" placeholder="Zadejte větu">
        <div class="input-container">
            <p style="font-size: 15px; padding-bottom: 5px;"    id="authorText">Nasraný:</p>
            <select id="authorSelect" style="display: inline-block;">
                <option value="Marek">Marek</option>
                <option value="Martin">Martin</option>
                <option value="Kateřina">Kateřina</option>
             </select>
        </div>
        <button onclick="addSentence()">Přidat</button>
        <h3>Seznam sraček</h3>
        <div id="sentenceList"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
