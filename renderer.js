var counterollo=0;
var files1;
var files2;

var checksum1="pippo";
var checksum2="pippo";
var drop1_filled_check=false;
var drop2_filled_check=false;

const drop1=document.getElementById("drop1");
const drop2=document.getElementById("drop2");
//--------
drop1.addEventListener("dragover",(e) => {
    e.stopPropagation();
    e.preventDefault();
});
drop1.addEventListener("drop",(e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);
    files1=e.dataTransfer.files;
    if(files1.length>1)
        {
            console.log("you can drop only one file or zipped folder");
            drop_filename("you can drop only one file or zipped folder","drop1_text");
        }
    else
        {
            console.log("abemus file1");
            drop1_filled_check=true;
            for(const file of files1)
            {
                
                drop_filename(file.name,"drop1_text");
                console.log(file);
                checksum1=(window.nodecrypto.do_checksum(file.path));
                console.log("sended "+file.path+" received "+checksum1);
                show_checksum(checksum1,"checksum1_text");
                 
            }     
           
            check_both_file_presence();
            
        }
});
//--------
drop2.addEventListener("dragover",(e) => {
    e.stopPropagation();
    e.preventDefault();
});
drop2.addEventListener("drop",(e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);
    files2=e.dataTransfer.files;
    if(files2.length>1)
    {
        console.log("you can drop only one file or zipped folder");
        drop_filename("you can drop only one file or zipped folder","drop2_text");
    }
    else
    {
        console.log("abemus file2");
        drop2_filled_check=true;
        for(const file of files2)
        {
            
            drop_filename(file.name,"drop2_text");
            console.log(file);
            checksum2=(window.nodecrypto.do_checksum(file.path));
            console.log("sended"+file.path+" received "+checksum2);
            show_checksum(checksum2,"checksum2_text");
        }
        check_both_file_presence();
        
    }
});
//--------
function confirm() 
{
  document.getElementById("status").innerHTML = "&#9989; files matching &#9989;";
}
function deny() 
{
  document.getElementById("status").innerHTML = "&#10060; files NOT matching &#10060;";
}
//--------

function drop_filename(filename,id)
{
    //"&#128196 "+
  document.getElementById(id).innerHTML = filename; 
}

function show_checksum(checksum,id)
{
    document.getElementById(id).innerHTML = "MD5: "+checksum; 
}

function check_both_file_presence()
{
    if(drop1_filled_check && drop2_filled_check)
       checksum_compare(checksum1,checksum2);
    else
        bothfilepresent=false;
}
function checksum_compare(csum1,csum2)
{
    if(csum1 === csum2)
        confirm();
    else
        deny();
}
