// 1.For given JSON iterate over all loops(for,for in, for of, for each)
const jsonData=[
    {
      "id": "100",
      "name": "RRR",
      "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      "rating": 8.8,
      "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      "id": "101",
      "name": "Iron man 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 7,
      "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      "id": "102",
      "name": "No Country for Old Men",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      "rating": 8.1,
      "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      "id": "103",
      "name": "Jai Bhim",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      "rating": 8.8,
      "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      "id": "104",
      "name": "The Avengers",
      "rating": 8,
      "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      "id": "105",
      "name": "Interstellar",
      "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      "rating": 8.6,
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      "id": "106",
      "name": "Baahubali",
      "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      "rating": 8,
      "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      "id": "107",
      "name": "Ratatouille",
      "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      "rating": 8,
      "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
]
console.log("Itertation with for loop")
for (let i = 0; i < jsonData.length; i++) {
    const element = jsonData[i];
    console.log(element)
}

console.log("Itertation with for Of loop")

for (const iterator of jsonData) {
    console.log(iterator)
}

console.log("Itertation with for in loop")

for (const key in jsonData) {
    console.log(key)
    console.log(jsonData[key])
    }

console.log("Itertation with foreach loop")

jsonData.forEach(element => {
    console.log(element)
});

// 2.Create your own resume data in JSON format

const Resume=[
    {
    personalDetail:
        {
        name:"Vishal Shriniwas Nakod",
        Mobile_number:8237737366,
        Email_id:"vishalnakod8282@gmail.com"
        }
    },
    {obejctive:"To be a member of organization where my skills set is utilized for growth of organization. As a professional,I am looking forward to working in a challenging environment and striving for excellence."},
    {profile_Summary:" Total 6 years of experience in BIW Robotic Simulation. Worked on simulation software such as Robcad, Process Simulate.Familiar with BIW manufacturing processes like spot welding, MIG welding, riveting, sealing etc.Process study, layout study, spot data study, Gun selection, rivet data study investigation of complete process and cell.Cell building & process validation as per layout, creating footprints, finalizing layout Distribution of weld spot as per process, Profile of car panel and cycle time. Validation of fixtures, grippers, welding guns, rivets guns, sealing guns. Optimized path planning for welding, riveting, handling, sealing operations etc.Robot to robot interference zone, station to station interference zone, robot interlock. Making path OLP."},
    {skills:
        { CAD_software:["Robcad","Process simulate","Roboguide","CatiaV5","Autocad"],
          Programing_Languages:["HTML","CSS","Javascript","React","NodeJs","MongoDb","AWS"],
          Generic_Software:["MS-office","Notpad++","Vs-code"]
    }},
    { Academic_Synopsis:[
        {
        Qualfication:"BE-MECH",
        Name_of_Institution:"NKOCET, Solapur",
        Board_University:"Solapur University",
        Year:"2015-2016",
        Percentage:"73.31%"
       },
       {
        Qualfication:"HSC",
        Name_of_Institution:"D.B.F. Dayanand collage,Solapur",
        Board_University:"Pune Board",
        Year:"2011-2012",
        Percentage:"67.33%"
       },
       {
        Qualfication:"SSC",
        Name_of_Institution:"Sahastrarjun Prashala, Solapur",
        Board_University:"Pune Board",
        Year:"2009-2010",
        Percentage:"77.82%"
       }
    ]
    },
    {Work_Experiance:
    [
       {Company_Name:"Tata Technoloies",
         Duration:"3 months",
         Role:"SR.Engineer",
         location:"Banglore"
        },
        {Company_Name:"RGBSI-GM",
         Duration:"6 months",
         Role:"SR.Engineer",
         location:"Banglore"
        },
        {Company_Name:"Difacto Robotics",
         Duration:"3 years",
         Role:"SR.Engineer",
         location:"Banglore"
        },
        {Company_Name:"Tecosim Engg Services",
         Duration:"2.5 years",
         Role:"Simualtion Engineer",
         location:"Pune"
        }

    ]},
    {
        details:
        [
            {Languages: ["English", "Hindi", "Marathi", "Telegu", "Kannada"]},
            {Native: "Solapur, Maharashtra"},
            {Date_of_birth:"03/06/1995"}
        ]
    }
]

const cv=JSON.stringify(Resume)

console.log(cv)