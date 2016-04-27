# what-dog [![Build Status](https://travis-ci.org/dylang/what-dog.svg?branch=master)](https://travis-ci.org/dylang/what-dog)

> Get the breed of a dog from an image using Microsoft's what-dog.

| <img src="http://imgur.com/B7a15F5.jpg" width="300px"> |
|--------------------------------------|
|
```json
{
  "isDog": true,
  "breed": "Norfolk Terrier",
  "about": "Spirited, small but sturdy, feisty yet sweet personality"
}
```
|

## Install

```
$ npm install --save what-dog
```


## Usage

```js
const whatDog = require('what-dog');

whatDot('http://imgur.com/B7a15F5.jpg');
    .then(doggyData => {
        console.log(doggyData);
    })

//=> {
       isDog: true,
       breed: 'Norfolk Terrier',
       about: 'Spirited, small but sturdy, feisty yet sweet personality'
     }
```


## API

### `whatDot(imageUrl)`

#### `imageUrl`

Type: `string`

Url to the image. Must be on a public server that Microsoft's servers can download to determine the caption.

Returns a promise for the `doggy data`.

#### `doggy data`

```
{
  isDog: true,
  breed: 'Norfolk Terrier',
  about: 'Spirited, small but sturdy, feisty yet sweet personality'
}
```


## Notes

* Requires Node 4 or newer.
* Powered by [What-Dog](https://www.what-dog.net/), a free service provided by Microsoft.
* If you like this, you can read more at https://www.microsoft.com/cognitive-services.
* This node module was not created by Microsoft.
* I would consider this module "for testing only" - I do not recommend using in a production system.
* Microsoft: I made this because I am a fan of the technology. If there are any problems, or you want to use this package name, I'm happy to discuss.

## License

MIT © [Dylan Greene](https://github.com/dylang)
