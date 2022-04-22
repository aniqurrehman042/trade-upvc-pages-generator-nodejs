const fs = require('fs')

let html = '';

try {
    const data = fs.readFileSync('./index.html', 'utf8')
    html = data;
} catch (err) {
    console.error(err)
}

[
    'Alloway',
    'Ardrossan',
    'Annbank',
    'Auchentiber',
    'Auchinleck',
    'Ayr',
    'Ballantrae',
    'Barrhill',
    'Barr',
    'Beith',
    'Bellsbank',
    'Bearsden Glasgow',
    'Catrine',
    'Coylton',
    'Crosshill',
    'Crosshouse',
    'Cumnock',
    'Dailly',
    'Dalmellington',
    'Dalry',
    'Dalrymple',
    'Darvel',
    'Drongan',
    'Dreghorn',
    'Drybridge',
    'Dundonald',
    'Dunlop',
    'Dunure',
    'Fairlie',
    'Fenwick',
    'Galston',
    'Gatehead',
    'Girvan',
    'Glengarnock',
    'Glasgow',
    'Hansel',
    'Hurlford',
    'Irvine',
    'Kilbirnie',
    'Kilmarnock',
    'Kilmaurs',
    'Kilwinning',
    'Kirkmichael',
    'Kirkoswald',
    'Knockentiber',
    'Largs',
    'Lendalfoot',
    'Logan',
    'Lugton',
    'Lugar',
    'Mauchline',
    'Maidens',
    'Maybole',
    'Monkton',
    'Mossblown',
    'Minishant',
    'Muirkirk',
    'New Cumnock',
    'Newmilns',
    'Ochiltree',
    'Old Dailly',
    'Pinmore',
    'Pinwherry',
    'Prestwick',
    'Saltcoats',
    'Seamill',
    'Skelmorlie',
    'Sorn',
    'Springside',
    'Stair',
    'Stevenston',
    'Stewarton',
    'Straiton',
    'Symington',
    'Tarbolton',
    'Troon',
    'Turnberry',
    'West Kilbride'
].forEach((city) => {
    const cityHtml = html.replace(/{CITY_NAME}/g, city);
    var dir = './' + city.toLowerCase().replace(' ', '-');

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    fs.writeFile('./' + city.toLowerCase().replace(' ', '-') + '/index.html', cityHtml, function (err) {
        if (err) return console.log(err);
        console.log(city + ' Success!');
    });
});
