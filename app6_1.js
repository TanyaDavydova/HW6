function CapitaleLetter(contents){
 var collection="";

 //console.log(viu[5]==0);


for(i=0; i<contents.length; i++){
 if (contents[i-1]==0){
  collection += (contents[i].toUpperCase());
 } 
 else {
  collection += (contents[i].toLowerCase());
 }
 if(i!=contents.length-1){
  continue;
 }
 console.log(collection[0].toUpperCase() + collection.slice(1));
 }

}

CapitaleLetter("nnnnnn nnnnn nnnnn nnnnn jjy");