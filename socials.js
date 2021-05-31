fetch('/socials.json').then(function (res){
  return res.json()
}).then(function (json) {
  
  document.getElementById("Git").href = 'https://github.com/' + json.GitHub
  document.getElementById("Insta").href = 'https://instagram.com/' + json.Instagram
  document.getElementById("Instalt").href = 'https://instagram.com/' + json.Instagramalt
  document.getElementById("Dis").href = 'https://discord.gg/' + json.Discord
  document.getElementById("Mail").href = 'mailto:' + json.Email
  document.getElementById("Twit").href = 'https://twitter.com/' + json.Twitter
})