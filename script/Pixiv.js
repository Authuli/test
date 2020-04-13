let body = $response.body
body=JSON.parse(body)
body['response']['user']['is_premium']=true
body=JSON.stringify(body)
$done({body})

/*
[Script]
Pixiv.js = type=http-response,pattern=https://oauth.secure.pixiv.net/auth/token,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/shiyueX/test/surge/script/Pixiv.js,script-update-interval=0

[MITM]
hostname = oauth.secure.pixiv.net
*/
