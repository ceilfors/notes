(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{405:function(e,t,a){"use strict";a.r(t);var s=a(43),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"use-emoji-to-retain-meaning-in-compressed-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-emoji-to-retain-meaning-in-compressed-object"}},[e._v("#")]),e._v(" Use emoji to retain meaning in compressed object")]),e._v(" "),a("p",[e._v("When you’re storing objects in a document-oriented database, the attributes of your object count towards your document size. The increase of your payload size will have performance impacts to your query, and you may also hit the technical limit imposed by the database.")]),e._v(" "),a("blockquote",[a("p",[e._v("I was working with a university customer, I think 80% of the data they had in their system was attribute names and 64 terabytes data — Rick Houlihan")])]),e._v(" "),a("p",[e._v("There are various way of compressing your object, but emoji will retain the meaning of your attributes. For example if you have an object of:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{ “capacity”: 1, “pricePerDesk”: 500 }\n")])])]),a("p",[e._v("You can compress the object with emoji into:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{ “👨‍💼”: 1, “🪑”: 500 }\n")])])]),a("p",[e._v("Now, compare this with:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{ “c”: 1, “p”: 500 }\n")])])]),a("p",[e._v("Not only the object is more readable when you are browsing through your database, but all of the database features should still work.")]),e._v(" "),a("p",[e._v("I personally still wouldn’t use this as a first class object in my code, so if you want to experiment with this idea, do it in your data transfer objects.")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.serverlesschats.com/34/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Episode 34: Advanced NoSQL Data Modeling in DynamoDB with Rick Houlihan (Part 1) - Serverless Chats Podcast"),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[e._v("Rick: As a matter of fact, one of my favorite stories is from my days at MongoDB, I was working with a university customer, I think 80% of the data they had in their system was attribute names and 64 terabytes data.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);