function Dom (){
    this.DomEvents = function () {
        this.body = new DomElement(document.body);
        this.add = function(name, el) { this[name] = new DomElement(el) };
    }
  
    function DomElement(elements) {
        var self = this;
        self.elements = elements;
        self.css = function(prop, value) {
            if(self.elements.length != undefined) {
                for(var i = 0; i < self.elements.length; i++) {  
                    this._updateCSS(elements[i], prop, value);
                }
            }
            else {
                this._updateCSS(elements, prop, value);
            }
        }
        self.addClass = function(className) {
            if(self.elements.length != undefined) {
                for(var i = 0; i < self.elements.length; i++) {  
                    this._addClass(elements[i], className);
                }
            }
            else {
                this._addClass(elements, className);
            }
        }
        self.removeClass = function(className) {
            if(self.elements.length != undefined) {
                for(var i = 0; i < self.elements.length; i++) {  
                    this._removeClass(elements[i], className);
                }
            }
            else {
                this._removeClass(elements, className);
            }
        }
        self.eventNames = ["mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", 
                           "mouseout", "mouseup", "touchcancel", "touchend", "touchmove", "touchstart"];
        (function() {     
            for( var i = 0; i < self.eventNames.length; i++) {
                self[self.eventNames[i]] = new DomEvent(self.eventNames[i], elements);
            }
        })();
    }

    this._addClass = function(element, className) {
        element.classList.add(className);
    }

    this._removeClass = function(element, className) {
        element.classList.remove(className);
    }

    this._updateCSS = function(element, prop, value) {
        if(element.style[prop] != undefined) {
            element.style[prop] = value;
        }
        else {
            console.error("Invalid CSS property.");
        }
    }
  
    function DomEvent(name, elements) {
        this.name = name;
        this.elements = elements;
        this.callBack = null;
        var self = this;
  
        function addListener(listener, el) {
            el.addEventListener(listener, self.callBack);
        }
        function removeListener(listener, el) {
            el.removeEventListener(listener, self.callBack);
        }
        this.on = function(cb) {
            self.callBack = cb;
            if(self.elements.length != undefined) {
                for(var i = 0; i < self.elements.length; i++) {            
                    addListener(name, self.elements[i]);
                }
            }
            else {
                addListener(name, self.elements);
            }
        }
        this.off = function() {
            if(self.elements.length != undefined) {
                for(var i = 0; i < self.elements.length; i++) {            
                    removeListener(name, self.elements[i]);
                }
            }
            else {
                removeListener(name, self.elements);
            }
        }
    }
    return new this.DomEvents();
}
export default Dom;