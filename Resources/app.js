// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var win = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var webview = Ti.UI.createWebView({
	url: 'local_page.html'
});

// Pass the file of the image into the webview
var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Wilber-huge-alpha.png");
webview.addEventListener("load", function(e) {
	Ti.App.fireEvent("loadImage", { path: file.nativePath });
});

win.add(webview);

win.open();
