var bio = {
    "name": "Ally Alien",
    "role": "Space Cowboy Destructor",
    "contacts": {
        "mobile": "666 666 - only urgent destructions",
        "email": "a.alien@getscared.com",
        "github": "a.alien",
        "location": "Area 51"
    },
    "welcomeMessage": "Welcome",
    "skills": [
        "destruction, joga, Bear Grylls space survival course, ninja, punctuality"
    ],
    "biopic": "http://icons.veryicon.com/ico/Movie%20%26%20TV/Bride%20of%20Macabre/Alien.ico"
};


var education = {
    "schools": [{
            "name": "Alien University",
            "location": "Harvard",
            "degree": "Master Degree in Acting",
            "majors": ["scary movies"],
            "dates": "3009 - 3015",
            "url": "http://fakePrometeusUniversity.com"
        },
        {
            "name": "How to be a Bully Academy",
            "location": "Mexico City",
            "degree": "Bachelor in Bullying",
            "majors": ["Bullying"],
            "dates": "3000 - 3009",
            "url": "http://fakeByllyAcademy.com"
        }
    ],
    "onlineCourses": [{
        "title": "Human anatomy for Dummies",
        "school": "Space online School",
        "dates": "3007 - 3009",
        "url": "http://fakeSpaceSchool.com"
    }]
};

var work = {
    "jobs": [{
            "employer": "The Engineer",
            "title": "Intergalactic Sales Manager",
            "location": "New York",
            "dates": "in progress",
            "description": "Promoting and selling farmaceutical equipment 'Alien' to different planets and populations."
        },
        {
            "employer": "20th Century Fox",
            "title": "Main character",
            "location": "Hollywood",
            "dates": "3021 - 3022",
            "description": "Playing the main movie character."
        }
    ]
};

var projects = {
    "projects": [{
        "title": "Alien: Covenant",
        "dates": "3033 - present",
        "description": "Playing the main character",
        "images": [
            "http://static.wixstatic.com/media/ccb448_0d13aa5121954038a5f8a0f223ce198a~mv2_d_4500_4500_s_4_2.jpg_256",
            "https://pbs.twimg.com/profile_images/595977746385371137/jnqXepY0.png"
        ]
    }]
};

//BIO Display

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedContactGeneric = formattedMobile + formattedEmail + formattedGithub + formattedLocation;

    $("#header").prepend(formattedName + formattedRole);
    $("#header").append(formattedWelcomeMsg + formattedbioPic);
    $("#topContacts").append(formattedContactGeneric);
    $("#footerContacts").append(formattedContactGeneric);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var x = 0; x < bio.skills.length; x++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[x]);
            $("#skills").append(formattedSkill);
        }
    }
};

// EDUCATION Display

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
        // $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.schools[i].url));
    }

    $("#education").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);

        $(".education-entry:last").append(formattedTitle + formattedSchool);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[k].url));
    }
};

//WORK Display

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);

        $(".work-entry:last").append(formattedEmployerTitle + formattedDates + formattedDescription + formattedLocation);
    }
};

//PROJECTS display

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        // $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();

//Collecting clicks

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

//Return location

function locationizer(work_obj) {
    var locationArray = []; {
        for (var i = 0; i < work_obj.jobs.length; i++) {
            var newLocation = work.obj.jobs[i].location;

            locationArray.push(newLocation);
        }
    }
    return locationArray;
}

//Internationalize Names

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);


//Google Map

$("#mapDiv").append(googleMap);
