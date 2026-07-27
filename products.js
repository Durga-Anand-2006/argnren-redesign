const PRODUCTS = [
  // Electric Vehicles
  { id:1,  category:"Electric Vehicles", name:"Electric ATV, 6000 Watt",       model:"ARN-ATV6000", price:59998, specs:["6000W motor","For kids and adults","Electric"], stock:"In stock", low:false, desc:"A powerful electric ATV built for Norwegian conditions — as much power as a gas engine, without the noise." },
  { id:2,  category:"Electric Vehicles", name:"Electric Hummer H3",            model:"ARN-H3EL",     price:99998, specs:["Top speed 120 km/h","2-seater","Electric"], stock:"Made to order", low:true,  desc:"A full-scale electric Hummer replica with a real top speed — one of the more ambitious vehicles in the catalog." },
  { id:3,  category:"Electric Vehicles", name:"Electric Jeep, 4WD Willys-type", model:"ARN-JEEP4WD",  price:79998, specs:["4WD","3-seater","60V/1500W motor"], stock:"In stock", low:false, desc:"A four-wheel-drive electric jeep with rubber tires, built for kids, teens, and adults alike." },
  { id:4,  category:"Electric Vehicles", name:"Electric Scooter, 5000 Watt",   model:"ARN-SC5000",   price:29998, specs:["5000W motor","100 km/h","Street-legal with plates"], stock:"3 left", low:true,  desc:"A powerful, street-legal e-scooter — for riders ready to replace the moped entirely." },

  // Robots & RC
  { id:5,  category:"Robots & RC", name:"Star Wars R2-D2 Robot",  model:"ARN-R2D2",   price:1998, specs:["40 cm tall","Remote-controlled","Sound and lights"], stock:"In stock", low:false, desc:"A 40 cm tall R2-D2 that moves and makes sound — a recurring favorite in the original catalog." },
  { id:6,  category:"Robots & RC", name:"Roboraptor",             model:"ARN-RAPTOR",  price:499,  specs:["80 cm long","Remote-controlled","Reacts to sound"], stock:"In stock", low:false, desc:"An 80 cm long robotic raptor with sensors that react to movement and sound." },
  { id:7,  category:"Robots & RC", name:"i-Sobot Robot",          model:"ARN-ISOBOT",  price:2999, specs:["17 cm tall","200+ movements","Programmable"], stock:"2 left", low:true,  desc:"A programmable humanoid robot with over 200 preset movements." },
  { id:8,  category:"Robots & RC", name:"Metal RC Tank",          model:"ARN-TANKM",   price:2998, specs:["55 cm long","Metal","Fires soft pellets"], stock:"In stock", low:false, desc:"A scale-model metal tank with a working turret and a range of up to 30 meters." },

  // Electronics & Gadgets
  { id:9,  category:"Electronics & Gadgets", name:"Digital Binoculars with Camera", model:"ARN-DKAM",   price:1598, specs:["Built-in camera","LCD screen","Digital zoom"], stock:"In stock", low:false, desc:"Binoculars with a built-in digital camera and LCD screen — see it and shoot it in one motion." },
  { id:10, category:"Electronics & Gadgets", name:"Mini TV with Mobile Reception",   model:"ARN-MTV",     price:999,  specs:["16:9 screen","Mobile hookup","Built-in recorder"], stock:"In stock", low:false, desc:"A compact TV with mobile hookup and a built-in recorder, for the car or the cabin." },
  { id:11, category:"Electronics & Gadgets", name:"H3 Titanium Watch, Navy Seal",    model:"ARN-H3UR",    price:1998, specs:["Titanium","Military-spec","Waterproof"], stock:"In stock", low:false, desc:"A rugged titanium watch built to military spec, made to take a beating." },
  { id:12, category:"Electronics & Gadgets", name:"Car Acceleration Meter",          model:"ARN-ACCEL",   price:2998, specs:["0–100 km/h","HP, Nm, RPM","Dashboard display"], stock:"In stock", low:false, desc:"Measures 0–100 km/h, horsepower, and torque straight from the dashboard." },

  // Outdoor & Hobby
  { id:13, category:"Outdoor & Hobby", name:"Zoom Binoculars & Telescope",  model:"ARN-ZOOM125", price:2998, specs:["20x to 125x","80mm lens","Zoom and telescope in one"], stock:"In stock", low:false, desc:"A combined zoom binocular and telescope with an 80mm aperture — one of the most powerful in the lineup." },
  { id:14, category:"Outdoor & Hobby", name:"Air Jack (4.2 tonnes)",        model:"ARN-JACK42",  price:998,  specs:["4.2-tonne lifting capacity","For car or boat","Air-powered"], stock:"In stock", low:false, desc:"An air jack with a 4.2-tonne capacity, powered off the car's exhaust." },
  { id:15, category:"Outdoor & Hobby", name:"Complete Solar Panel Kit",     model:"ARN-SOLAR200", price:6998, specs:["200W panel","Complete kit","For cabin or boat"], stock:"In stock", low:false, desc:"A complete solar setup for cabins and boats with no fixed power connection." },
  { id:16, category:"Outdoor & Hobby", name:"Snowpro 13HP Snow Blower",     model:"ARN-SNOW13",  price:13998, specs:["13 hp","Tracked","Throw distance 15m"], stock:"In stock", low:false, desc:"A tracked snow blower with 13 horsepower and a 15-meter throw distance." },

  // Collectibles & Models
  { id:17, category:"Collectibles & Models", name:"Pleo the Living Dinosaur", model:"ARN-PLEO",   price:2999, specs:["52 cm long","Sensor-driven","Reacts to touch"], stock:"In stock", low:false, desc:"An animatronic dinosaur that reacts to touch, sound, and movement like a living pet." },
  { id:18, category:"Collectibles & Models", name:"Model Rocket, 600m Altitude", model:"ARN-ROCKET",  price:499,  specs:["600m altitude","Reusable","With parachute"], stock:"In stock", low:false, desc:"A model rocket that reaches 600 meters and lands safely by parachute for reuse." },
  { id:19, category:"Collectibles & Models", name:"VR 3D Train Set for PC",       model:"ARN-VRTOG",   price:99,   specs:["For PC","3D simulator","Multiple tracks"], stock:"In stock", low:false, desc:"A full 3D train-set simulator for PC — build and run it without clearing the living room floor." },
  { id:20, category:"Collectibles & Models", name:"Hornby Train Set",             model:"ARN-HORNBY",  price:999,  specs:["Complete set","Scale model","British quality"], stock:"2 left", low:true,  desc:"A complete scale Hornby train set — classic British model-railway quality." }
];

const CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))];

function formatPrice(n){
  return n.toLocaleString("en-US") + " kr";
}

function getProductById(id){
  return PRODUCTS.find(p => p.id === Number(id));
}

// Path to the product photo a user can drop in. Falls back to a text
// placeholder (handled in main.js) if the file isn't there yet.
function productImagePath(id){
  return `images/products/${String(id).padStart(2, "0")}.jpg`;
}
