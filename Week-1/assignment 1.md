When a user enters an URL in the browser, how does the browser fetch the desired
result ? Explain this with the below in mind and Demonstrate this by drawing a diagram
for the same. (2-3 hours)
a. What is the main functionality of the browser?
b. High Level Components of a browser.
c. Rendering engine and its use.
d. Parsers (HTML, CSS, etc)
e. Script Processors
f. Tree construction
g. Order of script processing
h. Layout and Painting


URL stands for Uniform Resource Locator. URL is the address of the website which you can find in the address bar of your web browser. It is a reference to a resource on the internet, be it images, hypertext pages, audio/video files, etc. Eg. - https://www.google.com.

When a user enters a URL in the browser the following happens in sequence :-

1. Browser checks cache for DNS entry to find the corresponding IP address of website.
It looks for following cache. If not found in one, then continues checking to the next until found.
  a)Browser Cache
  b)Operating Systems Cache
  c)Router Cache
  d)ISP Cache

2. If not found in cache, ISP’s (Internet Service Provider) DNS server initiates a DNS query to find IP address of server that hosts the domain name.
The requests are sent using small data packets that contain information content of request and IP address it is destined for.

3. Browser initiates a TCP (Transfer Control Protocol) connection with the server using synchronize(SYN) and acknowledge(ACK) messages.

4. Browser sends an HTTP request to the web server. GET or POST request.

5. Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML.

6. Server sends out an HTTP response along with the status of response.

7. Finally browser displays the HTML content.



 







![Screenshot 2022-11-14 215842](https://user-images.githubusercontent.com/44311710/202448179-e8a94aab-2fd8-47bd-98d5-f82310e76a09.png)

a) The main function of the browser is to interpret HTML. It takes us anywhere on the internet. It retrieves information from other parts of the web and displays it on your desktop or mobile device. The information is transferred using the Hypertext Transfer Protocol, which defines how text, images and video are transmitted on the web.

b) The high level components of the browser are :  
   i) User Interface which includes the address bar, back/forward button, bookmarking menu etc.
   ii) Browser Engine which marshals actions between UI and rendering engine.
   iii) Rendering Engine for displaying requested content by parsing HTML and CSS and displays parsed content on the screen.
   iv) Networking for network calls such as HTTP requests. 
   v) UI Backend used for drawing basic widgets like combo boxes and windows.
   vi) JavaScript Interpreter for parsing and executing javascript code.
   vii) Data storage for storing cookies.

c) The rendering engine is responsible for displaying requested content requested by the user. For example if the requested content is HTML, the rendering engine parses HTML and CSS and displays the parsed content on the screen.	

d) Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the JavaScript engine inside browsers.
The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction. HTML tokens include start and end tags, as well as attribute names and values. If the document is well-formed, parsing it is straightforward and faster. The parser parses tokenized input into the document, building up the document tree.

e) The script processor executes Javascript code to process an event. The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies. This can be useful in situations where one of the other processors doesn’t provide the functionality you need to filter events. The processor can be configured by embedding Javascript in your configuration file or by pointing the processor at external file(s). Example:- 
processors:
  - script:
      lang: javascript
      file: ${path.config}/filter.js
This loads filter.js from disk.

f) The HTML DOM views a HTML document as a tree-structure. The tree structure is called a node-tree. All nodes can be accessed through the tree. Their contents can be modified or deleted, and new elements can be created.The node tree below shows the set of nodes, and the connections between them. The tree starts at the root node and branches out to the text nodes at the lowest level of the tree:

 
 ![Screenshot 2022-11-14 220409](https://user-images.githubusercontent.com/44311710/202448298-56c16f65-e19d-4e5b-af5b-48ae9055efbe.png)

 

g) The order of script processing are:
   1) Execution Stages
   2) Activation
   3) Generation
   4) Processing
   5) Completion



h) Layout refers to the process of construting a render-tree and using that tree to compute the exact position and size of each object.
   Painting refers to the process of taking the previously computed positions drawing the colors to the screen.


