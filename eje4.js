
function fitsInOneBox(boxes){
    return boxes
    .sort((a,b)=>a.l -b.l)
    .every((a, b, c) => {
     if (b == c.length - 1) return true;
     return a.l < c[b + 1].l && a.w < c[b + 1].w && a.h <  c[b + 1].h
    })
  }
  