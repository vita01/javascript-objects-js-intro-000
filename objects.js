var playlist={
'Frank Ocean':"Blonde",
'Chance The Rapper':"Coloring Book",
'ANOHNI':"Hopelessness",
  
}
function updatePlaylist(obg,name,song){

//  Object.assign({},obj,name:song);
  return obg.name=song;
}

function removeFromPlaylist(obg,name){
  return delete obg.name;
}