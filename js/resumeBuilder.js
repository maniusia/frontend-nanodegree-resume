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
    "bioPic": "http://icons.veryicon.com/ico/Movie%20%26%20TV/Bride%20of%20Macabre/Alien.ico"
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
}

bio.display();

// EDUCATION Display

education.display = function() {
    for (school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (var course in education.onlineCourses) {

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%url%", education.onlineCourses[course].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDate + formattedURL);
    }
}

education.display();

//WORK Display

work.display = function() {
    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)

        $(".work-entry:last").append(formattedEmployerTitle + formattedDates + formattedDescription + formattedLocation);
    }
}

work.display();

//PROJECTS display

projects.display = function() {
    for (project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

//Collecting clicks

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

//Return location

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work.obj.jobs[job].location;
        locationArray.push(newLocation);
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
