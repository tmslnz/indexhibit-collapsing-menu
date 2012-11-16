Collapsing Menu for Indexhibit 1
================================

**Version 1.0**

## Usage
Add `collapsingMenu.js` to the `HEAD` of your page:

```html
<script type='text/javascript' src='<%baseurl%><%basename%>/site/js/collapsingMenu.js'></script>
```

Then call `collapseMenu()` on `ready`.

The most common usage scenario with Indexhibit would be to add the following to `[...]/site/templatefolder/index.php` in the `<head>`:

```html
<script type='text/javascript'>
    $(document).ready(function () {
        collapseMenu();
    });
</script>
```

## Options
`collapseMenu()` can be passed an optional `string` or `number` value corresponding to the menu you want to collapse/expand.

```js
collapseMenu('Projects'); // Will collapse the Projects menu
```

or

```js
collapseMenu(3); // Will collapse the third menu
```

If no option is passed all menus will automatically collapse and expand.

## CSS
This plugin adds three classes to your source:

- `cm` is added to each `UL`
- `cm-expanded` or `cm-collapsed` are added each `UL` depending on its current state.