const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

let ufc264 = {
    'dustin poirer': {
        'age': 32,
        'country': 'United States',
        'record': "27-6-0",
        'Weightclass': 'Lightweight',
        'Height': "5'9"
    },
    'conor mcgregor': {
        'age': 32,
        'country': 'Ireland',
        'record': "22-5-0",
        'Weightclass': 'Lightweight',
        'Height': "5'9"
    },
    'gilbert burns': {
        'age': 34,
        'country': 'Brazil',
        'record': "19-4-0",
        'Weightclass': 'Welterweight',
        'Height': "5'10"
    },
    'stephen thompson': {
        'age': 38,
        'country': 'United States',
        'record': "15-4-1",
        'Weightclass': 'Welterweight',
        'Height': "6'0"
    },
    'tai tuivasa': {
        'age': 28,
        'country': 'Australia',
        'record': "12-3-0",
        'Weightclass': 'Heavyweight',
        'Height': "6'2"
    },
    'greg hardy': {
        'age': 32,
        'country': 'United States',
        'record': "7-2-0",
        'Weightclass': 'Heavyweight',
        'Height': "6'5"
    },
    'irene aldana': {
        'age': 33,
        'country': 'Mexico',
        'record': "12-6-0",
        'Weightclass': 'Bantamweight',
        'Height': "5'9"
    },
    'yana kunitskaya': {
        'age': 31,
        'country': 'Russia',
        'record': "14-5-0",
        'Weightclass': 'Bantamweight',
        'Height': "5'6"
    },
    'yana kunitskaya': {
        'age': 31,
        'country': 'Russia',
        'record': "14-5-0",
        'Weightclass': 'Bantamweight',
        'Height': "5'6"
    },
    "sean o'malley": {
        'age': 26,
        'country': 'United States',
        'record': "13-1-0",
        'Weightclass': 'Bantamweight',
        'Height': "5'11"
    },
    'louis smolka': {
        'age': 29,
        'country': 'United States',
        'record': "17-7-0",
        'Weightclass': 'Bantamweight',
        'Height': "5'9"
    },
    "unknown": {
        'age': 0,
        'country': "Unknown",
        'record':"Unknown",
        'Weightclass':'Unknown',
        'Height': "Unknown"
    }
}

app.get('/', (request,response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/ufc264', (request,response)=>{
    response.json(ufc264)
})

app.get('/api/ufc264/:fighterName',(request,response) => {
    const fighter = request.params.fighterName.toLocaleLowerCase()
    if(ufc264[fighter]) {
    response.json(ufc264[fighter])}
    else{
        response.json(ufc264['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () =>{
console.log(`server is running on port ${PORT}`)
})

