var viewerConf = eval({
    "1": {
        "pw": "200", "ph": "300", "vw": "370", "vh": "600", "path": "https:\/\/editio.github.io\/schopenhauer\/defaultbook\/"
    },
    "default": {
        "pw": "200", "ph": "300", "vw": "370", "vh": "600", "path": "https:\/\/editio.github.io\/schopenhauer\/defaultbook\/"
    }
});
// test
console.dir(viewerConf);
/*console.log(findConfig(viewerConf,"3"));
console.log(findConfig(viewerConf,"none"));
console.log(findConfig(viewerConf,null));
console.log(findConfig(viewerConf,undefined));
 */

/**
 * return actual imagaviewerconfig
 **/
function getConfig(key) {
    return findConfig(viewerConf, key);
}


/**
 *
 *find config
 **/
function findConfig(data, key) {
    var record = data[key];
    //  return (record == null || record == undefined) ? data['default'] : record;
    if (record == null)
    record = data[ "default"]; else if (record == undefined)
    record = data[ "default"];
    
    return record;
}
