const data = {

walls: {

title:"Wall Finishes",

items:[

{
name:"Paint",
image:"https://images.unsplash.com/photo-1562259949-a6457a729c6b?auto=format&fit=crop&w=800&q=80",

look:"Smooth finish available in matte, satin and glossy textures.",

cost:"₹20 - ₹150 per sq.ft approx.",

feasibility:"Affordable and suitable for almost every room.",

pros:["Many colour options","Easy maintenance","Budget friendly"],

cons:["Needs repainting after years","Some paints are not moisture resistant"]

},


{
name:"Wallpaper",
image:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",

look:"Decorative patterns, textures and luxury finishes.",

cost:"₹40 - ₹200+ per sq.ft approx.",

feasibility:"Best for bedrooms and feature walls.",

pros:["Quick transformation","Premium appearance"],

cons:["Can peel in moisture","Replacement can be difficult"]

},


{
name:"POP Finish",
image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",

look:"Smooth decorative finish for walls and ceilings.",

cost:"₹80 - ₹150 per sq.ft approx.",

feasibility:"Good for luxury interiors and false ceilings.",

pros:["Elegant look","Custom designs possible"],

cons:["Requires skilled workers","Can develop cracks"]

}

]

},



flooring:{

title:"Flooring",

items:[

{
name:"Marble Flooring",
image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",

look:"Premium natural stone appearance.",

cost:"₹150 - ₹1000+ per sq.ft.",

feasibility:"Best for luxury homes and spacious areas.",

pros:["Elegant look","Long lasting"],

cons:["Expensive","Needs maintenance"]

},


{
name:"Vitrified Tiles",
image:"https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80",

look:"Modern tiles with multiple finishes.",

cost:"₹50 - ₹200 per sq.ft approx.",

feasibility:"Suitable for most homes.",

pros:["Affordable","Easy cleaning"],

cons:["Can feel cold","May crack on impact"]

}

]

},



furniture:{

title:"Furniture & Storage",

items:[

{
name:"Plywood",

image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",

look:"Engineered wood used for wardrobes and cabinets.",

cost:"₹50 - ₹200 per sq.ft approx.",

feasibility:"Most common choice for modular furniture.",

pros:["Strong","Cost effective"],

cons:["Quality depends on grade","Can be affected by moisture"]

},


{
name:"Solid Wood",

image:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",

look:"Natural premium wooden appearance.",

cost:"₹300+ per sq.ft.",

feasibility:"Suitable for luxury interiors.",

pros:["Very durable","Premium feel"],

cons:["Expensive","Requires care"]

}

]

},



kitchen:{

title:"Kitchen",

items:[

{
name:"Modular Kitchen",

image:"https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",

look:"Organised cabinets with modern layouts.",

cost:"₹1 lakh - ₹10 lakh+ depending on size.",

feasibility:"Suitable for modern homes.",

pros:["Efficient storage","Customisable"],

cons:["Higher initial cost","Repairs can be expensive"]

}

]

},



bathroom:{

title:"Bathrooms",

items:[

{
name:"Ceramic Tiles",

image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",

look:"Clean and versatile wall/floor finish.",

cost:"₹40 - ₹200 per sq.ft approx.",

feasibility:"Common choice for Indian bathrooms.",

pros:["Water resistant","Many designs"],

cons:["Grout requires cleaning","Can break"]

}

]

}

};



function showInfo(category){

let content=document.getElementById("content");

let categoryData=data[category];


content.innerHTML=`

<h2>${categoryData.title}</h2>


${categoryData.items.map(item=>`

<div class="material-card">

<img src="${item.image}">

<h3>${item.name}</h3>

<p><b>Look:</b> ${item.look}</p>

<p><b>Cost:</b> ${item.cost}</p>

<p><b>Feasibility:</b> ${item.feasibility}</p>


<h4>Pros</h4>

<ul>
${item.pros.map(p=>`<li>${p}</li>`).join("")}
</ul>


<h4>Cons</h4>

<ul>
${item.cons.map(c=>`<li>${c}</li>`).join("")}
</ul>


</div>


`).join("")}

`;

}