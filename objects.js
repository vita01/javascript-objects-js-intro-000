var playlist={
'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes',

}
function updatePlaylist(obg,name,song){
 obg[name]=song;
//  Object.assign({},obj,name:song);
  return obg;
}

function removeFromPlaylist(obg,name){
   if(abg.name) delete obg.name;
  return obg;
}
