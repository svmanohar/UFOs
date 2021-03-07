// import the data from data.js

const tableData = data;

// using D3, a Javascript library for producing high quality tables and data viz:
// we reference the HTML tag "tbody"
// we are telling JS to look for the tbody tag using d3's select

var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }
