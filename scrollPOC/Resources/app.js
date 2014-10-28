// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// Base Window
//
var win = Titanium.UI.createWindow({  
    title:'Container',
    backgroundColor:'#fff'
});

//
// Simple table view
//
var tableView = Titanium.UI.createTableView({
    top: 45
});

//
// Creating some rows to populate the tableView
//
var rows = [];
for (var i = 0; i < 40; i++) {
    rows.push(Ti.UI.createTableViewRow({
        title: 'Row ' + i
    }));
}

tableView.setData(rows);

//
// Listener that remove and add the tableView again to the window.
// here is the issue on the latest SDK's (3.3.0.GA +), the scroll
// resets and show the start of the tableView if you remove and then
// add the view to the window. This wasn't happening before
//
tableView.addEventListener('click', function(e) {
    win.remove(tableView);
    win.add(tableView);
});

win.add(tableView);

win.open();
