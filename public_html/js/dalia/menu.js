function AppViewModel() {
    var self = this;

    self.activePage = ko.observable();
    self.menuObjects = ko.observableArray([
        {title: 'Start', url: 'start'},
        {title: 'Tapety', url: 'tapety'},
        {title: 'Recykling', url: 'recykling'},
        {title: 'Galeria', url: 'galeria'},
        {title: 'O Nas', url: 'oNas'},
        {title: 'Kontakt', url: 'kontakt'}
    ]);

    self.loadPage = function(menuObject) {
        if (self.activePage() === menuObject.url) {
            return;
        }
        self.activePage(menuObject.url);
        loadAjax(menuObject.url);
    };

    self.goToPage = function(menuObjectName) {
        for (i = 0; i < self.menuObjects().length; i++) {
            if (self.menuObjects()[i].title === menuObjectName) {
                self.loadPage(self.menuObjects()[i]);
                return;
            }
        }
    };

    self.loadPage(self.menuObjects()[0]);
}
daliaAppViewModel = new AppViewModel();

ko.applyBindings(daliaAppViewModel);
