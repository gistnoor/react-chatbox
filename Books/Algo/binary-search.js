Array.prototype.binaryserach = function(o) {
    var l = 0, u = this.length, m;
    while( l <= u) {
        if ( o > this[m = Math.floor((l + u) / 2)] ) l = m + 1;
        else u = (o == this[m]) ? -2 : m - 1; 
    }
    return (u == 2) ? m : -1;
}

