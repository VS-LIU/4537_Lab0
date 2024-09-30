/**
 * COMP4537 - Lab 3
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-29
 * 
 * index.js
 * 
 * Note: code generated by ChatGPT has been commented where used.
 */



//ChatGPT: implement dynamic text on client
const currentDomain = window.location.hostname;
const currentProtocol = window.location.protocol;
const currentPort = window.location.port; // Get the port number

// Construct the full URL, including the port if it's present
const fullUrl = `${currentProtocol}//${currentDomain}${currentPort ? `:${currentPort}` : ''}/COMP4537/labs/3/getDate?name=PLACEHOLDER`;

// Update the href of the anchor element
const dynamicUrlElement = document.getElementById('dynamic-url');
dynamicUrlElement.href = fullUrl;

// Replace the innerHTML of the <code> element to keep styling
dynamicUrlElement.innerHTML = `<code>https://${currentDomain}${currentPort ? `:${currentPort}` : ''}/COMP4537/labs/3/getDate?name=<span class="make-red">PLACEHOLDER</span></code>`;