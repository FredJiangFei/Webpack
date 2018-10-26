const NUM = 38;
interface Cat {
    name: string
}

function touchCat(cat: Cat) {
    console.log('my name is', cat.name);
}

touchCat({ name: 'fred' });