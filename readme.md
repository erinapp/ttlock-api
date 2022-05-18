# TTLock API
Unofficial TTLock API Wrapper.
See more at [TTLock](https://open.ttlock.com/doc/api/)

## Installation

- Run ```npm install``` after cloning the repository
- Run ```npm run build``` to build this package
- Install the package from your another project, run ```npm i <path-to-this-package-folder>```

## Usage

- Create Client

```
import { createClient } from 'ttlock-api'

const client = createClient({
  baseUrl: '',
  clientId: '',
  clientSecret: ''
})
```

- Use The APIs, one for example

```
client.lock.init({
  accessToken: '',
  date: 0,
  lockData: ''
}).then(response => {

  // Do something after getting the response
  
})
```

- You can also import the types when you need to

```
import { UserType } from 'ttlock-api'
```