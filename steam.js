fetch(`https://steamcommunity.com/id/${process.argv[2]}/`)
.then(res => res.text())
.then(data => {
    const text = JSON.stringify(data)
    const userData = text.match(/(?<=g_rgProfileData =)(.*?)(?=;)/g)[0].replace(/\\/gm, "");
    
    console.log(JSON.parse(userData).steamid)
})