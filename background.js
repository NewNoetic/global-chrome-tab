chrome.commands.onCommand.addListener(function(command) {
  if (command === 'new-tab') {
    chrome.windows.getAll({populate: true}, function(wins) {
      let sortedByTabs = wins.slice().sort(function(a, b) {
        if (a.tabs.length > b.tabs.length) {
          return 1
        } else if (a.tabs.length < b.tabs.length) {
          return -1
        } else {
          return 0
        }
      })
      let targetWindow = sortedByTabs.shift()
      chrome.tabs.create({windowId: targetWindow.id}, function(tab) {
        chrome.windows.update(tab.windowId, {focused: true});
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
