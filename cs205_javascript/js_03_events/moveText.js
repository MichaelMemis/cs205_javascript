var dragState = null;

function handleMouseDown(event, div_node) {
   dragState = new Object();
   dragState.origx = parseInt(div_node.style.left);
   dragState.origy = parseInt(div_node.style.top);
   dragState.startx = event.clientX;
   dragState.starty = event.clientY;
   dragState.node = div_node;
}

function handleMouseUp() {
   if (dragState != null) {
      dragState = null;
   }
}

function handleMouseMove(event) {
   if (dragState == null) {
      return;
   }

   var div_node = dragState.node;

   div_node.style.left = (dragState.origx + 
                         (event.clientX - dragState.startx)) + "px";
   div_node.style.top = (dragState.origy + 
                        (event.clientY - dragState.starty)) + "px";
}

