function AppViewModel() {
    var self = this;

    self.activePage = ko.observable();
    self.people = ko.observableArray([
        {title: 'Start', url: 'start'},
        {title: 'Tapety', url: 'tapety'},
        {title: 'Recykling', url: 'recykling'},
        {title: 'Galeria', url: 'galeria'},
        {title: 'O Nas', url: 'oNas'},
        {title: 'Kontakt', url: 'kontakt'}
    ]);

    self.loadPage = function(person) {
        if (self.activePage() === person.url) {
            return;
        }
        self.activePage(person.url);
        loadAjax(person.url);
    };

    self.loadPage(self.people()[0]);
}
ko.applyBindings(new AppViewModel());