
import * as _ from 'lodash'
console.log(_.chunk([1, 2, 3, 4, 5], 2))

const NUM = 38;
interface Cat {
    name: string
}

function touchCat(cat: Cat) {
    console.log('my name is', cat.name);
}

touchCat({ name: 'fred' });