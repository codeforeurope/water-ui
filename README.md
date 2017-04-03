
https://github.com/codeforireland2/swagger-mongoose-react-firebase as base

# UI seperation 

```shell
git clone https://github.com/codeforireland2/swagger-mongoose-react-firebase
cd swagger-mongoose-react-firebase
yarn # if first time install possible global install needed

git pull https://github.com/codeforeurope/water-ui
git pull https://github.com/codeforeurope/water-api
git pull https://github.com/codeforeurope/water-data

npm start 

npm run build-storybook

npm run storybook
``` 

To Test all components in src/components
```shell
NODE_ENV=development npm run cosmo
```
# Issues

## Translate to json TODO
- po2json -i lang/locale/en/LC_MESSAGES/messages.po -o translations.json -t lang/locale/templates/LC_MESSAGES/messages.pot --errorlevel traceback


Please report any issues at the [Transparent-Water](https://github.com/codeforeurope/Transparent-Water/issues) repository.
You can reference issues in commits using: 
```
npm commit -m "I fixed codeforeurope/transparent-water#1"
```


