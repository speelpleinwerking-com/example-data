# Example data

```
npm i @speelpleinwerking.com/example-data
```

Alternatively:

```
npm i --save-dev @speelpleinwerking.com/example-data
```

## What's inside

* `playgrounds`: A list of example playgrounds
* Example playgrounds
  * `maximumExample`: A playground that has all optional properties set
  * `minimumExample`: A playground that only has the bare minimum of properties
  * `debugExample`: A playground that has all optional properties set with the property name for debugging

## Usage

### JavaScript

```
const exampleData = require('@speelpleinwerking.com/example-data');

exampleData.playgrounds // List of example playgrounds
```

### TypeScript

```
import { playgrounds } from '@speelpleinwerking.com/example-data';

playgrounds // List of example playgrounds
```

