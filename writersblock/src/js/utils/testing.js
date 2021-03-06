export const IN_DEVELOPMENT = {
  _global:true,
  _groupByDefault:true,
  base:true,
  calendar:false,
  journal:true,
  postit:false,
  reducer:false,
  'root-reducer':true,
  settings:false,
}

export const deleteCommonFiles = (session) =>
{
  // session.deleteFile('_writersBlockListPrivate.json')
  // session.deleteFile('_writersBlockListPublic.json')
  // session.deleteFile('_writersBlockUsersSettings.json')
  // session.deleteFile('_writersBlockListMap.json')
  // session.deleteFile('_writersBlockIntegrations.json')
  
  // session.deleteFile('private/20191101.json')
  // session.deleteFile('private/20191102.json')
  // session.deleteFile('private/20191103.json')
  // session.deleteFile('private/20191104.json')
  // session.deleteFile('private/20191105.json')
  // session.deleteFile('private/20191106.json')
  // session.deleteFile('private/20191107.json')
  // session.deleteFile('private/20191108.json')
  // session.deleteFile('private/20191109.json')
  // session.deleteFile('private/20191110.json')
  // session.deleteFile('private/20191011.json')
  // session.deleteFile('private/20191012.json')
  // session.deleteFile('private/20191013.json')
  // session.deleteFile('private/20191014.json')
  // session.deleteFile('private/20191015.json')
  // session.deleteFile('private/20191016.json')
  // session.deleteFile('private/20191017.json')
  // session.deleteFile('private/20191018.json')
  // session.deleteFile('private/20191019.json')
  // session.deleteFile('private/20191020.json')
  // session.deleteFile('private/20191021.json')
  // session.deleteFile('private/20191022.json')
  // session.deleteFile('private/20191023.json')
  // session.deleteFile('private/20191024.json')
  // session.deleteFile('private/20191025.json')
  // session.deleteFile('private/20191026.json')
  // session.deleteFile('private/20191027.json')
  // session.deleteFile('private/20191028.json')
  // session.deleteFile('private/20191029.json')
  // session.deleteFile('private/20191030.json')
  // session.deleteFile('private/20191031.json')
}

export const listFiles = (session) =>
{
  console.log('listing files:')
  let indx=0
  session.listFiles(itm => { console.log(`${++indx}: `, itm); return true })
}

export const readSingle = (session,s='_writersBlockListPrivate.json',opts={}) =>
{
  //_writersBlockListPrivate.json
  //private/20191007.json
  session.getFile(s, opts).then(txt => console.log(s.toUpperCase()+' FILE CONTENTS: ', txt))
  .catch(err=>console.error(err))
}

export const makeMultiple = (session,tot,month) =>
{
  let d = 1,
      daysArray = [],
      fileData = JSON.stringify(saveFile),
      privateList = []
  
  while(d<28){ daysArray.push(d); ++d }
  daysArray.shuffle()

  console.log('daysArray',daysArray)
  function putFile(i)
  {
    const createdTimestamp = new Date(`${month} ${daysArray[i]} ${new Date().getFullYear()}`).getTime(),
          fileName = new Date(createdTimestamp).CONTENT_FILE.formatDate()+'.json'
    let   curFileData = fileData+''
          curFileData = curFileData
                          .replace(/MMx/g,month)
                          .replace(/DDx/g,daysArray[i])
                          .replace(/INDXx/g,i)
                          .replace(/CREATEDx/g,createdTimestamp)
                          .replace(/UPDATEDx/g,createdTimestamp+(Math.floor(Math.random()*10000)))
                          .replace(/RANDOMx/g,Math.floor(Math.random()*15))
  
  privateList.push(fileName)
  console.log('curFileData',curFileData)
  session.putFile('private/'+fileName,curFileData,{})
    .then(o =>
    {
      console.log('PUT FILE:',o)
      if(++i < tot)
      { putFile(i) }
      else
      {
        // privateList = privateList.sort()
        // console.log('privateList',privateList)
        // const saveList = {"privatePosts":privateList}
        // // {"privatePosts":["20191007.json"]}
        // console.log(JSON.stringify(saveList))
        // session.putFile('_writersBlockListPrivate.json',JSON.stringify(saveList),{})
        // .then(o =>
        // {
          // console.log('_writersBlockListPrivate is PUT: o',o)
          const mapList = {}
          privateList.forEach(itm =>
            { mapList[itm.replace('.json','')] = {kind:'PRIVATE', url:'/tmp/path'} })
          console.log('mapList',mapList);
          session.putFile('_writersBlockListMap.json', JSON.stringify({postsMap:mapList}), { encrypt: false })
            .then(o => console.log('_writersBlockListMap is PUT: o',o))
            .catch(err => console.error(err))
        // })
      }
    })
    .catch(err => console.error(err))
  }
  putFile(0)

  //{"privatePosts":["20191007.json"]}
  // console.log('fileData',fileData);
  // blockstackUserSession.putFile(file, cntnt, opts)
}


const saveFile = {
  "id": "2019MMxDDx",
  "title": "MMx.DDx 2019 Journal Entry",
  "content": "TESTING INDXx: kg<mark data-wysiwyg-class-map=\"highlight-blue\"></mark><div>a</div><div>f</div><div><mark data-wysiwyg-class-map=\"highlight-pink\">asdf</mark></div><div>df</div><div>sf asdf as!</div>",
  "author": {
    "decentralizedID": "did:btc-addr:1FpSFFiqTeCWYTPEwiZB2ckegyFDoB2k5h",
    "appPrivateKey": "7f746740648bd5f260cd31dc3fc67983f96bfc4044a577c600da4c3c05b81a6c",
    "profile": {
      "@type": "Person",
      "@context": "http://schema.org",
      "api": {
        "gaiaHubConfig": {
          "url_prefix": "https://gaia.blockstack.org/hub/"
        },
        "gaiaHubUrl": "https://hub.blockstack.org"
      },
      "name": "mlnck",
      "description": "make",
      "image": [
        {
          "@type": "ImageObject",
          "name": "avatar",
          "contentUrl": "https://gaia.blockstack.org/hub/1FpSFFiqTeCWYTPEwiZB2ckegyFDoB2k5h//avatar-0"
        }
      ],
      "apps": {
        "http://127.0.0.1:3000": "https://gaia.blockstack.org/hub/1DKoRgSS7vyvXpdeSrks5hVSSReDtPGVoJ/",
      }
    }
  },
  "meta": {
    "created": "CREATEDx",
    "lastupdated": "UPDATEDx",
    "totalupdates": "RANDOMx"
  }
}