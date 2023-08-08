TOOLTIP
-------------------------------------------------------------------------

INSTALLATION AND RUNNING

1. `git clone https://github.com/zepher-23/skilltest-tooltip.git`.
2. `cd REACT-TOOLTIP` then `npm install`.
3. `npm run dev` this will start a development server.
4. `npm run build` this will build a production level app stored in `dist` folder.

-----------------------------------------------------------------------------

This is a simple project it contains a button in the middle of the screen,
when you hover over it a tooltip appears showing some message.
The tooltips position will depend on the mouse position over that element,
it uses the mouse event to record the mouse position and in reference to the location 
the tooltip appears in either `top`, `bottom`, `left` or `right`.

The position is decided in the main `App.jsx` and the value is passed to the `ToolTip.jsx` component as a prop
along with the mouse position values.

