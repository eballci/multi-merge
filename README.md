# Multi Merge
This is a library that appends JS to deep object merging feature.

## How to install
````shell
npm install multi-merge
````

## Using
In the library objects' enumerable and non-enumerable properties considered.
````js
//import
const merge = require("multi-merge")
````
You can use this feature in two of different modes.
Former one is overwriting, latter one is non-overwriting.
````js
//with overwriting
merge(dest, source1, ...sourceN)
//or
merge(dest, true, source1, ...sourceN)
````
````js
//without overwriting
merge(dest, false, source1, ...sourceN)
````
You can change merging mode while passing arguments like:
````js
//The function will merge like...
//Merge source1 by overwriting
//Do not merge source2 and its nexts by overwriting
merge(dest, true, soruce1, false, source2, ...soruceN)
````
After ``true`` param, the function changes mode to overwriting.
<br>
After ``false`` param, the function changes mode to non-overwriting.

## License
MIT License

Copyright (c) Emre BALCI <emre-balci@outlook.com.tr>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

