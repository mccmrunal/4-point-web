//prompting for names
//var first = prompt("Enter your name player one \n YOU ARE RED")
//var second = prompt("Enter your name player two \n YOU ARE GREEN")
//global initlizations
var k = 0
array = [7,7,7,7,7,7,7];//base arrays
arr = [];
var win = 0;
megaarr();
////////////coloring circles alternatively////////////////////
console.log("connected");
//fill color on clicks
function colorChange(x,row,column){
  if (k ===0){

  $(x).css("background-color", "red");

  k =1;

  arr[(column*7)+row] = "R";
  win = checkwin();
  if (win == 1){
    window.location.href = "winnerA.html";
  }
}
else{
$(x).css("background-color", "green");
k = 0;
arr[(column*7)+row] = "G";
win = checkwin();
if (win == 1){
  window.location.href = "winnerB.html";
}
}
}


//////////////return row of a point//////////////////////

function checkrow(row){
  array[row]-=1;
  x = array[row];
  return x;
}
////////////////create arrays////////////////////////////////
var colm1 =[];
var rowall = [];
for (j = 0; j<7;j++){
for (i = 0; i<7;i++){
  colm1.push($('.dot')[(i)*7+j])
}
rowall.push(colm1)
colm1 = []
}
$( "td" ).click(function() {
     var row = parseInt($(this).attr('id'));
     var coloumn = checkrow(row)
     colorChange(rowall[row][coloumn],row,coloumn);//calling colour change function on
                                      //a [row][coloumn]

    });

////////////////restart/////////////////////////////////////

$('#restart').click(function(){
  array = [7,7,7,7,7,7,7];
  $('.dot').css("background-color", "#fa7d09  ");
  console.clear()
})
////////////////////////createallarray//////////////////////////////
function megaarr(){
for(i=0;i<49;i++){
  arr.push(i)
}
}
////////////////////checkwin/////////////////////////////////
function checkwin(){
///////////////call-to-all-win-checks//////////////////////////////
var flag = 0
rowwin();
colwin();
diagoanlwin();
crossdiagoanlwin();
/////////////////check-row-win////////////////////////////////
function rowwin() {
for(j = 0;j<7;j++){
  for(i = 0;i<4;i++)
  {
    if (arr[((j*7)+i)]==arr[((j*7)+i)+1]&&arr[((j*7)+i)+1]==arr[((j*7)+i)+2]
     && arr[((j*7)+i)+2]==arr[((j*7)+i)+3])
    {
    return 1;
    }
  }
}
}
/////////////check-coloumn-win////////////////////
function colwin() {
for(j = 0;j<7;j++){
  for(i = 0;i<4;i++)
  {
    if (arr[(i*7)+j]==arr[((i+1)*7)+j]&&arr[((i+1)*7)+j]==arr[((i+2)*7)+j] &&
    arr[((i+2)*7)+j]==arr[((i+3)*7)+j])
    {
      flag = 1;
    }
  }
}
}
/////////////////////check-diagonal win/////////////////////////
function diagoanlwin() {
for(j = 0;j<3;j++){
  for(i = 0;i<4;i++)
  {
    if (arr[(i*7)+j]==arr[((i+1)*7)+1+j]&&arr[((i+1)*7)+1+j]==arr[((i+2)*7)+2+j] &&
    arr[((i+2)*7)+2+j]==arr[((i+3)*7)+3+j])
    {
      flag = 1;
    }
  }
}
}
////////////////////check-cross-diagonal//////////////////////////////
////////////////////////////////////////////////////////////////
function crossdiagoanlwin() {
  for(j = 0;j<4;j++){
  for(i = 6; i >=3 ; i--)
  {
    if (arr[(i)+(j*6+j*1)]==arr[i+6+(j*6+j*1)] && arr[i+6+(j*6+j*1)]==arr[(i)+6*2+(j*6+j*1)] &&
    arr[(i)+6*2+(j*6+j*1)] == arr[(i)+6*3+(j*6+j*1)])
    {
      flag = 1;
    }
  }
}
}
if (flag==1){
  return flag;
}
else{

}
}


//////////result display//////////////////////////////////
function resultdisplay(){

}
