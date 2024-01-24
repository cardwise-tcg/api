# API

API & other tools that make the [cardwise app and website](https://cardwise.itodorova.dev/) work. ^_^

<p align="center">
<img src="./image.png" alt="cardwise api cover" height="300" />
</p>

## Getting started

API is available at [api.cardwise.itodorova.dev](https://api.cardwise.itodorova.dev/). 

Here are some example URLs:

Searching for `Stitch - Abomination` that is also a `ruby` card:
```
https://api.cardwise.itodorova.dev/lorcana?name=Stitch%20-%20Abomination&ink=ruby
```

All cards from the second set `Rise of the Floodborn`:
```
https://api.cardwise.itodorova.dev/lorcana?set_id=rfb
```

Images for each card are available through a CDN hosted on Digital Ocean Spaces. 
Here is an example URL for the card `Stitch - Abomination`:

```
https://cdn.cardwise.itodorova.dev/lorcana/tfc/125-sm.png
```
_\* `125` is the number of the card in the set, also images come in three sizes `sm`, `md` & `lg`. Adjust the URL accordingly._

## Contributions

If you found a mistake or want to add something to the project, feel free to open an issue or a pull request. I will be
happy to check it out! ^_^

For those unfamiliar with git (or github), I will soon prepare a simple guide on how to contribute to the project, without having to download/install anything at all.

## Checklist

### Lorcana
- [x] Medium & small sizes of card images from 'Rise of the Floodborn'
- [ ] Enchanted cards from 'The First Chapter' & 'Rise of the Floodborn'
- [ ] Documentation on API endpoints (searching, filtering & sorting) 


## Running it locally

### Requirements
- nodejs
- yarn

### Steps

1. Clone the repository
2. Run `yarn install` to install all dependencies
3. Run `yarn compile` to compile Lorcana's data
4. Run `yarn dev` to start the server
