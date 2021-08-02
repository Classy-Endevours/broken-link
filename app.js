const { SiteChecker } = require("broken-link-checker");

const list = []
const siteChecker = new SiteChecker({}, {
    robots: function(robots, customData){
        console.log('1', robots, customData)},
    html: function(tree, robots, response, pageUrl, customData){
        console.log('2')},
    junk: function(result, customData){
        console.log('3')},
    link: function(result, customData){
        list.push(result)
        console.log('4')},
    page: function(error, pageUrl, customData){
        console.log('5')},
    site: function(error, siteUrl, customData){
        console.log('6')},
    end: function(){
        console.log({list})
        console.log('7')}
})
  
const siteURL = "http://127.0.0.1:5500/index.html";


siteChecker.enqueue(siteURL, [])

module.exports = siteChecker;