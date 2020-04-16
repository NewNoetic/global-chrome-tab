chrome.commands.onCommand.addListener(function(command) {
  if (command === 'new-tab') {
    chrome.windows.getCurrent({}, function(win){
      chrome.windows.update(win.id, {focused: true}, function() {
        chrome.tabs.create({});
      });
    });
  } else if (command === 'new-window') {
    chrome.windows.create({focused: true}, function(win){
      chrome.windows.update(win.id, {focused: true});
    });
  } else if (command === 'new-incognito-window') {
    chrome.windows.create({focused: true, incognito: true}, function(win){
      chrome.windows.update(win.id, {focused: true});
    });
  }
});
