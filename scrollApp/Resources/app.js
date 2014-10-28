// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var win = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var mainView = Ti.UI.createView({
    top: 45
});

var tableView = Ti.UI.createTableView();

var rows = [];
for (var i = 0; i < 40; i++) {
    rows.push(Ti.UI.createTableViewRow({
        title: 'Row ' + i
    }));
};

tableView.setData(rows);

tableView.addEventListener('click', function(e) {
    mainView.add(anotherView);
    mainView.remove(tableView);
});

var anotherView = Ti.UI.createView({
    layout: 'absolute'
});

var backButton = Ti.UI.createButton({
    title: 'Go back'
});

backButton.addEventListener('click', function(e) {
    mainView.add(tableView);
    mainView.remove(anotherView);
});

anotherView.add(backButton);

mainView.add(tableView);
win.add(mainView);

win.open();