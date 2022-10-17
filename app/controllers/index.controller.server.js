/*
COMP229-F2022-ASSIGNMENT1-822281549
Sheila Donnelly
Student #822281549
October 7th, 2022
*/

//INDEX CONTROLLER

export function displayHomePage(req, res, next){
    res.render('index', { title: 'Home', page: 'home' });
};

export function displayAboutMePage(req, res, next) {
    res.render('index', { title: 'About Me', page: 'about' });
}

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
}

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
}

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact' });
}