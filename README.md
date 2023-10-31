## Marble seeds [Module name]

## Install with

```
npm i @marble-seeds/[Module name]
```

## Docs

After clone do

```
git reset $(git commit-tree HEAD^{tree} -m "A new start")
```

To get a new history, then point to the correct package

```
git remote set-url origin [Git repo]
```

Update the `package.json` file with the new name of you module and its repo

Then remove this part and write the docs of your package

## Config

Do `cp .env.default .env` to create your env file from the sample.

Add placeholders on the sample as your project grows and the values keep them in the .env.

Dont commit your env file to your repo.

Use like `process.env.SAMPLE`


