url = 'http://127.0.0.1:8087/users/login'
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYXJsb3NAZ21haWwuY29tIiwiZXhwIjoxNzMzODAwMzk4fQ.l84-4DtStRQdvFcbAsEPsKo3tVfHi2hsley9IhT91EQ"

let data = {
  'email': 'carlos@gmail.com',
  'password': '1234'
}


async function FETCHER() {
  let res = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(data => {
    return data.json()
  })
  console.log(res)
}


FETCHER()

