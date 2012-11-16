/*
Collapsing Menu for Indexhibit 1
Created by Tommaso Lanza for Arianeprin.com, 2012.
Includes a few workarounds for jQuery 1.1.x missing features. The old times!
*/


function collapseMenu (menu) {
  var cached = window.cmCached = window.cmCached || [];
  var menuTitle, menuPos;
  if (typeof menu === 'string') menuTitle = menu;
  else if (typeof menu === 'number') menuPos = menu;

  var $menus = $('#menu .container ul');

  $menus.each(function (i, el) {
    el = $(el);
    var titleEl = el.children(":first");
    var titleText = titleEl.text();
    var titleElOuterHeight = getOuterHeight(titleEl);
    var items = el.children().filter(function (i) { return i > 0; });
    var isActive = false;
    var elOuterHeight = getOuterHeight(el);

    items.each(function (i, li) {
      li = $(li);
      if (li.is('.active') && li.text().toLowerCase() !== 'welcome') isActive = true;
    });

    if (!cached[i]) cached.push({ el : el
                                , titleEl       : titleEl
                                , titleText     : titleText
                                , titleElHeight : titleElOuterHeight
                                , elHeight      : elOuterHeight 
                                });

    // Set up some basic hooks & CSS
    el.css('overflow', 'hidden');
    el.addClass('cm');
    el.addClass('cm-expanded');
    titleEl.css('cursor', 'pointer');
    titleEl.addClass('cm-title');


    // Skip if it doesn't match the requested item.
    // If no arguments are passed, all menus will collapse.
    if (menuTitle && menuTitle.toLowerCase() !== titleText.toLowerCase()) return;
    if (menuPos !== undefined && i !== menuPos) return;

    if (!isActive) {
      el.height(cached[i].titleElHeight);
      el.addClass('cm-collapsed');
      el.removeClass('cm-expanded');
      el.css('overflow', 'hidden');
    }

    titleEl.click(function (e) {
      e.preventDefault();
      if (el.is('.cm-expanded')) {
        el.animate({
          height : cached[i].titleElHeight
        }, 500, function () {
          el.removeClass('cm-expanded');
          el.addClass('cm-collapsed');
          el.css('overflow', 'hidden');
        });
      } else if (el.is('.cm-collapsed')) {
        el.animate({
          height : cached[i].elHeight
        }, 500, function () {
          el.removeClass('cm-collapsed');
          el.addClass('cm-expanded');
        });
      }
    });
  });

  // Util
  function val (string) {
    var re = /^([0-9]+)(.+)$/g;
    return parseInt(string.split(re)[1], 10);
  }

  function getOuterHeight (el) {
    var height = el.height();
    var margin = {  top: val(el.css('margin-top'))
                  , bottom: val(el.css('margin-bottom'))
                  };
    var padding = { top: val(el.css('padding-top'))
                  , bottom: val(el.css('padding-bottom'))
                  };
    var border = {  top: val(el.css('border-top-width'))
                  , bottom: val(el.css('border-bottom-width'))
                  };
    return height+margin.top+margin.bottom+border.top+border.bottom+padding.top+padding.bottom;
  }
}