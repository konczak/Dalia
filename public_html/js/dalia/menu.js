function AppViewModel() {
    var self = this;

    self.activePage = ko.observable();
    self.people = ko.observableArray([
        {title: 'Start', url: 'Bertington'},
        {title: 'Tapety', url: 'Gucio'},
        {title: 'Recykling', url: 'Tofik'},
        {title: 'Galeria', url: 'Zigoorth'},
        {title: 'O Nas', url: 'Charlesforth'},
        {title: 'Kontakt', url: 'Dentiste'}
    ]);

    self.loadPage = function(person) {
        self.activePage(person.url);
    };

}
ko.applyBindings(new AppViewModel());